import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProgramsOverview = () => {
  // NOTE: The unused 'events' variable has been removed.
  const [sliceValue, setSliceValue] = useState(true)


  const programs = [
    {
      title: "Mental Health Support",
      icon: "🧠",
      description: "Enhancing mental health and providing psychosocial support to individuals in need, particularly vulnerable populations.",
      highlights: ["Counseling Services", "Psychosocial Support", "Trauma Care"],
      color: "border-primary" // e.g., border-blue-500
    },
    {
      title: "Child Protectio/Safeguarding",
      icon: "🛡️",
      description: "Safeguarding children from violence and ensuring their rights are protected through comprehensive protection measures.",
      highlights: ["Child Safety", "Violence Prevention", "Rights Protection"],
      color: "border-accent" // e.g., border-yellow-500
    },
    {
      title: "Disability Inclusion",
      icon: "♿",
      description: "Promoting inclusion of individuals with disabilities in education and community activities, advocating for their capabilities.",
      highlights: ["Inclusive Education", "Rights Advocacy", "Community Integration"],
      color: "border-secondary" // e.g., border-green-500
    },
    {
      title: "WASH Programs",
      icon: "🌊",
      description: "Ensuring access to clean water, sanitation, and hygiene facilities for improved community health and well-being.",
      highlights: ["Clean Water", "Sanitation", "Health Education"],
      color: "border-red-500" // Example color
    }

    ,
    {
      title: "Sexual and Producrive Health Right",
      icon: "🧑🏾‍🦳",
      description: "Fight against gender base voilence",
      highlights: ["Clean Water", "Sanitation", "Health Education"],
      color: "border-blue-500" // Example color
    },
    {
      title: "GBV",
      icon: "🧑🏾‍🦳",
      description: "Fight against gender based violence",
      highlights: ["Clean Water", "Sanitation", "Health Education"],
      color: "border-blue-500" // Example color
    }
  ];
  const [disPro] = useState(programs.slice(0, 3))

  // Animation variants for the main grid container
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // This will animate each card one after the other
      },
    },
  };

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Nested animation for the highlight tags
  const highlightsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Stagger the tags
      },
    },
  };

  const highlightItemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="w-full flex max-lg:flex-col">
          <div className="w-1/2 max-lg:w-full flex flex-col justify-start items-start">
            <p className="text-2xl font-bold text-yellow-500 text-start">What We Do</p>
            <h1 className="text-5xl text-blue-900 text-start font-bold">Change <br />The World</h1>
            <p className="text-start">
              We believe that changing the world doesn't start with power,wealth, or fame.<br /> It begins with one person deciding to care deeply, intentionally, and consistently. <br />At our core, that,s who we are people who care enough to act.<br /><br />
              Our organization was born not from ambition but from compassion.<br /> From listerning to a mother who walks miles for clean water.<br /> From sitting with a child silenced by abused. From hearing the quiet resilience of a person living with a disability who refuses to be invisible.<br /> These moments didn't break us they called us forward
              </p>
            <Link to={"/get-involve"} className="bg-gradient-warm rounded-md py-2 px-4 text-accent-foreground hover:opacity-90 transition-opacity mt-6">Get Involved</Link>
          </div>
          <div className="w-1/2 max-lg:w-full flex flex-col justify-start items-start gap-4">
            {
              disPro.map((program, index) =>
                <motion.div key={index} variants={cardVariants} className={`w-full flex  justify-center items-center bg-white rounded-4 shadow-lg `}>
                  <div className={`w-1/3 h-full min-h-[120px] rounded-l-[4px] border ${program.color} flex justify-center items-center text-5xl`}>
                    {program.icon}
                  </div>
                  <div className="w-full max-sm:w-2/3 flex flex-col justify-start items-start gap-2 p-2">
                    <p className="text-2xl text-blue-900 font-[600]">{program.title}</p>
                    <p>{program.description}</p>
                    <div className="flex gap-2 max-sm:flex-wrap">
                      {
                        program.highlights.map((item, index) => (
                          <div key={index} className="px-2 bg-red-100/50 rounded-full flex  items-center justify-center">
                            <p>{item}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </motion.div>
              )
            }
          </div>
        </motion.div>
        <div className="text-center mt-5">
          <Link to={'/programs'}
            className="underlined text-blue-900 hover:bg-primary/90 transition-all active:scale-95 hover:scale-105 px-8 py-2 rounded-[4px] text-lg"
          >View All Programs</Link>
      
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;