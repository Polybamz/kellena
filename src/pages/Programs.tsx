import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Emergency Medical Assistance",
      description: "Identifying and supporting vulnerable individuals in medical distress, providing critical transportation and care coordination.",
      icon: "🚑",
      details: [
        "Emergency medical transportation to regional hospitals",
        "Critical care coordination for urgent cases",
        "Support for families during medical emergencies",
        "Referral network with healthcare institutions"
      ],
      impact: "Lives Saved",
      example: "Transporting Little Bibi to Mbingo Baptist Hospital for urgent care",
      status: "Active"
    },
    {
      id: 2,
      title: "Child Welfare & Protection",
      description: "Focused programs for malnourished, abandoned, or at-risk children in collaboration with health institutions.",
      icon: "👶",
      details: [
        "Nutritional support for malnourished children",
        "Healthcare access for vulnerable children",
        "Protection services for at-risk minors",
        "Collaboration with pediatric care facilities"
      ],
      impact: "Children Protected",
      example: "Comprehensive care programs ensuring child safety and health",
      status: "Active"
    },
    {
      id: 3,
      title: "Community Livelihood Support",
      description: "Economic empowerment for families, including women-led households, with focus on basic needs and vocational support.",
      icon: "💼",
      details: [
        "Vocational training programs",
        "Micro-enterprise development",
        "Basic needs provision for families",
        "Women's economic empowerment initiatives"
      ],
      impact: "Families Empowered",
      example: "Supporting women-led households with income-generating activities",
      status: "Active"
    },
    {
      id: 4,
      title: "Health Access Facilitation",
      description: "Referral and transport logistics to regional hospitals, advocating for better rural healthcare coverage.",
      icon: "🏥",
      details: [
        "Healthcare referral systems",
        "Medical transport coordination",
        "Rural healthcare advocacy",
        "Health education programs"
      ],
      impact: "Healthcare Access",
      example: "Connecting rural patients with urban medical facilities",
      status: "Active"
    },
    {
      id: 5,
      title: "Empathy & Awareness Campaigns",
      description: "Social media and offline campaigns to promote empathy and civic engagement, educating about rural conditions.",
      icon: "📢",
      details: [
        "Community awareness campaigns",
        "Social media engagement",
        "Educational outreach programs",
        "Civic engagement initiatives"
      ],
      impact: "Community Awareness",
      example: "Educating the public about conditions in rural Cameroon",
      status: "Ongoing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Comprehensive support for vulnerable communities
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From emergency medical assistance to livelihood empowerment, our programs address the most critical needs in rural Cameroon.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="bg-gradient-card border-border/50 hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{program.icon}</div>
                      <div>
                        <CardTitle className="text-xl mb-2">{program.title}</CardTitle>
                        <Badge variant={program.status === 'Active' ? 'default' : 'secondary'}>
                          {program.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Program Details:</h4>
                    <ul className="space-y-2">
                      {program.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h5 className="font-medium text-foreground mb-2">Example Impact:</h5>
                    <p className="text-sm text-muted-foreground italic">
                      {program.example}
                    </p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-accent">
                      Focus: {program.impact}
                    </span>
                    <Button size="sm" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Support Our Programs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Every program depends on the generous support of people like you. Your contribution directly impacts lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-warm text-accent-foreground hover:opacity-90">
                Donate to Programs
              </Button>
              <Button size="lg" variant="outline">
                Become a Volunteer
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;