import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StoriesOfChange = () => {
    const story = JSON.parse(localStorage.getItem('impactStories'))

  const stories = [
    {
      id: 1,
      name: "Little Bibi",
      age: "3 years old",
      story: "Bibi was brought to us in critical condition, malnourished and in need of immediate medical care. Through our emergency response program and the generosity of donors, Bibi received life-saving treatment and is now thriving.",
      impact: "Medical Care & Nutrition",
      image: "/src/assets/little-bibi-hero.jpg",
      status: "Recovering"
    },
    {
      id: 2,
      name: "Marie's Family",
      age: "Family of 6",
      story: "After losing their livelihood due to economic hardship, Marie's family joined our empowerment program. They received skills training and micro-loans to start a small business.",
      impact: "Livelihood Empowerment",
      image: "/src/assets/little-bibi-hero.jpg", // Placeholder - would need different image
      status: "Self-Sufficient"
    },
    {
      id: 3,
      name: "Youth Circle",
      age: "15-25 years",
      story: "20 young people from rural communities participated in our empathy circles and leadership training. They're now community advocates and change-makers.",
      impact: "Youth Empowerment",
      image: "/src/assets/little-bibi-hero.jpg", // Placeholder - would need different image
      status: "Leading Change"
    }
  ];

  console.log('storiessssssssssssssssssssssssssssssssssssssssssssss',story)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stories of Change
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every person we help has a unique story. Here are just a few lives that have been transformed through your support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="bg-gradient-card border-border/50 overflow-hidden hover:shadow-soft transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{story.name}</h3>
                    <p className="text-muted-foreground text-sm">{story.age}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    {story.status}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {story.story}
                </p>
                
                <div className="mb-4">
                  <span className="text-sm font-medium text-accent">
                    Impact: {story.impact}
                  </span>
                </div>

                {story.name === "Little Bibi" && (
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
                    <p className="text-sm text-foreground font-medium mb-2">
                      You can help the next child like Bibi. Every donation matters.
                    </p>
                    <Button size="sm" className="bg-gradient-warm text-accent-foreground hover:opacity-90">
                      Donate Now
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
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesOfChange;