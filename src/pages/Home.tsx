import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { IIMsMarquee } from "@/components/IIMsMarquee";
import { EASING, fadeUp, staggerChildFadeUp, containerStagger } from "@/lib/motion";
import {
  Users,
  GraduationCap,
  Calendar,
  MapPin,
  Briefcase,
  Lightbulb,
  Heart,
  Building2,
  ArrowRight,
  Infinity,
} from "lucide-react";

const programsInitiatives = [
  { icon: Briefcase, title: "Professional Networking & Mentorship" },
  { icon: Lightbulb, title: "Industry Panels & Thought Leadership" },
  { icon: Heart, title: "Community & Family Engagement" },
  { icon: Building2, title: "Alumni Business & Referral Ecosystem" },
];

const engageEvents = [
  { title: "Annual Gala & Awards Night", monthYear: "March 2026", location: "Toronto" },
  { title: "Leadership Summit", monthYear: "May 2026", location: "Vancouver" },
  { title: "Summer Networking Mixer", monthYear: "July 2026", location: "Calgary" },
];

const cityChapters = ["Toronto", "Vancouver", "Calgary", "Others"];

const whatWeDoCards = [
  {
    title: "For IIM Alumni",
    text: "Professional networking, mentorship, referrals, and leadership roles within a trusted peer community.",
    href: "/membership",
    cta: "Learn more",
  },
  {
    title: "For Partners",
    text: "Collaboration with like-minded organizations to create shared programming, cross-community engagement, and collective visibility.",
    href: "/partners",
    cta: "Learn more",
  },
  {
    title: "For Sponsors",
    text: "Brand visibility, event partnerships, and long-term community alignment with a high-caliber professional network.",
    href: "/partners",
    cta: "Learn more",
  },
];

const stats = [
  { value: "520+", label: "Alumni", icon: Users },
  { value: "21", label: "IIMs Represented", icon: GraduationCap },
  { value: "20+", label: "Annual Events", icon: Calendar },
  { value: "6+", label: "Chapters Across Canada", icon: MapPin },
  { value: "∞", label: "Lifelong Connections", icon: Infinity },
];

const uniteGrowImpact = [
  { title: "Unite", desc: "Connecting IIM alumni across cities, industries, and generations." },
  { title: "Grow", desc: "Enabling career advancement, entrepreneurship, and lifelong learning." },
  { title: "Impact", desc: "Driving influence across industries and contributing to Canadian society." },
];

export default function Home() {
  const reducedMotion = useReducedMotion() ?? false;

  return (
    <div className="min-h-screen flex flex-col grain-paper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.45, delay: 0.5 }}
      >
        <Navigation />
      </motion.div>

      <main className="flex-1">
        {/* 1. HERO */}
        <section
          className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[hsl(var(--deep-navy))] py-12 md:py-16"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85"
              alt=""
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--primary))]/85 via-[hsl(var(--primary))]/75 to-[hsl(var(--deep-navy))]/95" aria-hidden="true" />
          </div>
          <div className="container relative z-10 mx-auto px-4 py-8 md:py-12 text-center">
            <motion.p
              className="text-primary-foreground/70 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: reducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.1 }}
            >
              A Premier Canadian Professional Network
            </motion.p>
            <h1
              id="hero-heading"
              className="font-playfair font-bold text-primary-foreground leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto"
            >
              <motion.span
                className="block"
                initial={{ opacity: reducedMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reducedMotion ? 0 : 0.5, ease: EASING.easeOut }}
              >
                Where Leadership, Excellence, and Community{" "}
                <span className="text-secondary">Converge.</span>
              </motion.span>
            </h1>
            <motion.p
              className="mt-4 md:mt-5 text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: reducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.15 }}
            >
              IIM Alumni Canada (IIMAC) brings together distinguished graduates of the Indian Institutes of Management residing across Canada — fostering meaningful professional connections, advancing careers, and driving positive impact across industries and society.
            </motion.p>
            <motion.div
              className="mt-6 flex justify-center"
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: 0.25 }}
            >
              <Link to="/register">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-8">
                  Join IIMAC
                </Button>
              </Link>
            </motion.div>
            <p className="mt-3 text-sm text-primary-foreground/80">
              <Link to="/partners" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors inline-flex items-center gap-1">
                Partnership opportunities
                <ArrowRight className="h-3.5 w-3.5 inline" />
              </Link>
            </p>
          </div>
        </section>

        {/* 2. ABOUT IIM */}
        <section className="py-8 md:py-10 bg-background border-b border-border/50" aria-labelledby="about-iim-heading">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 id="about-iim-heading" className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              The Indian Institutes of Management
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The Indian Institutes of Management (IIMs) are globally recognized graduate schools of management, known for academic rigor, leadership development, and excellence in research. Established in 1961, the IIM network now comprises 21 institutions across India.
            </p>
          </div>
        </section>

        {/* 3. WHAT WE DO */}
        <section className="py-8 md:py-10 bg-muted/40 border-b border-border/50" aria-labelledby="what-we-do-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="what-we-do-heading" title="A Network Built for Impact" />
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you're an alumnus, a partner organization, or a sponsor — IIMAC offers a platform for meaningful engagement.
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              variants={containerStagger(reducedMotion, { staggerChildren: 0.08 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {whatWeDoCards.map((card) => (
                <motion.div key={card.title} variants={staggerChildFadeUp(reducedMotion, 16)}>
                  <Card className="h-full border-2 border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 bg-card">
                    <CardHeader>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.text}</p>
                      <Link
                        to={card.href}
                        className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
                      >
                        {card.cta}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 4. STATISTICS */}
        <section className="py-6 md:py-8 bg-primary text-primary-foreground border-y-2 border-primary-foreground/20" aria-label="Key statistics">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-14">
              {stats.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="h-6 w-6 md:h-7 md:w-7 text-secondary shrink-0" />
                  <div>
                    <span className="text-xl md:text-2xl font-bold">{item.value}</span>
                    <span className="ml-2 text-sm md:text-base text-primary-foreground/90">{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. ABOUT IIM ALUMNI CANADA */}
        <section className="py-8 md:py-10 bg-background border-b border-border/50" aria-labelledby="about-iimac-heading">
          <div className="container mx-auto px-4">
            <h2 id="about-iimac-heading" className="text-2xl md:text-3xl font-semibold text-foreground text-center mb-4">
              About IIM Alumni Canada
            </h2>
            <p className="section-intro text-center text-muted-foreground max-w-2xl mx-auto mb-6 line-clamp-3">
              IIM Alumni Canada (IIMAC) is a non-profit network connecting graduates of the Indian Institutes of Management across Canada. We foster meaningful professional relationships, enable career growth, and strengthen the IIM brand nationally.
            </p>
            <p className="text-center text-lg md:text-xl font-semibold text-foreground mb-6">Unite. Grow. Impact.</p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-6"
              variants={containerStagger(reducedMotion, { staggerChildren: 0.06 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {uniteGrowImpact.map((item) => (
                <motion.div key={item.title} variants={staggerChildFadeUp(reducedMotion, 12)}>
                  <div className="rounded-lg border border-border/60 bg-card p-4 text-center">
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="flex justify-center" variants={fadeUp(reducedMotion)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to="/about">
                <span className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                  Learn more about our journey
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* IIMs moving bar – alumni from all 21 IIMs (below About IIMAC) */}
        <section aria-labelledby="institutions-heading" className="border-b border-border/50">
          <div className="container mx-auto px-4 pt-2 pb-4">
            <h2 id="institutions-heading" className="sr-only">Our Institutions</h2>
            <p className="text-center text-sm text-muted-foreground mb-2">Alumni from all 21 Indian Institutes of Management</p>
          </div>
          <IIMsMarquee />
        </section>

        {/* 6. HOW WE ENGAGE */}
        <section className="py-8 md:py-10 bg-muted/40" aria-labelledby="how-we-engage-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeader id="how-we-engage-heading" title="How We Engage" />
            <div className="rounded-xl bg-card border border-border/60 shadow-sm p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-4">Programs & Initiatives</h3>
                  <ul className="space-y-3">
                    {programsInitiatives.map((item, i) => (
                      <li key={i} className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/40">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-primary/30 text-primary">
                          <item.icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <p className="font-medium text-foreground text-sm pt-1">{item.title}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-4">Upcoming Events</h3>
                  <ul className="space-y-3">
                    {engageEvents.map((e, i) => (
                      <li key={i} className="flex gap-3 p-3 rounded-lg bg-muted/50 border border-border/40">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-primary/30 text-primary">
                          <Calendar className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="font-semibold text-foreground text-sm">{e.title}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {e.monthYear} – {e.location}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="/events" className="inline-block mt-4 text-primary font-semibold text-sm hover:underline">
                    View all events →
                  </Link>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-border/60">
                <h3 className="font-semibold text-foreground text-lg mb-3">City Chapters</h3>
                <div className="flex flex-wrap gap-2">
                  {cityChapters.map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1.5 rounded-full bg-muted border border-border/60 px-4 py-2 text-sm font-medium text-foreground"
                    >
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
