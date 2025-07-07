import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsOverview = () => {
  const programs = [
    {
      title: "Mental Health Support",
      icon: "🧠",
      description: "Enhancing mental health and providing psychosocial support to individuals in need, particularly vulnerable populations.",
      highlights: ["Counseling Services", "Psychosocial Support", "Trauma Care"],
      color: "border-primary"
    },
    {
      title: "Child Protection",
      icon: "🛡️",
      description: "Safeguarding children from violence and ensuring their rights are protected through comprehensive protection measures.",
      highlights: ["Child Safety", "Violence Prevention", "Rights Protection"],
      color: "border-accent"
    },
    {
      title: "Disability Inclusion",
      icon: "♿",
      description: "Promoting inclusion of individuals with disabilities in education and community activities, advocating for their capabilities.",
      highlights: ["Inclusive Education", "Rights Advocacy", "Community Integration"],
      color: "border-secondary"
    },
    {
      title: "WASH Programs",
      icon: "🌊",
      description: "Ensuring access to clean water, sanitation, and hygiene facilities for improved community health and well-being.",
      highlights: ["Clean Water", "Sanitation", "Health Education"],
      color: "border-maroon"
    }
  ];

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

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card hover:shadow-primary transition-all duration-300 border-l-4 ${program.color} animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
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
                  <div className="flex flex-wrap gap-2">
                    {program.highlights.map((highlight, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4 hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-warm text-accent-foreground hover:opacity-90 px-8 py-6 text-lg"
          >
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsOverview;