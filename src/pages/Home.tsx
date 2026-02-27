import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { IIMsMarquee } from "@/components/IIMsMarquee";
import { SponsorsCarousel } from "@/components/sponsors/SponsorsCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { containerStagger, staggerChildFadeUp, fadeUpBlur, EASING, DURATIONS } from "@/lib/motion";
import {
  Users,
  GraduationCap,
  Calendar,
  Infinity,
  Sparkles,
  Link2,
  TrendingUp,
  Target,
  UserPlus,
  Briefcase,
  Award,
  Handshake,
  MessageCircle,
  Mic2,
  Heart,
  Zap,
  MapPin,
} from "lucide-react";

export default function Home() {
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroHeadline = "Where Leadership, Excellence, and Community Converge.";
  const heroWords = heroHeadline.split(" ");
  const upcomingEvents = [
    { date: "Nov 15", title: "Annual Gala & Awards Night", location: "Vancouver" },
    { date: "Dec 02", title: "Holiday Networking Mixer", location: "Toronto" },
    { date: "Jan 18", title: "New Year Kickoff", location: "Calgary" },
  ];

  const cities = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
  ];

  const stats = [
    { value: "520+", label: "Members", icon: Users },
    { value: "21", label: "IIMs", icon: GraduationCap },
    { value: "20+", label: "Years of Impact", icon: Sparkles },
    { value: "6+", label: "Events", icon: Calendar },
    { value: "∞", label: "Impact", icon: Infinity },
  ];
  const statDelayClasses = ["animate-delay-100", "animate-delay-200", "animate-delay-300", "animate-delay-400", "animate-delay-500"];

  function MotionCtaButton({ reducedMotion }: { reducedMotion: boolean }) {
    const [hover, setHover] = useState(false);
    return (
      <motion.span
        className="relative inline-block bg-secondary text-secondary-foreground font-semibold text-base px-8 py-6 rounded-lg overflow-hidden cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={reducedMotion ? {} : { scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="relative z-10">Join IIMAC & Grow Your Network</span>
        {!reducedMotion && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"
            initial={{ x: "-100%" }}
            animate={{ x: hover ? "200%" : "-100%" }}
            transition={{ duration: 0.5 }}
          />
        )}
      </motion.span>
    );
  }

  function MotionCard({
    children,
    reducedMotion,
    className = "",
  }: {
    children: React.ReactNode;
    reducedMotion: boolean;
    className?: string;
  }) {
    return (
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={staggerChildFadeUp(reducedMotion, 20)}
        whileHover={
          reducedMotion
            ? {}
            : {
                y: -6,
                boxShadow: "0 12px 40px -12px hsl(214 63% 33% / 0.15)",
                borderColor: "hsl(var(--primary) / 0.35)",
              }
        }
        transition={{ duration: DURATIONS.normal }}
        className="border border-border rounded-xl bg-card text-card-foreground shadow-soft hover:shadow-card transition-shadow duration-300"
      >
        <Card className={`border-0 shadow-none bg-transparent ${className}`}>{children}</Card>
      </motion.div>
    );
  }

  function StatBlock({
    stat,
    index,
    reducedMotion,
  }: {
    stat: (typeof stats)[0];
    index: number;
    reducedMotion: boolean;
  }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" });
    const numMatch = stat.value.match(/^(\d+)/);
    const num = numMatch ? parseInt(numMatch[1], 10) : null;
    const suffix = stat.value.replace(/^\d+/, "") || "";
    const [display, setDisplay] = useState(reducedMotion ? stat.value : (num != null ? "0" + suffix : stat.value));

    useEffect(() => {
      if (!inView || reducedMotion || num == null) {
        if (inView && num != null) setDisplay(stat.value);
        return;
      }
      const duration = 1200;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const t = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - t) * (1 - t);
        const current = Math.round(eased * num);
        setDisplay(current + suffix);
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, [inView, reducedMotion, num, suffix, stat.value]);

    return (
      <motion.div
        ref={ref}
        className="text-center p-4 md:p-6"
        variants={staggerChildFadeUp(reducedMotion, 20)}
        whileHover={reducedMotion ? {} : { scale: 1.05 }}
        transition={{ duration: DURATIONS.normal }}
      >
        <motion.div
          className="flex justify-center mb-2"
          variants={staggerChildFadeUp(reducedMotion, 8)}
        >
          <stat.icon className="h-8 w-8 text-primary" />
        </motion.div>
        <div className="text-3xl md:text-4xl font-bold text-primary">{display}</div>
        <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
      </motion.div>
    );
  }

  const uniteGrowImpact = [
    {
      title: "Unite",
      icon: Link2,
      desc: "Connect with fellow IIM graduates across Canada and build lasting professional and personal relationships.",
    },
    {
      title: "Grow",
      icon: TrendingUp,
      desc: "Access mentorship, career resources, and development opportunities designed to accelerate your journey.",
    },
    {
      title: "Impact",
      icon: Target,
      desc: "Give back through thought leadership, community initiatives, and support for the next generation of leaders.",
    },
  ];

  const whoWeServe = [
    {
      title: "New Alumni & Newcomers",
      icon: UserPlus,
      desc: "Settle in with guidance, networking, and resources tailored to those new to Canada or early in their careers.",
    },
    {
      title: "Experienced Professionals",
      icon: Briefcase,
      desc: "Expand your influence through peer networks, industry forums, and leadership opportunities.",
    },
    {
      title: "Senior Leaders & Mentors",
      icon: Award,
      desc: "Share your expertise and shape the community as a mentor, speaker, or volunteer leader.",
    },
    {
      title: "Sponsors & Partners",
      icon: Handshake,
      desc: "Engage with top-tier talent and build visibility within Canada's premier management alumni network.",
    },
  ];

  const whatWeDo = [
    {
      title: "Professional Networking & Mentorship",
      icon: MessageCircle,
      desc: "Structured programs connecting members for mentorship, referrals, and career growth.",
    },
    {
      title: "Industry Forums & Thought Leadership",
      icon: Mic2,
      desc: "Panels, talks, and forums where alumni share insights and shape industry conversations.",
    },
    {
      title: "Community & Family Engagement",
      icon: Heart,
      desc: "Social events, family gatherings, and community initiatives that strengthen bonds beyond the boardroom.",
    },
    {
      title: "Alumni Success & Referral Ecosystem",
      icon: Zap,
      desc: "A trusted network for job referrals, collaborations, and support for alumni-led ventures.",
    },
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
        {/* Campus Arrival Hero: full-height lobby feel + first-scroll parallax */}
        <section
          className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-hero"
          aria-labelledby="hero-heading"
        >
          {/* Layer A: ambient light gradient drift (parallax: moves slower on scroll) */}
          {!reducedMotion && (
            <motion.div
              className="absolute inset-0 opacity-[0.6] pointer-events-none animate-ambient-drift"
              style={{
                backgroundImage: "radial-gradient(ellipse 90% 70% at 50% 40%, hsl(214 63% 33% / 0.06) 0%, transparent 55%), radial-gradient(ellipse 70% 80% at 80% 60%, hsl(38 92% 54% / 0.04) 0%, transparent 50%)",
                backgroundSize: "200% 200%",
                y: heroBgY,
              }}
              aria-hidden
            />
          )}
          {/* Layer B: subtle architectural grid + vignette (parallax) */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(214 63% 33% / 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(214 63% 33% / 0.03) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 75% at 50% 50%, black 30%, transparent 75%)",
              y: reducedMotion ? 0 : heroBgY,
            }}
            aria-hidden
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, hsl(0 0% 0% / 0.03) 100%)",
            }}
          />

          <motion.div
            className="container mx-auto px-4 relative z-10 py-16 md:py-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center max-w-6xl mx-auto">
              {/* Layer C: content */}
              <div className="space-y-8 text-center lg:text-left">
                <motion.p
                  className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.5 }}
                >
                  A premier Canadian professional network uniting alumni of the Indian Institutes of Management (IIMs)
                </motion.p>
                <h1 id="hero-heading" className="text-hero text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-[1.12]">
                  <span className="flex flex-wrap justify-center lg:justify-start gap-x-2">
                    {heroWords.map((word, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        initial={{ opacity: 0, filter: reducedMotion ? "none" : "blur(6px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{
                          duration: reducedMotion ? 0 : 0.4,
                          delay: reducedMotion ? 0 : 0.08 + i * 0.05,
                          ease: EASING.easeOut,
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </span>
                </h1>
                <motion.p
                  className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.25 }}
                >
                  IIM Alumni Canada (IIMAC) brings together distinguished graduates of Indian Institutes of Management residing across Canada – fostering meaningful professional connections, enriching careers, and driving positive impact across industry and society.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.35 }}
                >
                  <Link to="/register">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                    >
                      Join IIMAC
                    </Button>
                  </Link>
                  <Link to="/partners">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto rounded-lg border-2 hover:border-primary/50 hover:shadow-soft transition-all duration-300"
                    >
                      Partner with IIMAC
                    </Button>
                  </Link>
                </motion.div>
                <motion.p
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.4, delay: 0.45 }}
                >
                  Already a member?{" "}
                  <Link to="/auth" className="text-primary hover:underline font-medium">
                    Sign in to your account
                  </Link>
                </motion.p>
              </div>

              {/* Window into campus: framed image */}
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.2 }}
              >
                <div className="relative rounded-2xl overflow-hidden border border-border/80 bg-card shadow-card" style={{ boxShadow: "0 8px 32px -8px hsl(214 63% 33% / 0.12)" }}>
                  <div className="aspect-[4/3] relative">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                      alt="Professionals networking"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 2. Key Stats */}
        <section className="py-20 md:py-28 bg-background border-y border-border/60" aria-label="Key statistics">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
              variants={containerStagger(reducedMotion, { staggerChildren: 0.08, delayChildren: 0.1 })}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {stats.map((stat, i) => (
                <StatBlock key={i} stat={stat} index={i} reducedMotion={reducedMotion} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Unite. Grow. Impact. */}
        <section className="py-24 md:py-32 bg-muted/20" aria-labelledby="unite-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="unite-heading" title="Unite. Grow. Impact." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {uniteGrowImpact.map((item, i) => (
                <MotionCard key={i} reducedMotion={reducedMotion} className="text-center">
                  <CardHeader>
                    <motion.div
                      className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                      whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 8 }}
                      transition={{ duration: DURATIONS.fast }}
                    >
                      <item.icon className="h-7 w-7 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-left">{item.desc}</CardDescription>
                  </CardHeader>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CTA Band */}
        <section id="cta" className="py-20 md:py-28 bg-primary text-primary-foreground text-center relative overflow-hidden" aria-labelledby="cta-heading">
          {/* Subtle moving gradient / spotlight (disabled when reduced motion) */}
          {!reducedMotion && (
            <motion.div
              className="absolute inset-0 opacity-30 pointer-events-none"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 50%, hsl(38 92% 54% / 0.4), transparent 70%)",
                backgroundSize: "200% 200%",
              }}
            />
          )}
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              id="cta-heading"
              className="text-3xl md:text-4xl font-bold font-accent mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Are You Waiting For?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Become part of a trusted alumni network built on excellence, leadership, and lifelong connections.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative inline-block"
            >
              <Link to="/register" className="inline-block">
                <MotionCtaButton reducedMotion={reducedMotion} />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* 5. Who We Serve */}
        <section className="py-24 md:py-32 bg-background" aria-labelledby="who-we-serve-heading">
          <div className="container mx-auto px-4">
            <SectionHeader
              id="who-we-serve-heading"
              title="Who We Serve"
              subtitle="A community built for every stage of your professional journey."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whoWeServe.map((item, i) => (
                <MotionCard key={i} reducedMotion={reducedMotion}>
                  <CardHeader>
                    <motion.div
                      className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 8 }}
                      transition={{ duration: DURATIONS.fast }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Our Institutions (IIMs Marquee) */}
        <section aria-labelledby="institutions-heading" className="pb-4">
          <div className="container mx-auto px-4 pt-20 md:pt-24 pb-6">
            <SectionHeader
              id="institutions-heading"
              title="Our Institutions"
              subtitle="Alumni from all 21 Indian Institutes of Management."
            />
          </div>
          <IIMsMarquee />
        </section>

        {/* 7. What We Do */}
        <section className="py-24 md:py-32 bg-muted/20" aria-labelledby="what-we-do-heading">
          <div className="container mx-auto px-4">
            <SectionHeader
              id="what-we-do-heading"
              title="What We Do"
              subtitle="Programs and initiatives designed to create meaningful value for our members."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatWeDo.map((item, i) => (
                <MotionCard key={i} reducedMotion={reducedMotion}>
                  <CardHeader>
                    <motion.div
                      className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                      whileHover={reducedMotion ? {} : { scale: 1.05, rotate: 8 }}
                      transition={{ duration: DURATIONS.fast }}
                    >
                      <item.icon className="h-6 w-6 text-primary" />
                    </motion.div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Upcoming Events + City Chapters */}
        <section id="events-preview" className="py-24 md:py-32 bg-background" aria-labelledby="events-heading">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 max-w-6xl mx-auto">
              <div>
                <motion.h2
                  id="events-heading"
                  className="chapter-title text-2xl md:text-3xl font-semibold text-foreground tracking-[0.12em] mb-8"
                  variants={fadeUpBlur(reducedMotion, { y: 16 })}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Upcoming Events
                </motion.h2>
                <div className="space-y-3">
                  {upcomingEvents.map((e, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-4 items-start p-4 rounded-xl border border-border bg-card shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300 group"
                      variants={fadeUpBlur(reducedMotion, { y: 12 })}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-20px" }}
                      whileHover={reducedMotion ? {} : { y: -2 }}
                    >
                      <div className="shrink-0 w-14 h-14 rounded-lg bg-primary/10 flex flex-col items-center justify-center text-primary font-bold text-sm">
                        {e.date}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground">{e.title}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-4 w-4 shrink-0" /> {e.location}
                        </p>
                      </div>
                      <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform">→</span>
                    </motion.div>
                  ))}
                </div>
                <Link to="/events" className="inline-block mt-6 text-primary font-medium hover:underline">
                  View all events →
                </Link>
              </div>

              <div>
                <motion.h2
                  className="chapter-title text-2xl md:text-3xl font-semibold text-foreground tracking-[0.12em] mb-2"
                  variants={fadeUpBlur(reducedMotion, { y: 16 })}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  City Chapters
                </motion.h2>
                <motion.p
                  className="text-muted-foreground mb-8"
                  variants={fadeUpBlur(reducedMotion, { y: 12 })}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  IIMAC has active chapters across major Canadian cities, ensuring alumni stay connected wherever they are.
                </motion.p>
                <div className="flex flex-wrap gap-3">
                  {cities.map((city) => (
                    <Link
                      key={city}
                      to="/events"
                      className="inline-flex items-center px-4 py-2.5 rounded-full border border-border bg-card text-foreground font-medium shadow-soft hover:border-primary/50 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                    >
                      {city}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Our Proud Sponsors */}
        <section className="py-24 md:py-32 bg-secondary/10 border-t border-border/60" aria-labelledby="sponsors-heading">
          <div className="container mx-auto px-4">
            <SectionHeader
              id="sponsors-heading"
              title="Our Proud Sponsors"
              subtitle="Together we unite, grow, and make an impact."
            />
            <SponsorsCarousel />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/partners">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Sponsors
                </Button>
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
