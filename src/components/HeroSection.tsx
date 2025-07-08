import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const imagesLanding = [
  'src/assets/images/landing/meeting1.jpg',
  'src/assets/images/landing/meeting2.jpg',
  'src/assets/images/landing/meeting3.jpg'
   
 ]

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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentContent = heroSlides[currentSlide];

  return (
    <section className={`relative min-h-[85vh] bg-gradient-hero text-primary-foreground overflow-hidden bg-[url(/src/assets/images/landing/landing.jpg)]  bg-cover repeat-non bg-black/50`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border border-primary-foreground rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-primary-foreground rounded-full"></div>
      </div>

      <div className=" px-4 sm:px-6 lg:px-8 min-h-[85vh] w-full flex items-center bg-gradient-to-r from-[#A0191F]/60 to-[#09246D]/60">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {currentContent.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                {currentContent.subtitle}
              </p>
              <div className="text-sm text-primary-foreground/80 font-medium">
                Keeping Empathy and Livelihood Empowerment Network Association
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent-light transition-all shadow-warm text-lg px-8 py-6"
              >
                {currentContent.cta}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all text-lg px-8 py-6"
              >
                Watch Our Story
              </Button>
            </div>

            {/* Impact Stats */}
            <div className="pt-8">
              <Card className="p-6 bg-card/10 backdrop-blur border-primary-foreground/20">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {currentContent.stats.number}
                  </div>
                  <div className="text-primary-foreground/90">
                    {currentContent.stats.label}
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <Card className="p-8 bg-card/10 backdrop-blur border-primary-foreground/20 rounded-3xl shadow-soft">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Our Impact Today</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">5K+</div>
                      <div className="text-sm">Lives Changed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-tertiary">50+</div>
                      <div className="text-sm">Communities</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent-light">200+</div>
                      <div className="text-sm">Programs</div>
                    </div>
                  </div>
                </div>
                
                {/* Little Bibi Hero Image */}
                <div className="w-full h-64 rounded-2xl overflow-hidden">
                  <img 
                    src="/src/assets/little-bibi-hero.jpg" 
                    alt="Little Bibi receiving care" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4 p-4 bg-card/20 rounded-xl">
                  <p className="text-primary-foreground/90 font-medium">
                    "A New Life Begins – Little Bibi is now receiving care, thanks to the support of people like you."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
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