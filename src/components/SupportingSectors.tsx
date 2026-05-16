import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const sectors = [
  { icon: "💧", title: "WASH", desc: "Clean water, sanitation, and hygiene to safeguard child health." },
  { icon: "🚺", title: "GBV Prevention & Response", desc: "Survivor-centered prevention, response, and referral pathways." },
  { icon: "⛑️", title: "Humanitarian Response", desc: "Protection-led response in crisis-affected and displaced communities." },
  { icon: "📚", title: "Inclusive Education", desc: "Learning environments that include children with disabilities." },
  { icon: "🌱", title: "Livelihood Support", desc: "Economic resilience for caregivers of vulnerable children." },
  { icon: "🌍", title: "Environmental Resilience", desc: "Climate-adaptive practices that protect community well-being." },
];

const SupportingSectors = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-semibold uppercase tracking-wider mb-3">Supporting Sectors</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Strengthening the Environments Where Children Live, Learn & Thrive
          </h2>
          <p className="text-lg text-muted-foreground">
            Our supporting sectors are complementary interventions that reinforce child protection
            outcomes—not standalone programs.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {sectors.map((s, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
            >
              <Card className="h-full border-border/50 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <CardContent className="p-6 flex gap-4 items-start">
                  <div className="text-3xl h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SupportingSectors;
