import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CallToAction = () => {
  const actionCards = [
    {
      title: "Donate",
      icon: "💖",
      description: "Support our programs with a one-time or monthly donation",
      action: "Donate Now",
      bg: "bg-gradient-primary",
      textColor: "text-primary-foreground"
    },
    {
      title: "Volunteer",
      icon: "🤝",
      description: "Join our team and make a direct impact in communities",
      action: "Get Involved",
      bg: "bg-gradient-warm",
      textColor: "text-accent-foreground"
    },
    {
      title: "Partner",
      icon: "🌍",
      description: "Collaborate with us on sustainable development projects",
      action: "Partner With Us",
      bg: "bg-secondary",
      textColor: "text-secondary-foreground"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            There are many ways to support KELLENA's work in building empathetic, 
            empowered communities across Cameroon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {actionCards.map((card, index) => (
            <Card 
              key={index}
              className={`${card.bg} ${card.textColor} border-none hover:shadow-warm transition-all duration-300 animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="mb-6 opacity-90 leading-relaxed">
                  {card.description}
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur text-inherit"
                >
                  {card.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-card border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Connected
              </h3>
              <p className="text-muted-foreground mb-6">
                Get updates on our programs, success stories, and upcoming events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary-light px-8">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;