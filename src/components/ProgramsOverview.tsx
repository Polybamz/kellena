import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsOverview = () => {
  // NOTE: The unused 'events' variable has been removed.

  const programs = [
    {
      title: "Mental Health Support",
      icon: "🧠",
      description: "Enhancing mental health and providing psychosocial support to individuals in need, particularly vulnerable populations.",
      highlights: ["Counseling Services", "Psychosocial Support", "Trauma Care"],
      color: "border-primary" // e.g., border-blue-500
    },
    {
      title: "Child Protection",
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
  ];

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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Core Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            KELLENA operates four integrated programs designed to address the root causes of 
            community challenges while building resilience and hope.
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className={`relative h-full overflow-hidden bg-card hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border ${program.color} border-l-4`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{program.icon}</div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {program.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Focus Areas:</h4>
                    <motion.div 
                        className="flex flex-wrap gap-2"
                        variants={highlightsContainerVariants}
                    >
                      {program.highlights.map((highlight, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          variants={highlightItemVariants}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                  <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground transition-colors">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-95 hover:scale-105 px-8 py-6 text-lg"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;