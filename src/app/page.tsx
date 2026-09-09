import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Compass,
  Droplets,
  FerrisWheel,
  Flame,
  GraduationCap,
  Hotel,
  PawPrint,
  PartyPopper,
  TentTree,
  UtensilsCrossed,
} from "lucide-react";

const experiences = [
  {
    title: "Water Park",
    description:
      "Cool off, make a splash and enjoy a day built around water and family fun.",
    icon: Droplets,
    accent: "experience-card-water",
  },
  {
    title: "Rides & Adventure",
    description:
      "Discover thrilling rides and activities designed to bring energy to your day.",
    icon: FerrisWheel,
    accent: "experience-card-adventure",
  },
  {
    title: "Lion Viewing",
    description:
      "Add an animal experience to your visit and get closer to the wild.",
    icon: PawPrint,
    accent: "experience-card-lion",
  },
  {
    title: "Food & Drinks",
    description:
      "Take a break, refuel and make time for good food during your day out.",
    icon: UtensilsCrossed,
    accent: "experience-card-food",
  },
];

const planningOptions = [
  {
    title: "Attractions",
    description: "Explore the experiences that make up your Lion Park day.",
    icon: Compass,
  },
  {
    title: "Activities",
    description: "Find more ways to enjoy time with family, friends and groups.",
    icon: Flame,
  },
  {
    title: "Packages",
    description: "Plan around experiences and occasions that suit your visit.",
    icon: CalendarDays,
  },
  {
    title: "Camping",
    description: "Make your Lion Park experience part of a bigger escape.",
    icon: TentTree,
  },
  {
    title: "Birthdays",
    description: "Turn a special day into an adventure worth remembering.",
    icon: PartyPopper,
  },
  {
    title: "School Trips",
    description: "Create a memorable group experience beyond the classroom.",
    icon: GraduationCap,
  },
  {
    title: "Events",
    description: "Bring people together for shared experiences and celebrations.",
    icon: Hotel,
  },
];

export default function HomePage() {
  return (
    <>
      <section className="resort-hero">
        <div className="hero-shape hero-shape-gold" />
        <div className="hero-shape hero-shape-cyan" />
        <div className="hero-shape hero-shape-orange" />

        <div className="container resort-hero-content">
          <div className="hero-copy">
            <p className="resort-eyebrow">Lion Park Resort</p>

            <h1>
              The Beach
              <span>in the Bush</span>
            </h1>

            <p className="hero-lead">
              A family day out with rides, water, animals, food and adventure.
            </p>

            <div className="hero-actions">
              <a href="#attractions" className="btn btn-primary">
                Explore the Park
                <ArrowRight size={18} />
              </a>

              <a href="#plan-your-day" className="btn btn-outline">
                Plan Your Visit
              </a>
            </div>
          </div>

          <div className="hero-experience-panel" aria-hidden="true">
            <div className="hero-sun" />

            <div className="hero-water-line hero-water-line-one" />
            <div className="hero-water-line hero-water-line-two" />
            <div className="hero-water-line hero-water-line-three" />

            <div className="hero-panel-label">
              <Droplets size={20} />
              <span>Water • Adventure • Family Fun</span>
            </div>

            <div className="hero-panel-badge">
              <PawPrint size={28} />
              <span>Theme Park • Water Park • Animal Park</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="attractions"
        className="section-shell experiences-section"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Explore Lion Park</p>
            <h2>What can I do at Lion Park?</h2>
            <p className="section-copy">
              Build your day around water, rides, animals, food and adventure.
              There is something to explore whether you are visiting with family,
              friends or a group.
            </p>
          </div>

          <div className="experience-grid">
            {experiences.map(
              ({ title, description, icon: Icon, accent }) => (
                <article
                  key={title}
                  className={`experience-card ${accent}`}
                >
                  <span className="experience-icon">
                    <Icon size={25} />
                  </span>

                  <h3>{title}</h3>
                  <p>{description}</p>

                  <span className="experience-link">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="activities" className="activity-strip">
        <div className="container activity-strip-grid">
          <div>
            <p className="eyebrow eyebrow-on-soft">A day your way</p>
            <h2>From big thrills to simple family moments.</h2>
          </div>

          <p>
            Lion Park brings different experiences together in one destination.
            Explore rides, water, animals, group activities and more as you plan
            your day.
          </p>
        </div>
      </section>

      <section id="plan-your-day" className="section-shell planning-section">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Make it your day</p>
            <h2>Plan your day at Lion Park.</h2>
            <p className="section-copy">
              Start with what interests you most, then shape your visit around
              your family, group or special occasion.
            </p>
          </div>

          <div id="packages" className="planning-grid">
            {planningOptions.map(({ title, description, icon: Icon }) => (
              <article key={title} className="planning-card">
                <span className="planning-icon">
                  <Icon size={21} />
                </span>

                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="resort-cta">
        <div className="container resort-cta-inner">
          <div>
            <p className="resort-cta-eyebrow">Lion Park Resort</p>
            <h2>Ready for your day at Lion Park?</h2>
            <p>
              Start exploring the park, plan the kind of day you want and get in
              touch with the resort when you are ready.
            </p>
          </div>

          <div className="resort-cta-actions">
            <a href="#plan-your-day" className="btn btn-primary">
              Plan Your Visit
              <ArrowRight size={18} />
            </a>

            <a href="#contact" className="btn btn-dark-outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}