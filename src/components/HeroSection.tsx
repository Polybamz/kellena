import { useState, useEffect } from "react";
// Import motion and AnimatePresence from Framer Motion
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Make sure your image paths are correct and accessible
const imagesLanding = [
  '/src/assets/images/landing/landing.jpg',
  '/src/assets/images/landing/meeting1.jpg',
  '/src/assets/images/landing/meeting2.jpg',
  '/src/assets/images/landing/meeting3.jpg'
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Empowering Communities Through Compassion",
      subtitle: "Building sustainable livelihoods and fostering empathy across Cameroon",
      cta: "Join Our Mission",
      stats: { number: "5,000+", label: "Lives Transformed" }
    },
    {
      title: "Youth Empowerment for Tomorrow",
      subtitle: "Equipping young minds with skills, opportunities, and hope for the future",
      cta: "Support Youth",
      stats: { number: "200+", label: "Youth Trained" }
    },
    {
      title: "Building Empathy Circles",
      subtitle: "Creating safe spaces for healing, understanding, and community connection",
      cta: "Learn More",
      stats: { number: "50+", label: "Communities Reached" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Changed to 7000ms to allow animations to complete comfortably
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  // Framer Motion variants for staggered animation
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate children one after another
      },
    },
  };

  const textItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100 },
    },
  };

  return (
    <section className="relative min-h-[85vh] text-primary-foreground overflow-hidden">
      {/* Animated Background Images */}
      <AnimatePresence>
        <motion.div
          key={currentSlide} // Key change triggers enter/exit animation
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagesLanding[currentSlide]})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#A0191F]/70 to-[#09246D]/70" />

      {/* Background Pattern with pulse animation */}
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary-foreground rounded-full"></div>
      </div>

      <div className="relative px-4 sm:px-6 lg:px-8 min-h-[85vh] w-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Animated Hero Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide} // Change key to re-trigger animations on slide change
              variants={textContainerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.h1 variants={textItemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p variants={textItemVariants} className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                <motion.div variants={textItemVariants} className="text-sm text-primary-foreground/80 font-medium">
                  Keeping Empathy and Livelihood Empowerment Network Association
                </motion.div>
              </div>

              {/* Hero CTA Buttons with hover animation */}
              <motion.div variants={textItemVariants} className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent-light transition-all shadow-warm text-lg px-8 py-6 hover:scale-105 active:scale-100">
                  {heroSlides[currentSlide].cta}
                </Button>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all text-lg px-8 py-6 hover:scale-105 active:scale-100">
                  Watch Our Story
                </Button>
              </motion.div>

              {/* Impact Stats with animated number */}
              <motion.div variants={textItemVariants}>
                <Card className="p-6 bg-card/10 backdrop-blur border-primary-foreground/20">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-accent">
                      {heroSlides[currentSlide].stats.number}
                    </div>
                    <div className="text-primary-foreground/90">
                      {heroSlides[currentSlide].stats.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' 
                : 'bg-primary-foreground/50 hover:bg-primary-foreground/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;