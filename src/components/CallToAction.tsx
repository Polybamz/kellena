import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useNewsLetterRegistration from "@/hooks/use-news-letter-registration";
import { Link } from "react-router-dom";
import AddVolunteerModal from "./ui/addVolunteerModal";
// import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {

  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState<boolean>()
  const [modalTitle, setModalTitle] = useState('')
  const { isRegistered, error, loading, register } = useNewsLetterRegistration();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email) {
      console.log('email is empty')
    } else {
      await register(email);
    }
  };
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
                {card.action == 'Donate Now' ? <Link to="/donate"><Button
                  variant="secondary"
                  className="w-full bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur text-inherit"
                >
                  {card.action}
                </Button></Link> : <Button
                onClick={()=>{
                  setModalTitle(card.description)
                  setShowModal(true)
                }}
                  variant="secondary"
                  className="w-full bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur text-inherit"
                >
                  {card.action}
                </Button>}
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
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary-light px-8" disabled={loading || isRegistered}>
                  {loading ? 'Loading...' : isRegistered ? 'Subscribed' : 'Subscribe'}
                </Button>
              </form>
              {
                error && (
                  <div className="mt-4 p-4 text-center bg-red-200/50 border border-red-800 rounded-lg text-red-500">{error}</div>
                )
              }

            </CardContent>
          </Card>
        </div>
      </div>
      <AddVolunteerModal
          open={showModal}
          onClose={()=>setShowModal(false)}
          onVolunteerAdded={() => setShowModal(false)}
          title={modalTitle}

      />
    </section>
  );
};

export default CallToAction;