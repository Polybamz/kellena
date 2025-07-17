import React from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MediaDisplay from "@/components/mediaDispalay";
const passedEvents = [
  {
    id: 1,
    title: "Training Workshop",
    describtion: 'The KELLEN Association recently organized a comprehensive workshop in Tabenken village, Donga Mantung Division of the North West Region of Cameroon. The purpose of this workshop was to educate and train Community Health Volunteer Workers on the Integrated Approach in identifying Musculoskeletal Deformities in children within their community. These cases would then be referred to the Jang Health Center for proper need assessment and follow-up for posible treatment and or rehabilitation. It is important to note that the wish for KELLEN Association is to conduct this training on identification and support initiative in all the subdivisions of the Donga Mantung Division, underscoring its commitment to reaching and assisting as many children as possible.',
    images: [
      '/src/assets/images/worshop-images1/IMG-20250707-WA0149.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0150.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0151.jpg',
      '/src/assets/images/worshop-images1/IMG-20250707-WA0152.jpg',     
    ]
  },
  {
    id:2,
    title: "Community Workshop",
    describtion: 'In a collaborative effort, KELLEN Association, with support from Tabenken Cultural and Development Association (TACUDA) and some stakeholders, organized a transformative workshop in Tabenken village, Donga Mantung Division of the North West Region of Cameroon.Theme: "Building Safe and Inclusive Community: Empowering Youth against Gender-based Violence and Fostering Mental Health Well-being," reflected the urgent need to address pressing issues affecting the community\'s youth such as teenage pregnancy and school dropouts.The crucial topics discussed during the workshop were:',
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
    id:3,
    title: "Community Health Workshop",
    describtion: 'Yesterday December 22, 2023, KELLENA, in collaboration with the Jang Health Center in Tabenken village, Donga Mantung Division of Nkambe Central, organized a health talk aimed at raising awareness on child protection and addressing gender-based violence (GBV). The initiative targeted over 100 nursing mothers during their pre and postnatal visits at the clinic, as well as community members through sensitization efforts in all six quarters of Tabenken.Child Protection Awareness:The health talk emphasized the universal rights of children, including the right to a name, good health, education, and a birth certificate. Parents were reminded that failing to respect these rights constitutes an abuse of children\'s rights. The session aimed to empower parents with the knowledge and understanding of their responsibilities in ensuring the well-being of their children.Gender-Based Violence (GBV) Awareness:Participants were enlightened about the prevalence of GBV, emphasizing that it is not exclusive to one gender. Both women and men were acknowledged as potential victims or perpetrators of GBV, encompassing emotional and psychological abuse. Attendees were encouraged to report cases of GBV and seek protection from KELLENA\'s focal point in Tabenken for appropriate intervention.Acknowledgments:Much appreciation was expressed to the Jang Health Center manager and her team for their outstanding efforts in facilitating a successful end-of-year health talk with KELLENA Association in Tabenken village. The collaborative endeavor contributed significantly to the overall well-being of the community members.',
    images: [
      '/src/assets/images/wh3/IMG-20250707-WA0163.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0164.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0165.jpg',
      '/src/assets/images/wh3/IMG-20250707-WA0138.jpg',
   
   ]
  }
]

const Programs = () => {
  const newEvent = JSON.parse(localStorage.getItem('events'))
   const [events, setEvents] = React.useState('passed');
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

  console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',newEvent)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-[300px] bg-[url(/src/assets/images/k-logo-2.jpg)]  bg-cover repeat-non">
        <div className=" px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground w-full min-h-[300px] flex flex-col justify-center items-center">
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
      {/* Events Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {events === 'passed' ? 'Past Events' : 'Upcoming Events'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our impactful workshops and community engagements
            </p>
            
            {/* Toggle Buttons */}
            <div className="inline-flex rounded-lg bg-muted p-1 mb-8">
              <button
                onClick={() => setEvents('passed')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  events === 'passed'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Past Events
              </button>
              <button
                onClick={() => setEvents('upcoming')}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  events === 'upcoming'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events
              </button>
            </div>
          </div>

          {/* Events Grid */}
          {events === 'passed' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {passedEvents.map((event) => (
                <Card key={event.id} className="group bg-card border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Event Header */}
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>

                  {/* Event Media */}
                  <div className="px-6 mb-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <MediaDisplay mediaUrls={event.images} />
                    </div>
                  </div>

                  {/* Event Content */}
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-6">
                      {event.describtion}
                    </p>
                    
                    {/* Event Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <img 
                          src={event.images[0]} 
                          alt="event thumbnail" 
                          className="w-8 h-8 rounded-full object-cover border-2 border-border" 
                        />
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{event.images.length} Photos</p>
                          <p className="text-muted-foreground">by KELLENA Admin</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                        <Link to={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Upcoming Events Empty State
            <>
              {newEvent && newEvent.length === 0 && (
                <div className="max-w-md mx-auto text-center">
                  <div className="bg-card border-2 border-dashed border-border/50 rounded-lg p-12 hover:border-primary/30 transition-colors">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📅</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      No Upcoming Events
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Stay tuned for exciting workshops and community programs coming soon!
                    </p>
                    <Button variant="outline" size="sm">
                      Get Notified
                    </Button>
                  </div>
                </div>
              )}
              {newEvent && newEvent.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {/* Render upcoming events here */}
                  {/* Example: */}
                  {newEvent.map((event: any, idx: number) => (
                    <Card key={event.id || idx} className="group bg-card border-border/50 hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between">
                         
                          <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {event.name}
                          </CardTitle>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {event.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {/* Event Media */}
                  <div className="px-6 mb-4">
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <MediaDisplay mediaUrls={event.gallery} />
                    </div>
                  </div>
                         <p className="text-muted-foreground leading-relaxed line-clamp-4 mb-6">
                      {event.description}
                        </p>
                         {/* Event Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <img 
                          src={event.gallery[0]} 
                          alt="event thumbnail" 
                          className="w-8 h-8 rounded-full object-cover border-2 border-border" 
                        />
                        <div className="text-sm">
                          <p className="font-medium text-foreground">{event.gallery.length} Photos</p>
                          <p className="text-muted-foreground">by KELLENA Admin</p>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10" asChild>
                        <Link to={`/events/${event.id}`}>View Details</Link>
                      </Button>
                    </div>
                      </CardContent>
                      {/* Add more event details as needed */}
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
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
              
                <Link to="/donate" className="bg-gradient-warm text-accent-foreground flex items-center justify-center px-8 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90">
              Donate to Programs
            </Link>
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