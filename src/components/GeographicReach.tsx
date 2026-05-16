const regions = [
  { name: "Northwest Region", note: "Hard-to-reach rural communities" },
  { name: "Southwest Region", note: "Conflict & displacement-affected areas" },
  { name: "West Region", note: "Inclusive education partnerships" },
  { name: "Littoral Region", note: "Urban safeguarding & referral systems" },
];

const GeographicReach = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <p className="text-accent font-semibold uppercase tracking-wider mb-3">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serving Hard-to-Reach Communities in Cameroon
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              KELLENA operates where formal protection systems are weakest—delivering safeguarding,
              disability inclusion, and humanitarian response in underserved rural and crisis-affected areas.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">Regions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">80+</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">5,000+</div>
                <div className="text-sm text-muted-foreground">People Reached</div>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {regions.map((r) => (
              <div
                key={r.name}
                className="p-5 rounded-xl border-2 border-border/60 bg-gradient-to-br from-primary/5 to-transparent hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📍</span>
                  <h3 className="font-bold text-foreground">{r.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeographicReach;
