import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import MediaDisplay from "@/components/mediaDispalay";

const passedEvents = [
  // here we go
  {
    id: 1,
    title: "Training Workshop",
    describtion: 'The KELLEN Association recently organized a comprehensive workshop in Tabenken village, Donga Mantung Division of the North West Region of Cameroon. The purpose of this workshop was to educate and train Community Health Volunteer Workers on the Integrated Approach in identifying Musculoskeletal Deformities in children within their community. These cases would then be referred to the Jang Health Center for proper need assessment and follow-up for posible treatment and or rehabilitation. It is important to note that the wish for KELLEN Association is to conduct this training on identification and support initiative in all the subdivisions of the Donga Mantung Division, underscoring its commitment to reaching and assisting as many children as possible.',
    date: "March 15, 2024",
    location: "Tabenken village, Donga Mantung Division",
    participants: "25+ Community Health Workers",
    impact: "Enhanced identification skills for musculoskeletal deformities",
    images: [
      '/src/assets/images/worshop-images1/IMG-20250707-WA0149.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0150.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0151.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0152.jpg',     
    ]
  },
  {
    id: 2,
    title: "Community Workshop",
    describtion: 'In a collaborative effort, KELLEN Association, with support from Tabenken Cultural and Development Association (TACUDA) and some stakeholders, organized a transformative workshop in Tabenken village, Donga Mantung Division of the North West Region of Cameroon.Theme: "Building Safe and Inclusive Community: Empowering Youth against Gender-based Violence and Fostering Mental Health Well-being," reflected the urgent need to address pressing issues affecting the community\'s youth such as teenage pregnancy and school dropouts.The crucial topics discussed during the workshop were:',
    date: "February 20, 2024",
    location: "Tabenken village, Donga Mantung Division",
    participants: "100+ Youth and Community Members",
    impact: "Reduced teenage pregnancy and increased awareness on GBV",
    images: [
      '/src/assets/images/wh2/IMG-20250707-WA0151.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0153.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0154.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0155.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0156.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0157.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0158.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0159.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0160.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0161.jpg',
      '/src/assets/images/wh2/IMG-20250707-WA0162.jpg',
   ]
  }, 
  {
    id: 3,
    title: "Community Health Workshop",
    describtion: 'Yesterday December 22, 2023, KELLENA, in collaboration with the Jang Health Center in Tabenken village, Donga Mantung Division of Nkambe Central, organized a health talk aimed at raising awareness on child protection and addressing gender-based violence (GBV). The initiative targeted over 100 nursing mothers during their pre and postnatal visits at the clinic, as well as community members through sensitization efforts in all six quarters of Tabenken.Child Protection Awareness:The health talk emphasized the universal rights of children, including the right to a name, good health, education, and a birth certificate. Parents were reminded that failing to respect these rights constitutes an abuse of children\'s rights. The session aimed to empower parents with the knowledge and understanding of their responsibilities in ensuring the well-being of their children.Gender-Based Violence (GBV) Awareness:Participants were enlightened about the prevalence of GBV, emphasizing that it is not exclusive to one gender. Both women and men were acknowledged as potential victims or perpetrators of GBV, encompassing emotional and psychological abuse. Attendees were encouraged to report cases of GBV and seek protection from KELLENA\'s focal point in Tabenken for appropriate intervention.Acknowledgments:Much appreciation was expressed to the Jang Health Center manager and her team for their outstanding efforts in facilitating a successful end-of-year health talk with KELLENA Association in Tabenken village. The collaborative endeavor contributed significantly to the overall well-being of the community members.',
    date: "December 22, 2023",
    location: "Jang Health Center, Tabenken village",
    participants: "100+ Nursing Mothers and Community Members",
    impact: "Increased awareness on child protection and GBV prevention",
    images: [
      '/src/assets/images/wh3/IMG-20250707-WA0163.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0164.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0165.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0138.jpg',
   ]
  }
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const event = passedEvents.find(e => e.id === parseInt(id || '0'));

  if (!event) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Event Not Found</h1>
          <Button onClick={() => navigate('/programs')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/programs')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Programs
          </Button>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-accent/10 text-accent mb-4">
              Completed Event
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {event.title}
            </h1>
            
            {/* Event Meta */}
            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{event.participants}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">Event Gallery</h2>
            <div className="bg-card rounded-lg border border-border/50 overflow-hidden">
              <MediaDisplay mediaUrls={event.images} />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">About This Event</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {event.describtion}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Event Impact */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Event Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {event.impact}
                  </p>
                </CardContent>
              </Card>

              {/* Event Stats */}
              <Card className="bg-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Event Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Photos Captured:</span>
                    <span className="font-medium">{event.images.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants:</span>
                    <span className="font-medium">{event.participants}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Organizer:</span>
                    <span className="font-medium">KELLENA</span>
                  </div>
                </CardContent>
              </Card>

              {/* Call to Action */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Want to Get Involved?
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join us in making a difference in the community through our programs and workshops.
                  </p>
                  <Link to = '/get-involved'>
                     <Button className="w-full bg-gradient-warm text-accent-foreground hover:opacity-90">
                    Get Involved
                  </Button>
                  </Link>
                  
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;