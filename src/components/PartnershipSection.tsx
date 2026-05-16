import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PartnershipSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-accent font-semibold uppercase tracking-wider mb-3">Partnership</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Partner with a Trusted Local Voice in Child Protection
              </h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                KELLENA collaborates with international agencies, foundations, government bodies,
                and civic partners to co-design safeguarding solutions that reach the most excluded
                children in Cameroon.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🌐", label: "International NGOs & UN Agencies" },
                { icon: "🏛️", label: "Government & Public Institutions" },
                { icon: "💼", label: "Foundations & Institutional Donors" },
                { icon: "🤲", label: "Faith-based & Civic Partners" },
              ].map((p) => (
                <div
                  key={p.label}
                  className="p-4 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur"
                >
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="text-sm font-medium">{p.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/get-involved">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">
                Partner With Us
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                Request a Proposal
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
