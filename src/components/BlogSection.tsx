import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Little Bibi's Journey – From Crisis to Hope",
      excerpt: "Follow the inspiring story of Little Bibi, a 3-year-old who overcame malnutrition and health challenges with the help of KELLENA's emergency response program.",
      category: "Medical Aid",
      tags: ["Children", "Success Stories", "Medical Aid"],
      date: "January 15, 2024",
      author: "KELLENA Team",
      image: "/src/assets/little-bibi-hero.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Empathy Circles in Rural Communities",
      excerpt: "How our empathy circles are creating safe spaces for healing and connection across Cameroon's rural areas.",
      category: "Community Programs",
      tags: ["Empathy", "Community", "Healing"],
      date: "January 10, 2024",
      author: "Dr. Sarah Ngoma",
      image: "/src/assets/little-bibi-hero.jpg", // Placeholder
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Youth Leadership Training Graduates 50 New Leaders",
      excerpt: "Celebrating our latest cohort of young leaders who are now driving change in their communities.",
      category: "Youth Empowerment",
      tags: ["Youth", "Leadership", "Training"],
      date: "January 5, 2024",
      author: "Michael Tanga",
      image: "/src/assets/little-bibi-hero.jpg", // Placeholder
      readTime: "4 min read"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest field stories, program updates, and community impact reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-card border-border/50 overflow-hidden hover:shadow-soft transition-all duration-300 animate-scale-in">
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

                {post.id === 1 && (
                  <div className="mt-4 p-3 bg-gradient-warm/10 rounded-lg border border-accent/20">
                    <p className="text-xs text-foreground font-medium mb-2">
                      Inspired by Bibi's story? Help us reach more children in need.
                    </p>
                    <Button size="sm" className="bg-gradient-warm text-accent-foreground hover:opacity-90 w-full">
                      Donate for Medical Aid
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;