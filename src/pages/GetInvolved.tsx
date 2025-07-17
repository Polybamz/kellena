import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const GetInvolved = () => {
  const involvementOptions = [
    {
      id: 1,
      title: "Donate",
      description: "Support our mission through financial contributions via Mobile Money, bank transfers, or in-kind donations.",
      icon: "💝",
      options: [
        "One-time donations",
        "Monthly recurring support",
        "Emergency response fund",
        "Program-specific donations"
      ],
      paymentMethods: ["MTN Mobile Money", "Orange Money", "Bank Transfer", "In-kind Donations"],
      cta: "Start Donating",
      highlight: true
    },
    {
      id: 2,
      title: "Volunteer",
      description: "Join our network of local volunteers who assist with transportation, outreach, and program logistics.",
      icon: "🤝",
      options: [
        "Emergency response team",
        "Community outreach",
        "Transportation support",
        "Administrative assistance"
      ],
      requirements: ["Local presence in Cameroon", "Commitment to empathy", "Basic communication skills"],
      cta: "Apply to Volunteer",
      highlight: false
    },
    {
      id: 3,
      title: "Partner with Us",
      description: "KELLENA invites hospitals, civic groups, and businesses to collaborate on sustainable community solutions.",
      icon: "🤝",
      options: [
        "Healthcare partnerships",
        "Corporate sponsorships",
        "Resource sharing",
        "Joint program development"
      ],
      partners: ["Mbingo Baptist Hospital", "Local Civic Groups", "Community Leaders"],
      cta: "Explore Partnership",
      highlight: false
    },
    {
      id: 4,
      title: "Join the Conversation",
      description: "Engage with our active community through social media and our Facebook group for ongoing support and awareness.",
      icon: "💬",
      options: [
        "Facebook community group",
        "Social media advocacy",
        "Share our stories",
        "Raise awareness"
      ],
      platforms: ["Facebook", "Instagram", "WhatsApp", "Community Forums"],
      cta: "Join Community",
      highlight: false
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Health Outreach",
      date: "February 15, 2024",
      location: "Donga-Mantung Division",
      type: "Field Activity",
      spots: "15 volunteers needed"
    },
    {
      title: "Fundraising Gala",
      date: "March 2, 2024",
      location: "Yaoundé Community Center",
      type: "Fundraising",
      spots: "Open to all"
    },
    {
      title: "Volunteer Training Workshop",
      date: "February 28, 2024",
      location: "Online & Local Centers",
      type: "Training",
      spots: "20 spaces available"
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
              Get Involved
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Join our mission to create lasting change through empathy and action
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              "If you believe in empathy and action, join us to make a difference in the lives of many like Bibi."
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to contribute to our mission of empathy and empowerment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {involvementOptions.map((option) => (
              <Card key={option.id} className={`border-border/50 hover:shadow-soft transition-all duration-300 hover:scale-312 ${option.highlight ? 'bg-gradient-warm/5 border-accent/30' : 'bg-gradient-card'}`}>
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{option.icon}</div>
                    <div>
                      <CardTitle className="text-2xl">{option.title}</CardTitle>
                      {option.highlight && (
                        <Badge className="mt-2 bg-accent text-accent-foreground">
                          Most Needed
                        </Badge>
                      )}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Options Available:</h4>
                    <ul className="space-y-2">
                      {option.options.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.paymentMethods && (
                    <div className="mb-6">
                      <h5 className="font-medium text-foreground mb-2">Payment Methods:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.paymentMethods.map((method, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.requirements && (
                    <div className="mb-6">
                      <h5 className="font-medium text-foreground mb-2">Requirements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.requirements.map((req, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {req}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.partners && (
                    <div className="mb-6">
                      <h5 className="font-medium text-foreground mb-2">Current Partners:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.partners.map((partner, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {option.platforms && (
                    <div className="mb-6">
                      <h5 className="font-medium text-foreground mb-2">Platforms:</h5>
                      <div className="flex flex-wrap gap-2">
                        {option.platforms.map((platform, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Button
                    className={option.highlight ? "bg-gradient-warm text-accent-foreground hover:opacity-90 w-full" : "w-full"}
                    variant={option.highlight ? "default" : "outline"}
                  >
                    {option.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join us at these upcoming events and activities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-card border-border/50 hover:shadow-soft transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong>Date:</strong> {event.date}</p>
                    <p><strong>Location:</strong> {event.location}</p>
                    <p><strong>Availability:</strong> {event.spots}</p>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button size="sm" variant="outline" className="w-full">
                    Register Interest
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background" >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions or want to discuss how you can contribute? We'd love to hear from you.
              </p>
            </div>

            <Card className="bg-gradient-card border-border/50" id="contact">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input type="email" placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input placeholder="+237 XXX XXX XXX" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How would you like to get involved?
                    </label>
                    <select className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground">
                      <option>Select an option</option>
                      <option>Donate</option>
                      <option>Volunteer</option>
                      <option>Partner with us</option>
                      <option>Join the conversation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us more about how you'd like to contribute or any questions you have..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-gradient-warm text-accent-foreground hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;