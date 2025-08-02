import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import useNewsLetterRegistration from "@/hooks/use-news-letter-registration";

const News = () => {

  
    const [email, setEmail] = useState("");
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
  const featuredPost = {
    id: 1,
    title: "Little Bibi's Journey – From Crisis to Hope",
    excerpt: "Follow the inspiring story of Little Bibi, a 3-year-old who overcame malnutrition and health challenges with the help of KELLENA's emergency response program. This story represents the heart of what we do – turning despair into hope through community action.",
    category: "Medical Aid",
    tags: ["Children", "Success Stories", "Medical Aid", "Emergency Response"],
    date: "January 15, 2024",
    author: "KELLENA Team",
    image: "/src/assets/little-bibi-hero.jpg",
    readTime: "8 min read",
    featured: true
  };

  const newsPosts = [
  //   {
  //     id: 2,
  //     title: "Building Empathy Circles in Rural Communities",
  //     excerpt: "How our empathy circles are creating safe spaces for healing and connection across Cameroon's rural areas, fostering community resilience and mutual support.",
  //     category: "Community Programs",
  //     tags: ["Empathy", "Community", "Healing"],
  //     date: "January 10, 2024",
  //     author: "Dr. Sarah Ngoma",
  //     image: "/src/assets/little-bibi-hero.jpg",
  //     readTime: "7 min read"
  //   },
  //   {
  //     id: 3,
  //     title: "Emergency Response Network Saves Lives",
  //     excerpt: "Our newly established emergency response network has successfully coordinated 15 medical emergencies, achieving a 100% success rate in critical interventions.",
  //     category: "Emergency Response",
  //     tags: ["Emergency", "Healthcare", "Network"],
  //     date: "January 8, 2024",
  //     author: "Michael Tanga",
  //     image: "/src/assets/little-bibi-hero.jpg",
  //     readTime: "5 min read"
  //   },
  //   {
  //     id: 4,
  //     title: "Community Mobilization in Donga-Mantung",
  //     excerpt: "Regular engagement from local donors and volunteers continues to grow, with over 2,000 active community members now supporting our mission.",
  //     category: "Community",
  //     tags: ["Volunteers", "Community", "Growth"],
  //     date: "January 5, 2024",
  //     author: "Grace Fon",
  //     image: "/src/assets/little-bibi-hero.jpg",
  //     readTime: "6 min read"
  //   },
  //   {
  //     id: 5,
  //     title: "Healthcare Partnerships Expand Access",
  //     excerpt: "New collaborations with regional hospitals and clinics are improving healthcare access for vulnerable populations across rural Cameroon.",
  //     category: "Healthcare",
  //     tags: ["Healthcare", "Partnerships", "Access"],
  //     date: "December 28, 2023",
  //     author: "Dr. Paul Mboh",
  //     image: "/src/assets/little-bibi-hero.jpg",
  //     readTime: "4 min read"
  //   },
  //   {
  //     id: 6,
  //     title: "Livelihood Programs Show Promising Results",
  //     excerpt: "Our economic empowerment initiatives for women-led households are showing significant impact, with families achieving greater self-sufficiency.",
  //     category: "Livelihood",
  //     tags: ["Women", "Empowerment", "Economics"],
  //     date: "December 20, 2023",
  //     author: "Elizabeth Nji",
  //     image: "/src/assets/little-bibi-hero.jpg",
  //     readTime: "6 min read"
  //   }
  ];

  const categories = [
    { name: "All", count: 25 },
    { name: "Medical Aid", count: 8 },
    { name: "Community Programs", count: 6 },
    { name: "Emergency Response", count: 5 },
    { name: "Success Stories", count: 4 },
    { name: "Healthcare", count: 2 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
        <section className="min-h-[300px] bg-[url(/src/assets/images/k-logo-2.jpg)]  bg-cover repeat-non">
        <div className=" px-4 sm:px-6 lg:px-8 bg-gradient-hero text-primary-foreground w-full min-h-[300px] flex flex-col justify-center items-center">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Stay connected with our latest field stories and community impact
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From emergency responses to community milestones, follow our journey as we work together to create positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category.name} 
                variant={category.name === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {/* <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Featured Story</h2>
          </div>
          
          <Card className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-soft transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              
              <div className="md:w-1/2 p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-primary text-primary-foreground">
                    {featuredPost.category}
                  </Badge>
                  <Badge variant="outline">Featured</Badge>
                  {featuredPost.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-6">
                  <span>By {featuredPost.author}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                  <Button>
                    Read Full Story
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      {/* News Grid */}
      {/* <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Latest Updates</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsPosts.map((post) => (
              <Card key={post.id} className="bg-card border-border/50 overflow-hidden hover:shadow-soft transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                    <span>By {post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <Button size="sm" variant="outline">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter Signup */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest stories, updates, and ways to get involved with KELLENA's mission.
            </p>
            
            <Card className="p-6 bg-gradient-card border-border/50">
              <form className="flex flex-col sm:flex-row gap-4" onSubmit={handleSubmit}>
                <input 
                  type="mail" 
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
                <Button type="submit" disabled={loading || isRegistered} className="bg-gradient-warm text-accent-foreground hover:opacity-90">
                  {loading ? 'Subscribing' : isRegistered ? 'Subscribed': 'Subscribe'}
                </Button>
              </form>
               {
                error && (
                        <div className="mt-4 p-4 text-center bg-red-200/50 border border-red-800 rounded-lg text-red-500">{error}</div>
                )
              }
              <p className="text-xs text-muted-foreground mt-4">
                We respect your privacy and will never share your email with third parties.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;