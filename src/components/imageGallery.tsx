import  { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react'; 
// ImageGallery Component
export const ImageGallery = ({ images = [], altTextPrefix = "Gallery image" }) => {
  // Ref to the scrollable container for navigation
  const scrollContainerRef = useRef(null);
  // State for controlling the modal (lightbox) visibility
  const [showModal, setShowModal] = useState(false);
  // State to store the index of the currently selected image for the modal
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle scrolling the gallery left or right
  const scrollGallery = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.7; // Scroll by 70% of container width
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Open the modal with the clicked image
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setShowModal(true);
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Handle keyboard navigation for the modal
  const handleKeyDown = useCallback((event) => {
    if (showModal) {
      if (event.key === 'Escape') {
        closeModal();
      } else if (event.key === 'ArrowLeft') {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else if (event.key === 'ArrowRight') {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      }
    }
  }, [showModal, images.length]);

  // Add and remove keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center h-48 bg-gray-100 rounded-lg shadow-inner text-gray-500 text-lg">
        No images to display.
      </div>
    );
  }

  return (
    <section className="relative w-full py-4" aria-labelledby="image-gallery-heading">
      {/* Visually hidden heading for accessibility */}
      <h2 id="image-gallery-heading" className="sr-only">Image Gallery</h2>

      <div className="flex items-center justify-center">
        {/* Left Navigation Button */}
        <button
          onClick={() => scrollGallery('left')}
          aria-label="Scroll left"
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10 mr-2"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scrollable Image Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 p-4 rounded-xl bg-gray-50 shadow-inner border border-gray-200 custom-scrollbar scroll-snap-x-mandatory animate-scroll-right"
          style={{ minHeight: '280px', maxHeight: '350px' }} // Fixed height for consistent rows
          role="region"
          aria-label="Scrollable image list"
        >
          {images.map((imageSrc, index) => (
            <div
              key={imageSrc + index} // Using index as well for unique key in case of duplicate imageSrc
              className="flex-shrink-0 w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer border border-gray-100 group snap-center"
              onClick={() => openModal(index)}
              role="button"
              tabIndex={0}
              aria-label={`View image ${index + 1}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openModal(index);
                }
              }}
            >
              <img
                src={imageSrc}
                alt={`${altTextPrefix} ${index + 1}`}
                className="object-contain w-full h-full p-2 group-hover:p-0 transition-all duration-300" // object-contain to show full image
                loading="lazy"
                onError={(e) => { 
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "https://placehold.co/600x400/CCCCCC/666666?text=Image+Error"; 
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scrollGallery('right')}
          aria-label="Scroll right"
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-10 ml-2"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Image Modal (Lightbox) */}
      {showModal && (
        <ImageModal
          images={images}
          currentIndex={currentImageIndex}
          onClose={closeModal}
          altTextPrefix={altTextPrefix}
          onNavigate={(newIndex) => setCurrentImageIndex(newIndex)}
        />
      )}

      {/* Custom Scrollbar Styles (add this to your main CSS or a style block) */}
      <style>
        {`
        .custom-scrollbar::-webkit-scrollbar {
          height: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        .scroll-snap-x-mandatory {
          scroll-snap-type: x mandatory;
        }
        .scroll-snap-x-mandatory > div {
          scroll-snap-align: center;
        }
        `}
      </style>
    </section>
  );
};

// ImageModal Component (Lightbox)
const ImageModal = ({ images, currentIndex, onClose, altTextPrefix, onNavigate }) => {
  const currentImage = images[currentIndex];

  const goToNext = () => {
    onNavigate((currentIndex + 1) % images.length);
  };

  const goToPrev = () => {
    onNavigate((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
    >
      <div className="relative bg-white rounded-lg shadow-2xl p-4 max-w-4xl max-h-[90vh] overflow-hidden flex flex-col items-center justify-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900 transition-colors duration-200 z-10 focus:outline-none focus:ring-4 focus:ring-red-400"
          aria-label="Close image viewer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="flex-grow flex items-center justify-center w-full h-full max-h-[70vh] p-4">
          <img
            src={currentImage}
            alt={`${altTextPrefix} ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-md" // Ensure image fits within modal
            onError={(e) => { 
              const target = e.target as HTMLImageElement;
              target.onerror = null; 
              target.src = "https://placehold.co/800x600/CCCCCC/666666?text=Image+Error"; 
            }}
          />
        </div>

        {/* Navigation Buttons within Modal */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={goToPrev}
            className="p-3 bg-gray-700 text-white rounded-r-lg opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={goToNext}
            className="p-3 bg-gray-700 text-white rounded-l-lg opacity-70 hover:opacity-100 transition-opacity duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        {/* Image Counter */}
        <div className="mt-4 text-gray-700 text-lg font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};