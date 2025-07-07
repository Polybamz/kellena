import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const coreValues = [
    {
      title: "Mental Health Support",
      description: "We enhance mental health and provide psychosocial support to individuals in need, helping them cope with challenges and improve their overall well-being.",
      icon: "🧠"
    },
    {
      title: "Child Protection",
      description: "We are committed to safeguarding children from violence, particularly gender-based violence, and ensuring their rights are protected.",
      icon: "🛡️"
    },
    {
      title: "Disability Inclusion",
      description: "We promote the inclusion of children with disabilities in community activities and education, advocating for their rights and capabilities.",
      icon: "♿"
    },
    {
      title: "Community Empowerment",
      description: "We work to ensure that vulnerable individuals have access to clean water, sanitation, and essential resources for overall health and well-being.",
      icon: "🌊"
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
              About KELLENA
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Keeping Empathy and Livelihood Empowerment Network Association
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              A Community Based Organization dedicated to promoting mental health and psychosocial well-being, particularly for vulnerable individuals, including children with disabilities and those affected by various forms of violence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To enhance mental health and provide psychosocial support to individuals in need, while safeguarding children from violence and promoting inclusion of individuals with disabilities in community activities and education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-center">
                  An inclusive and empowered society where all individuals, regardless of their background or abilities, have equal opportunities and support in safe, equal, and sustainable communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at KELLENA
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-card border-border/50 text-center hover:shadow-soft transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Approach
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Region of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Primarily focused in <strong>Donga-Mantung Division</strong>, Cameroon, where we work directly with rural communities to identify and address their most pressing needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">🌍</span>
                    Community Partnership
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    KELLENA mobilizes community support and partnerships to respond to critical needs—from healthcare access to child welfare—ensuring sustainable, locally-driven solutions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="bg-card p-8 rounded-2xl border border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                KELLENA was founded on the belief that empathy must be paired with action to create real change. Born from witnessing the gaps in healthcare and support systems in rural Cameroon, our organization began as a grassroots movement to bridge these critical needs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as individual acts of kindness has grown into a structured network of care, connecting vulnerable individuals with life-saving resources and empowering communities to build sustainable futures.
              </p>
              <p className="text-accent font-medium">
                "We are grateful for those who stood by us and helped save lives like Little Bibi's. You made empathy real."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;