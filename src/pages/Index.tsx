import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickImpact from "@/components/QuickImpact";
import ProgramsOverview from "@/components/ProgramsOverview";
import StoriesOfChange from "@/components/StoriesOfChange";
import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import useGetData from "@/hooks/use-getData";

const Index = () => {
  const { events, impactStories, programs, loading, error } = useGetData();
  console.log(loading)
  console.log(error)
  console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG',events)
  console.log(impactStories)
  console.log(programs)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <QuickImpact />
      <ProgramsOverview />
      <StoriesOfChange />
      <BlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
