import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageGallery } from "@/components/imageGallery";
import m1 from "../assets/images/gallery/m1.jpg";
import m2 from "../assets/images/gallery/m2.jpg";
import m3 from "../assets/images/gallery/m3.jpg";
import m4 from "../assets/images/gallery/m4.jpg";

const imagesList: Array<string> = [m1, m2, m3, m4, m4]
const About = () => {
  const activities = [
    {
      title: "📃We Ltsten Before We Act",
      text: "Every project beging with listerning. We sit on porches, in classrooms, Under tqrpaulins whether stories unfold. Solutions come not from outside experts, but from the wisdom already living in the community",
      url: m1
    },
    {
      title: "🎨Dignity is Our Design Principle",
      text: "We design everything with human dignity in mind. That means beauty,respect,accessibility and inclussion. Because people don't just need services, they deserve to feel seen,valued and proud",
      url: m4
    },
    {
      title: "Change can be Messy, But it's Worth It",
      text: "We don't promise quick fixes. We walk alongside messy, complecated realities because we believe in transformation that lasts. Sometimes it's it's slow. Sometimes it hurts. But it's always worth it",
      url: m3
    }
    ,
    {
      title: "✊🏾We Work With, Not For",
      text: "Our role is to serve or fix, It's to equip,uplift and walk in solidarity. We collaborate with local leaders, youth, and elders to ensure the work is owned and sustained  by those it serves",
      url: m4
    },
  ]
  const coreValues = [
    {
      title: "Mental Health Support",
      description: "We enhance mental health and provide psychosocial support to individuals in need, helping them cope with challenges and improve their overall well-being.",
      icon: "🧠"
    },
    {
      title: "Child Protection/Safeguarding",
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

  const teamMembers = [
    {
      name: "Dr. Sarah Mbah",
      role: "Executive Director/CEO",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emmanuel Ndeh",
      role: "Program Manager",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Grace Fontem",
      role: "Project Coordinator",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Peter Tabi",
      role: "Finance Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mary Njoya",
      role: "Communications Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b932?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Ngong",
      role: "Human Resources Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Ruth Awa",
      role: "Monitoring and Evaluation Specialist",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "John Kum",
      role: "Administrative Assistant",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className=" min-h-[300px] bg-[url(/src/assets/images/k-logo-2.jpg)]  bg-cover repeat-non ">
        <div className="  px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground w-full min-h-[300px] flex flex-col justify-center items-center">
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
            <Card className="bg-blue-900 text-white relative  border-border/50  hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-[180px]  h-[60px] rotate-45 absolute top-1 p-2 right-[-40px] bg-white">
                <div className="w-full h-full border-2 border-dashed">
                  <CardTitle className="text-2xl text-center text-blue-900">Our Mission</CardTitle>

                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Our Mission</CardTitle>

              </CardHeader>
              <CardContent>
                <p className="text-white leading-relaxed text-center">
                  To enhance mental health and provide psychosocial support to individuals in need, while safeguarding children from violence and promoting inclusion of individuals with disabilities in community activities and education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card relative  border-border/50 hover:scale-110 hover:-translate-y-2 transition-all duration-300">
              <div className="w-[180px] h-[60px] rotate-45 bg-blue-900  absolute top-1 p-2 right-[-40px] bg-white">
                <div className="w-full h-full border-2 border-dashed">
                  <CardTitle className="text-2xl text-center text-blue-900 ">Our Vision</CardTitle>

                </div>
              </div>
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

      {/* Core Values & Team */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 ">
              Our Organization
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
              The principles that guide us and the team that drives our mission
            </p>
          </div>

          <Tabs defaultValue="values" className="w-full">
            <TabsList className="grid w-[200px] grid-cols-2">
              <TabsTrigger value="values">Core Values</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>

            <TabsContent value="values" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <Card key={index} className="bg-card hover:scale-110 hover:-translate-y-2 transition-all duration-300 border-border/50 text-center hover:shadow-soft transition-all duration-300">
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
            </TabsContent>

            <TabsContent value="team" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {teamMembers.map((member, index) => (
                  <Card key={index} className="bg-card border-border/50 hover:shadow-soft transition-all duration-300 text-center">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-primary/20"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary font-medium">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="w-full flex flex-col p-6">
          {activities.map((activity, index) => (
            <div className={`w-full flex justify-center items-center bg-transpqrent border-0 shadow-0`}>
              <CardContent className={`w-[95%] lg:h-[400px] flex ${index % 2 == 0 ? 'flex-row max-lg:flex-col' : 'flex-row-reverse max-lg:flex-col'} justify-center items-center`}>

                <div className="w-1/2 p-4 max-lg:w-full">
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <p>
                    {activity.text}
                  </p>
                </div>
                <div className="w-1/2 h-full p-4 max-lg:w-full flex justify-center items-center">
                  <img src={activity.url} alt="" className="  max-h-[400px] h-auto mx-auto object-cover border-2 border-primary/20 rounded-[4px]"
                  />
                </div>
              </CardContent>


            </div>
          ))}
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
              <Card className="bg-gradient-card border-border/50 hover:-translate-y-2 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    Region of Operation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Primarily focused in <strong>Northwest, Southwest, West and Litoral Region</strong> of Cameroon, where we work directly with rural communities to identify and address their most pressing needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50 hover:-translate-y-2 transition-all duration-300">
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
      <ImageGallery images={imagesList} />

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