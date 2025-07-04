import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProgramsOverview = () => {
  const programs = [
    {
      title: "Livelihood Empowerment",
      icon: "💼",
      description: "Supporting sustainable income generation through skills training, micro-finance, and entrepreneurship development.",
      highlights: ["Skills Training", "Micro-finance Support", "Business Mentorship"],
      color: "border-primary"
    },
    {
      title: "Empathy Circles",
      icon: "💝",
      description: "Creating safe spaces for emotional healing, conflict resolution, and community building through structured dialogue.",
      highlights: ["Community Healing", "Conflict Resolution", "Mental Wellness"],
      color: "border-accent"
    },
    {
      title: "Youth Empowerment",
      icon: "🌟",
      description: "Equipping young people with leadership skills, education support, and career guidance for a brighter future.",
      highlights: ["Leadership Training", "Education Support", "Career Guidance"],
      color: "border-secondary"
    },
    {
      title: "Community Development",
      icon: "🏘️",
      description: "Building stronger communities through infrastructure support, capacity building, and collaborative projects.",
      highlights: ["Infrastructure", "Capacity Building", "Community Projects"],
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