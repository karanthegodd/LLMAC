import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { IIMsMarquee } from "@/components/IIMsMarquee";
import { SponsorsCarousel } from "@/components/sponsors/SponsorsCarousel";
import { EASING, fadeUp, fadeIn, staggerChildFadeUp, containerStagger } from "@/lib/motion";
import {
  Users,
  GraduationCap,
  Calendar,
  Link2,
  TrendingUp,
  Target,
  MapPin,
  Briefcase,
  Lightbulb,
  Heart,
  Building2,
} from "lucide-react";

const programsInitiatives = [
  { icon: Briefcase, title: "Professional Networking & Mentorship" },
  { icon: Lightbulb, title: "Industry Panels & Thought Leadership" },
  { icon: Heart, title: "Community & Family Engagement", desc: "Social gatherings, cultural celebrations, and family." },
  { icon: Building2, title: "Alumni Business & Referral Ecosystem", desc: "A trusted directory and referral network to support alumni-led businesses and professional services." },
];

const engageEvents = [
  { title: "Annual Gala & Awards Night", monthYear: "March 2026", location: "Toronto" },
  { title: "Leadership Summit", monthYear: "May 2026", location: "Vancouver" },
  { title: "Summer Networking Mixer", monthYear: "July 2026", location: "Calgary" },
];

const cityChapters = ["Toronto", "Vancouver", "Calgary", "Others"];

const uniteGrowImpact = [
  { icon: Link2, title: "Unite", desc: "Bringing IIM alumni across Canada together through events, chapters, and partnerships." },
  { icon: TrendingUp, title: "Grow", desc: "Professional development, mentorship, and career resources for our members." },
  { icon: Target, title: "Impact", desc: "Driving positive change in industry and society through our collective expertise." },
];

export default function Home() {
  const reducedMotion = useReducedMotion() ?? false;
  const upcomingEvents = [
    { date: "16 November 2025", title: "Annual Gala & Awards Night", location: "Vancouver", desc: "An evening celebrating excellence and connections across the IIMAC community.", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80" },
    { date: "02 December 2025", title: "Holiday Networking Mixer", location: "Toronto", desc: "Connect with fellow alumni in a relaxed seasonal setting.", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" },
    { date: "18 January 2026", title: "New Year Kickoff", location: "Calgary", desc: "Start the year with insights and networking across chapters.", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&q=80" },
    { date: "22 February 2026", title: "Leadership Forum", location: "Montreal", desc: "Panels and workshops on leadership and industry trends.", image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80" },
  ];

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
        {/* Hero: full-bleed image with overlay (template style) */}
        <section
          className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[hsl(var(--deep-navy))]"
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
          <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 text-center">
            <motion.p
              className="text-primary-foreground/90 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] mb-4"
              initial={{ opacity: reducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.2 }}
            >
              A premier Canadian professional network uniting alumni of the Indian Institutes of Management (IIMs).
            </motion.p>
            <h1
              id="hero-heading"
              className="font-playfair font-bold text-primary-foreground leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto"
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
              className="mt-5 md:mt-6 text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: reducedMotion ? 1 : 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.15 }}
            >
              IIM Alumni Canada (IIMAC) brings together distinguished graduates residing across Canada — fostering meaningful connections, advancing careers, and driving positive impact.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: reducedMotion ? 1 : 0, y: reducedMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.45, delay: 0.25 }}
            >
              <Link to="/register">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-6">
                  Become a Member
                </Button>
              </Link>
              <Link to="/partners">
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-lg px-6">
                  Partner with IIMAC
                </Button>
              </Link>
            </motion.div>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Already a member?{" "}
              <Link to="/auth" className="text-secondary font-medium hover:underline underline-offset-2">Sign in</Link>
            </p>
          </div>
        </section>

        {/* Metrics strip - bold blue bar */}
        <section className="bg-primary text-primary-foreground border-y-2 border-primary-foreground/20 shadow-lg" aria-label="Key metrics">
          <div className="container mx-auto px-4 py-8 md:py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { value: "520+", label: "Alumni Members", icon: Users },
                { value: "6+", label: "Chapters", icon: MapPin },
                { value: "20+", label: "Annual Events", icon: Calendar },
                { value: "21", label: "IIMs Represented", icon: GraduationCap },
              ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                  <item.icon className="h-7 w-7 md:h-8 md:w-8 text-secondary shrink-0" />
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary-foreground">{item.value}</div>
                    <div className="text-xs md:text-sm text-primary-foreground/90">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA band - join the community */}
        <section className="bg-primary text-primary-foreground py-12 md:py-14" aria-label="Join IIMAC">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">Join 500+ IIM alumni across Canada</h2>
            <p className="text-primary-foreground/90 max-w-xl mx-auto mb-6">Connect, grow, and create impact with your community.</p>
            <Link to="/register">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg px-8 text-base font-semibold">
                Become a Member
              </Button>
            </Link>
          </div>
        </section>

        {/* Unite. Grow. Impact. - three cards (template pillar section) */}
        <section className="section-padding bg-muted/50 border-y border-border" aria-labelledby="ugi-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="ugi-heading" title="Unite. Grow. Impact." subtitle="Our pillars for the IIMAC community." />
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
              variants={containerStagger(reducedMotion, { staggerChildren: 0.1 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {uniteGrowImpact.map((item, i) => (
                <motion.div key={item.title} variants={staggerChildFadeUp(reducedMotion, 20)}>
                  <Card className="h-full border-2 border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 bg-card">
                    <CardHeader>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 mb-2">
                        <item.icon className="h-6 w-6" />
                      </span>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* About IIMAC */}
        <section className="section-padding bg-background border-b border-border/50" aria-labelledby="about-iimac-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="about-iimac-heading" title="About IIMAC" subtitle="The official alumni network for IIM graduates in Canada." />
            <motion.p
              className="section-intro text-center"
              variants={fadeIn(reducedMotion, { duration: 0.5 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              IIM Alumni Canada (IIMAC) connects members through events, chapters, and partnerships to foster professional growth and impact. We welcome alumni from all 21 Indian Institutes of Management.
            </motion.p>
            <motion.div className="flex justify-center mt-8" variants={fadeUp(reducedMotion)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10">Learn more about us</Button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* How We Engage: single grey container, two columns — Programs & Initiatives left, Events + City Chapters right */}
        <section className="section-padding bg-background" aria-labelledby="how-we-engage-heading">
          <div className="container mx-auto px-4 max-w-5xl">
            <SectionHeader id="how-we-engage-heading" title="How We Engage" />
            <div className="mt-8 rounded-xl bg-muted/50 border border-border/60 shadow-sm p-6 md:p-8 lg:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 lg:gap-x-12">
                {/* Left: Programs & Initiatives */}
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-4">Programs & Initiatives</h3>
                  <div className="space-y-3">
                    {programsInitiatives.map((item, i) => (
                      <div
                        key={i}
                        className="flex gap-3 p-3 rounded-lg bg-card border border-border/50 shadow-sm"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-primary/30 text-primary">
                          <item.icon className="h-4 w-4" strokeWidth={2} />
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold text-foreground text-sm">{item.title}</p>
                          {item.desc && (
                            <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Upcoming Events + City Chapters */}
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-4">Upcoming Events</h3>
                    <div className="space-y-3">
                      {engageEvents.map((e, i) => (
                        <div
                          key={i}
                          className="flex gap-3 p-3 rounded-lg bg-card border border-border/50 shadow-sm"
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border-2 border-primary/30 text-primary">
                            <Calendar className="h-4 w-4" strokeWidth={2} />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-foreground text-sm">{e.title}</p>
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-1 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Calendar className="h-3 w-3" />
                                {e.monthYear}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {e.location}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Link to="/events" className="inline-block mt-4 text-primary font-semibold text-sm hover:underline">
                      View all events →
                    </Link>
                  </div>

                  <div>
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
            </div>
          </div>
        </section>

        {/* Our Institutions */}
        <section aria-labelledby="institutions-heading" className="section-padding bg-background border-b border-border/50">
          <div className="container mx-auto px-4 pb-4">
            <SectionHeader id="institutions-heading" title="Our Institutions" subtitle="Alumni from all 21 Indian Institutes of Management." />
          </div>
          <IIMsMarquee />
        </section>

        {/* Recent Highlights */}
        <section id="events-preview" className="section-padding bg-muted/40" aria-labelledby="highlights-heading">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 id="highlights-heading" className="chapter-title text-2xl md:text-3xl font-semibold text-foreground tracking-[0.12em]">Recent Highlights</h2>
              <Link to="/events" className="text-primary font-semibold hover:underline">See more →</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {upcomingEvents.map((e, i) => (
                <Link key={i} to="/events" className="rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-card transition-all block">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={e.image} alt="" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-foreground/80 uppercase">{e.date}</p>
                    <h3 className="font-semibold text-foreground text-sm mt-1 line-clamp-2">{e.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors */}
        <section className="section-padding bg-background border-t-2 border-border" aria-labelledby="sponsors-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="sponsors-heading" title="Our Proud Sponsors" subtitle="Together we unite, grow, and make an impact." />
            <SponsorsCarousel />
            <div className="flex flex-wrap gap-3 justify-center mt-8">
              <Link to="/partners">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View All Sponsors</Button>
              </Link>
              <Link to="/partners">
                <Button variant="outline">Partner with IIMAC</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
