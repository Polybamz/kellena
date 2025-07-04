import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickImpact from "@/components/QuickImpact";
import ProgramsOverview from "@/components/ProgramsOverview";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <QuickImpact />
      <ProgramsOverview />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
