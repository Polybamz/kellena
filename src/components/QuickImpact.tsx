import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
// Make sure you have framer-motion installed: npm install framer-motion
import { motion, useInView, animate, color } from "framer-motion";

/**
 * NEW: AnimatedNumber Component
 * A reusable component to animate a number counting up.
 */
export function AnimatedNumber({ value }) {
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
      number: "80+",
      label: "Communities Served",
      description: "Across rural and urban areas in Cameroon",
      color: "bg-blue-100"
    },
    {
      icon: "👥",
      number: "5,000+",
      label: "Lives Transformed",
      description: "Through our empowerment programs",
      color: "bg-red-100"
    },
    {
      icon: "🎓",
      number: "200+",
      label: "Youth Trained",
      description: "In livelihood and leadership skills",
      color: "bg-green-100"
    },
    {
      icon: "💰",
      // Updated currency for Cameroon
      number: "N/A",
      label: "Economic Impact",
      description: "Generated through our programs",
      color: "bg-yellow-100/50"
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
              <Card className={`h-full ${stat.color} min-h-[200px] border-border/50 hover:shadow-lg  hover:-translate-y-2 transition-all duration-300 relative`}>
                <div className="h-[60px] w-[60px] absolute left-3 bottom-20 border boreder-blue-900/40  rounded-full"></div>
                <div className="h-[30px] w-[30px] absolute right-4 bottom-20 border boreder-blue-900/40  rounded-full"></div>
                <div className="h-[60px] w-[60px] absolute right-4 bottom-2 border boreder-blue-900/40  rounded-full"></div>
                <CardContent className="p-6 text-center  flex flex-col justify-center items-center h-full">
                  <div className="text-3xl mb-2 bg-white h-[70px] w-[70px] flex justify-center items-center rounded-full absolute top-[-30px] right-[40%] p-1 ">
                    <div className="w-full h-full border-2 border-dashed rounded-full flex justify-center items-center">
                      {stat.icon}

                    </div>                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-primary ">
                    {/* Use the new AnimatedNumber component */}
                    <AnimatedNumber value={stat.number} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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