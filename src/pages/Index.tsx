import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickImpact from "@/components/QuickImpact";
import ProgramsOverview from "@/components/ProgramsOverview";
import StoriesOfChange from "@/components/StoriesOfChange";
// import BlogSection from "@/components/BlogSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import useGetData from "@/hooks/use-getData";
// import { useState, useEffect } from "react";
// // // import subsModal from "@/components/subsModal";
// // import { Link } from "react-router-dom";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import m1 from "../assets/images/gallery/m1.jpg";
// import m4 from "../assets/images/gallery/m4.jpg";

const Index = () => {
  // const activities = [
  //   {
  //     title: "📃We are Just getting started",
  //     text: "Our journey is still unfolding. Each project is a step closer to a more just and compassionate world. ",
  //     url: m1,
      
  //   },
  //   {
  //     title: "Get Involve",
  //     text: "No matter your background,there's a place for you here. Be the reason someone's life changes today",
  //     to: '/get-involved',
  //     url: m4
  //   },
  // ]
  // const [open, setOpen] = useState(true)
  const { events, impactStories, programs, loading, error } = useGetData();
  console.log(loading)
  console.log(error)
  console.log('GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG', events)
  console.log(impactStories)
  console.log(programs)

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <QuickImpact />
        <ProgramsOverview />
        <StoriesOfChange />
        {/* <BlogSection /> */}
        {/* <div className="w-full flex flex-col p-6">
        {activities.map((activity, index) => (
          <div className={`w-full bg-transpqrent border-0 shadow-0`}>
            <CardContent className={`w-full lg:h-[400px] flex ${index % 2 == 0 ? 'flex-row max-lg:flex-col' : 'flex-row-reverse max-lg:flex-col'} justify-center items-center`}>

              <div className="w-1/2 p-4 max-lg:w-full">
                <CardHeader>
                  <CardTitle>{activity.title}</CardTitle>
                </CardHeader>
                <p className="mb-2">
                  {activity.text}
                </p>
               {activity.to && (<Link to={activity.to} className="bg-gradient-warm rounded-md py-2 px-4 text-accent-foreground hover:opacity-90 transition-opacity mt-6">Get Involved</Link>)}
              </div>
              <div className="w-1/2 h-full p-4 max-lg:w-full flex justify-center items-center">
                <img src={activity.url} alt="" className="  max-h-[400px] h-auto mx-auto object-cover border-2 border-primary/20"
                />
              </div>
            </CardContent>


          </div>
        ))}
      </div> */}
      <CallToAction />
      <Footer />
      {/* <subsModal 
      open={open} 
      setOpen = {setOpen}
      /> */}
    </div >
    </>
    
  );
};

export default Index;
