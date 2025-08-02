import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AnimatedNumber } from "@/components/QuickImpact";

const Impact = () => {
  const impactStats = [
    {
      icon: "💝",
      number: "50+",
      label: "Lives Directly Saved",
      description: "Emergency medical interventions and critical care coordination",
      progress: 85
    },
    {
      icon: "🚑",
      number: "200+",
      label: "Medical Transportations",
      description: "Connecting rural patients with urban healthcare facilities",
      progress: 90
    },
    {
      icon: "👥",
      number: "2,000+",
      label: "Community Members",
      description: "Active supporters and volunteers in our network",
      progress: 75
    },
    {
      icon: "🏘️",
      number: "25+",
      label: "Communities Reached",
      description: "Across Donga-Mantung Division and surrounding areas",
      progress: 60
    }
  ];

  const testimonials = [
    {
      name: "Little Bibi's Family",
      location: "Donga-Mantung Division",
      story: "We are grateful for those who stood by us and helped save Bibi's life. You made empathy real. Without KELLENA's quick response and transportation support, we would have lost our daughter.",
      impact: "Life-saving medical care",
      image: "/src/assets/little-bibi-hero.jpg"
    },
    {
      name: "Community Elder",
      location: "Rural Village",
      story: "KELLENA has brought hope to our community. They don't just provide help when needed, but they also teach us how to help ourselves and each other.",
      impact: "Community empowerment",
      image: "/src/assets/little-bibi-hero.jpg"
    },
    {
      name: "Local Healthcare Worker",
      location: "Regional Clinic",
      story: "The partnership with KELLENA has improved our ability to reach patients in remote areas. Their transport coordination has saved countless lives.",
      impact: "Healthcare access",
      image: "/src/assets/little-bibi-hero.jpg"
    }
  ];

  const achievements = [
    {
      year: "2024",
      title: "Emergency Response Network Established",
      description: "Created a coordinated system for medical emergencies across rural communities",
      metrics: "15 emergency responses, 100% success rate"
    },
    {
      year: "2024",
      title: "Community Partnership Program",
      description: "Established partnerships with local healthcare providers and community leaders",
      metrics: "8 formal partnerships, 25 communities engaged"
    },
    {
      year: "2023",
      title: "Foundation and First Interventions",
      description: "KELLENA was established and began its first community support initiatives",
      metrics: "Initial 500 community members reached"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[300px] bg-[url(/src/assets/images/k-logo-2.jpg)]  bg-cover repeat-non">
        <div className=" px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground w-full min-h-[300px] flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Measuring change, one life at a time
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              See how your support translates into real, measurable impact in the lives of vulnerable communities across Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Impact by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quantifiable results that demonstrate the power of empathy in action
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    <AnimatedNumber value={stat.number}/>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {stat.description}
                  </p>
                  <div className="w-full">
                    <Progress value={stat.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-2">
                      {stat.progress}% of annual goal
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stories from the Field
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear directly from those whose lives have been touched by KELLENA's work
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <blockquote className="text-muted-foreground italic mb-4 leading-relaxed">
                    "{testimonial.story}"
                  </blockquote>
                  
                  <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm font-medium text-accent">
                      Impact: {testimonial.impact}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Milestones & Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key moments in our journey to empower communities
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-24 text-center">
                        <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold">
                          {achievement.year}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-3">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {achievement.description}
                        </p>
                        <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
                          <p className="text-sm font-medium text-accent">
                            {achievement.metrics}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Be Part of Our Growing Impact
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every contribution, no matter the size, creates ripples of positive change in our communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-warm text-accent-foreground hover:opacity-90">
                Support Our Mission
              </Button>
              <Button size="lg" variant="outline">
                Download Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;