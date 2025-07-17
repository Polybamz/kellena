import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
// Make sure you have framer-motion installed: npm install framer-motion
import { motion, useInView, animate } from "framer-motion";

/**
 * NEW: AnimatedNumber Component
 * A reusable component to animate a number counting up.
 */
function AnimatedNumber({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && ref.current) {
      // Extracts the numerical part from the string (e.g., "5,000+" -> 5000)
      const numberValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
      
      const controls = animate(0, numberValue, {
        duration: 2, // Animation duration in seconds
        ease: "easeOut",
        onUpdate(latest) {
          // Format the number with commas and update the element's text
          ref.current.textContent = latest.toLocaleString();
        },
        onComplete() {
            // After animation, set the final text content including non-numeric parts
            ref.current.textContent = value;
        }
      });
      
      return () => controls.stop();
    }
  }, [isInView, value]);

  // We render the final value initially for non-JS users or quick flashes
  return <span ref={ref}>{value}</span>;
}


const QuickImpact = () => {
  const impactStats = [
    {
      icon: "🏘️",
      number: "50+",
      label: "Communities Served",
      description: "Across rural and urban areas in Cameroon"
    },
    {
      icon: "👥",
      number: "5,000+",
      label: "Lives Transformed",
      description: "Through our empowerment programs"
    },
    {
      icon: "🎓",
      number: "200+",
      label: "Youth Trained",
      description: "In livelihood and leadership skills"
    },
    {
      icon: "💰",
      // Updated currency for Cameroon
      number: "FCFA 50M+", 
      label: "Economic Impact",
      description: "Generated through our programs"
    }
  ];
  
  // Framer Motion variants for the container and items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and 50px down
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1], // Use a cubic-bezier array for ease
      }
    }, // Animate to visible and original position
  };

  return (
    <section className="py-20 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how KELLENA is making a difference in communities across Cameroon
          </p>
        </div>

        {/* Use motion.div for the grid container to orchestrate animations */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Triggers animation when element enters viewport
          viewport={{ once: true, amount: 0.2 }} // Animate once, when 20% of it is visible
        >
          {impactStats.map((stat, index) => (
            // Use motion.div for each card to apply item variants
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full bg-card border-border/50 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-6 text-center flex flex-col items-center h-full">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {/* Use the new AnimatedNumber component */}
                    <AnimatedNumber value={stat.number} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-auto">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickImpact;