import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Mental Health & Psychosocial Support",
      description: "Enhancing mental health and providing psychosocial support to individuals in need, helping them cope with challenges and improve overall well-being.",
      icon: "🧠",
      details: [
        "Individual and group counseling services",
        "Mental health awareness programs",
        "Trauma-informed care approaches",
        "Psychosocial support for vulnerable populations"
      ],
      impact: "Mental Health Improved",
      example: "Providing psychosocial support to children affected by violence",
      status: "Active"
    },
    {
      id: 2,
      title: "Child Protection & Safeguarding",
      description: "Implementing comprehensive measures to protect children from harm and ensuring their safety, particularly from gender-based violence.",
      icon: "🛡️",
      details: [
        "Child protection services and advocacy",
        "Gender-based violence prevention programs",
        "Safe spaces for vulnerable children",
        "Rights protection and legal support"
      ],
      impact: "Children Safeguarded",
      example: "Creating safe environments where children can thrive without fear",
      status: "Active"
    },
    {
      id: 3,
      title: "Disability Inclusion",
      description: "Actively promoting the inclusion of individuals with disabilities in educational and community settings, advocating for their rights and capabilities.",
      icon: "♿",
      details: [
        "Inclusive education programs",
        "Disability rights advocacy",
        "Community sensitization on disability",
        "Accessibility improvements in communities"
      ],
      impact: "Inclusion Achieved",
      example: "Including children with disabilities in mainstream education and community activities",
      status: "Active"
    },
    {
      id: 4,
      title: "Water, Sanitation & Hygiene (WASH)",
      description: "Ensuring access to clean water and proper sanitation facilities, recognizing their importance for overall health and well-being.",
      icon: "🌊",
      details: [
        "Clean water access initiatives",
        "Sanitation facility development",
        "Hygiene education programs",
        "Community health promotion"
      ],
      impact: "Health Improved",
      example: "Providing clean water and sanitation facilities to underserved communities",
      status: "Active"
    },
    {
      id: 5,
      title: "Community Engagement & Education",
      description: "Raising awareness about mental health, child protection, and disability inclusion through community education and engagement programs.",
      icon: "📢",
      details: [
        "Community awareness campaigns",
        "Educational workshops and seminars",
        "Advocacy and policy engagement",
        "Stakeholder mobilization"
      ],
      impact: "Community Awareness",
      example: "Educating communities about mental health and child protection",
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