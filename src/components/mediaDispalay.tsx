import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MediaDisplayProps {
    mediaUrls?: string[];
    className?: string
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ mediaUrls = [], className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!mediaUrls.length) {
        return <p className="text-gray-500 text-center">No media available</p>;
    }

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaUrls.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + mediaUrls.length) % mediaUrls.length);
    };

    const currentUrl = mediaUrls[currentIndex];
    const isVideo = /\.(mp4|mov|webm|ogg)$/i.test(currentUrl);

    return (
        <div className={className ? className : "relative w-full h-[70vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden"}>
            <div className="w-full h-full flex items-center justify-center bg-background">
                {isVideo ? (
                    <video
                        src={currentUrl}
                        controls
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                        src={currentUrl}
                        alt={`Media ${currentIndex + 1}`}
                        className="w-full h-full object-contain"
                    />
                )}
            </div>

            {mediaUrls.length > 1 && (
                <>
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        aria-label="Previous"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white dark:bg-white/40 dark:text-black p-2 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronLeft className="h-4 w-4 " />

                    </button>
                    <button
                        onClick={handleNext}
                        aria-label="Next"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 text-white dark:bg-white/40 dark:text-black p-2 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronRight className="h-4 w-4 " />
                    </button>
                </>
            )}

            {/* Counter */}
            <div className="absolute bottom-2 right-4 bg-cyan-500/60 text-white text-sm px-3 py-1 rounded-md">
                {currentIndex + 1} / {mediaUrls.length}
            </div>
        </div>
    );
};

export default MediaDisplay;
