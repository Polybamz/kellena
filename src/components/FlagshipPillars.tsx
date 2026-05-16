import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    icon: "♿",
    title: "Disability-Inclusive Child Protection",
    problem: "Children with disabilities face up to four times higher risk of violence, neglect, and exclusion in underserved communities.",
    description:
      "We design protection services that intentionally reach, include, and respond to the needs of children with disabilities.",
    outcome: "Safer, more inclusive environments where every child is seen and protected.",
    metric: "5,000+ children & caregivers reached",
    accent: "from-primary/10 to-primary/5",
    border: "border-primary/30",
  },
  {
    icon: "🛡️",
    title: "Safeguarding Systems Strengthening",
    problem: "Local institutions often lack the policies, training, and referral pathways to prevent and respond to harm.",
    description:
      "We strengthen safeguarding standards across schools, health facilities, and community structures—training frontline actors and embedding policies that last.",
    outcome: "Institutions equipped to prevent harm and respond ethically.",
    metric: "200+ frontline actors trained",
    accent: "from-accent/10 to-accent/5",
    border: "border-accent/40",
  },
  {
    icon: "🤝",
    title: "Community Protection Mechanisms",
    problem: "In hard-to-reach areas, formal services are absent—communities are the first and last line of protection.",
    description:
      "We build community-led safeguarding committees, child-friendly spaces, and referral networks rooted in local trust.",
    outcome: "Locally owned protection systems that respond before harm escalates.",
    metric: "80+ communities engaged",
    accent: "from-secondary/20 to-secondary/5",
    border: "border-secondary",
  },
  {
    icon: "🧠",
    title: "Psychosocial Support",
    problem: "Survivors of violence, displacement, and chronic adversity rarely access mental health and recovery support.",
    description:
      "We deliver trauma-informed counseling, group healing, and caregiver support tailored to children, women, and people with disabilities.",
    outcome: "Restored well-being, resilience, and dignity for survivors.",
    metric: "Trauma-informed care across 4 regions",
    accent: "from-red-100 to-red-50",
    border: "border-red-300",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FlagshipPillars = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3">Our Flagship Focus</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Specialized Niche in Child Protection & Disability Inclusion
          </h2>
          <p className="text-lg text-muted-foreground">
            Four interconnected pillars define KELLENA's institutional expertise—rooted in grassroots trust,
            built for scalable impact in hard-to-reach communities.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {pillars.map((p, i) => (
            <motion.div key={i} variants={cardVariants}>
              <Card className={`h-full border-2 ${p.border} bg-gradient-to-br ${p.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                <CardContent className="p-7">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl shrink-0 h-14 w-14 rounded-xl bg-background flex items-center justify-center shadow-sm">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground leading-tight">{p.title}</h3>
                      <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                        Flagship Pillar
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-foreground mb-1">The Problem</p>
                      <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Our Approach</p>
                      <p className="text-muted-foreground leading-relaxed">{p.description}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Community Outcome</p>
                      <p className="text-muted-foreground leading-relaxed">{p.outcome}</p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary">{p.metric}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/programs">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FlagshipPillars;
