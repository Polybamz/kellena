import { Card, CardContent } from "@/components/ui/card";

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
      number: "₵2M+",
      label: "Economic Impact",
      description: "Generated through our programs"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how KELLENA is making a difference in communities across Cameroon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickImpact;