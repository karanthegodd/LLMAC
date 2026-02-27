import { useQuery } from "@tanstack/react-query";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import {
  containerStagger,
  staggerChildFadeUp,
  fadeUpBlur,
  fadeIn,
  DURATIONS,
  EASING,
} from "@/lib/motion";
import {
  PARTNER_BRANDS_LOGO_GRID,
  SAMPLE_OFFERS_WITH_LOGO,
  ACTIVATION_IMAGES,
  getFaviconUrl,
} from "@/data/partnerBrands";
import saiKrishnaChippaPhoto from "../assets/team/sai-krishna-chippa.png";
import minhazMoinPhoto from "../assets/team/minhaz-moin.png";
import { ExternalLink, Users, GraduationCap, MapPin, Calendar, Briefcase, Globe, Eye } from "lucide-react";
import {
  Landmark,
  Shield,
  Home,
  Car,
  Hammer,
  Baby,
  Dumbbell,
  Coffee,
  Scale,
  Phone,
  Mic2,
  UtensilsCrossed,
  Sparkles,
  BookOpen,
  Mail,
} from "lucide-react";

const COMMUNITY_HIGHLIGHTS = [
  { label: "Registered members across Canada", value: "520+", icon: Users },
  { label: "Representation from all major IIMs", value: "All", icon: GraduationCap },
  { label: "Presence in Toronto, Mississauga, Ottawa, Calgary, Vancouver, and more", value: "6+", icon: MapPin },
  { label: "Regular networking events, speaker series, cultural gatherings", value: "Ongoing", icon: Calendar },
  { label: "Demographics: Senior professionals, founders, executives", value: "—", icon: Briefcase },
  { label: "Reach", value: "Global presence", icon: Globe },
];

const PARTNERSHIP_TIERS = [
  { name: "Platinum Partner", amount: "CAD 10,000+", color: "bg-amber-100 text-amber-900 border-amber-200" },
  { name: "Gold Partner", amount: "CAD 5,000+", color: "bg-amber-50 text-amber-800 border-amber-200" },
  { name: "Silver Partner", amount: "CAD 2,500+", color: "bg-slate-100 text-slate-800 border-slate-200" },
  { name: "Bronze Partner", amount: "CAD 1,000+", color: "bg-orange-50 text-orange-800 border-orange-200" },
  { name: "Community Partner", amount: "In-kind under 1,000 CAD", color: "bg-muted text-muted-foreground border-border" },
];

const COLLABORATION_AREAS = [
  { label: "Banking & Financial Services", icon: Landmark },
  { label: "Insurance Providers (Canada & India-based)", icon: Shield },
  { label: "Real Estate & Mortgage Advisors", icon: Home },
  { label: "Car Rentals & Dealerships", icon: Car },
  { label: "Home Renovation & Contractors", icon: Hammer },
  { label: "Childcare, Daycare & Summer Camps", icon: Baby },
  { label: "Gym, Golf Club & Recreation Memberships", icon: Dumbbell },
  { label: "Coffee Chains, Restaurants, and Event Spaces", icon: Coffee },
  { label: "Legal, Tax & Education Partners", icon: Scale },
  { label: "Telecom & Loyalty Programs", icon: Phone },
];

const ACTIVATION_OPPORTUNITIES = [
  { title: "Annual Gala & Networking Evenings", icon: Sparkles },
  { title: "Community Events & Meetups", icon: Users },
  { title: "Leadership Roundtables & Webinars", icon: Mic2 },
  { title: "Cultural & Family Picnics", icon: UtensilsCrossed },
  { title: "Career & Entrepreneurship Workshops", icon: BookOpen },
];

/** Logo cell: Clearbit (best quality) → Google favicon (reliable) → initial letter. Optional: add files in public/partner-logos/{domain}.png to use local. */
function PartnerLogo({ name, domain, className = "" }: { name: string; domain: string; className?: string }) {
  const [source, setSource] = useState<"clearbit" | "favicon" | "letter">("favicon");
  const initial = name.charAt(0).toUpperCase();
  const clearbitSrc = `https://logo.clearbit.com/${domain}`;
  const faviconSrc = getFaviconUrl(domain, 128);
  const src = source === "clearbit" ? clearbitSrc : source === "favicon" ? faviconSrc : null;

  const goNext = () => {
    if (source === "clearbit") setSource("favicon");
    else setSource("letter");
  };

  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-border bg-card p-6 h-24 transition-all duration-300 hover:shadow-card hover:-translate-y-0.5 hover:border-primary/30 hover:grayscale-0 hover:opacity-100 grayscale opacity-70 ${className}`}
      title={name}
    >
      {source === "letter" ? (
        <span className="text-2xl font-semibold text-muted-foreground">{initial}</span>
      ) : (
        <img
          src={src!}
          alt=""
          loading="lazy"
          decoding="async"
          className="max-h-12 w-auto max-w-full object-contain"
          onError={goNext}
        />
      )}
    </div>
  );
}

/** Logo for sample-offer cards: Google favicon first (reliable), then Clearbit, then letter. */
function SampleOfferLogo({ domain, name }: { domain: string; name: string }) {
  const [source, setSource] = useState<"clearbit" | "favicon" | "letter">("favicon");
  const clearbitSrc = `https://logo.clearbit.com/${domain}`;
  const faviconSrc = getFaviconUrl(domain, 128);
  const src = source === "clearbit" ? clearbitSrc : source === "favicon" ? faviconSrc : null;
  const goNext = () => {
    if (source === "clearbit") setSource("favicon");
    else setSource("letter");
  };
  return (
    <div className="shrink-0 w-20 h-20 rounded-xl border border-border bg-muted/50 flex items-center justify-center overflow-hidden">
      {source === "letter" ? (
        <span className="text-2xl font-semibold text-muted-foreground">{name.charAt(0)}</span>
      ) : (
        <img
          src={src!}
          alt=""
          loading="lazy"
          decoding="async"
          className="max-h-10 w-auto max-w-[72px] object-contain"
          onError={goNext}
        />
      )}
    </div>
  );
}

/** Activation opportunity with image + text split and subtle parallax on image */
function ActivationCard({
  item,
  index,
  reducedMotion,
}: {
  item: (typeof ACTIVATION_IMAGES)[number];
  index: number;
  reducedMotion: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], reducedMotion ? [0, 0, 0, 0] : [0, 12, -8, 0]);
  const icon = ACTIVATION_OPPORTUNITIES[index]?.icon ?? Sparkles;
  const Icon = icon;
  const isReversed = index % 2 === 1;
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: reducedMotion ? 0 : DURATIONS.normal }}
      className="grid md:grid-cols-2 gap-8 items-center"
    >
      <div className={isReversed ? "md:order-2" : ""}>
        <motion.div style={reducedMotion ? undefined : { y: imageY }} className="rounded-2xl overflow-hidden border border-border shadow-soft">
          <img
            src={item.img}
            alt={item.alt}
            loading="lazy"
            decoding="async"
            className="w-full aspect-[4/3] object-cover"
          />
        </motion.div>
      </div>
      <div className={`flex gap-4 p-6 rounded-xl border border-border bg-card shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300 ${isReversed ? "md:order-1" : ""}`}>
        <Icon className="h-10 w-10 shrink-0 text-primary" />
        <div>
          <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
        </div>
      </div>
    </motion.article>
  );
}

const DIRECTORS = [
  { name: "Sai Krishna Chippa", phone: "+1-416-837-1646", linkedIn: "https://www.linkedin.com/in/sai-krishna-chippa-mba-b1b4308b/", linkedInLabel: "Connect with Sai on LinkedIn", image: saiKrishnaChippaPhoto },
  { name: "Minhaz Moin", phone: "+1-289-885-5973", linkedIn: "https://www.linkedin.com/in/minhaz-moin/", linkedInLabel: "Connect with Minhaz on LinkedIn", image: minhazMoinPhoto },
];

export default function Partners() {
  const reducedMotion = useReducedMotion() ?? false;
  const { data: sponsors } = useQuery({
    queryKey: ["sponsors"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("sponsors")
        .select("*")
        .eq("is_active", true)
        .order("display_order");
      if (error) throw error;
      return data;
    },
  });

  const premierSponsors = sponsors?.filter((s) => s.tier === "Premier") || [];
  const otherSponsors = sponsors?.filter((s) => s.tier !== "Premier") || [];

  return (
    <div className="min-h-screen flex flex-col grain-paper">
      <Navigation />

      {/* A) Hero */}
      <section className="relative bg-primary text-primary-foreground py-20 md:py-28 overflow-hidden" aria-labelledby="partners-hero-heading">
        <div className="absolute inset-0 opacity-10" aria-hidden>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 45%)", backgroundSize: "120px 120px" }} />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground/80 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.4 }}
            >
              Corporate Partnership & Sponsorship Prospectus
            </motion.p>
            <motion.h1
              id="partners-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 leading-tight"
              variants={fadeUpBlur(reducedMotion, { y: 20 })}
              initial="hidden"
              animate="visible"
              transition={{ duration: DURATIONS.normal, ease: EASING.easeOut }}
            >
              Partnering for Impact
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.15 }}
            >
              Corporate Partnership & Sponsorship Prospectus 2026
            </motion.p>
            <motion.p
              className="mt-6 text-base text-primary-foreground/85 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, delay: 0.25 }}
            >
              Engage with IIMAC to accelerate impact and sustainable growth. Our sponsorship program creates shared value for alumni, partners, and the broader community across Canada.
            </motion.p>
          </div>
        </div>
      </section>

      {/* B) About IIMAC + Community Snapshot */}
      <section className="py-20 md:py-28 bg-background border-y border-border/60" aria-labelledby="about-iimac-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="about-iimac-heading" title="About IIMAC" subtitle="Community Snapshot & Key Highlights" />
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn(reducedMotion, { duration: 0.4 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            IIM Alumni Canada (IIMAC) is the official alumni association for graduates from the Indian Institutes of Management (IIMs) residing in Canada. Our community represents accomplished professionals and leaders across technology, consulting, finance, manufacturing, and entrepreneurship.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={containerStagger(reducedMotion, { staggerChildren: 0.06, delayChildren: 0.1 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {COMMUNITY_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChildFadeUp(reducedMotion, 12)}
                className="flex gap-4 p-5 rounded-xl border border-border bg-card shadow-soft hover:shadow-card transition-shadow duration-300"
              >
                <item.icon className="h-8 w-8 shrink-0 text-primary" />
                <div>
                  <div className="font-semibold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* C) Mission + Vision */}
      <section className="py-20 md:py-28 bg-muted/20" aria-labelledby="mission-vision-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="mission-vision-heading" title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={staggerChildFadeUp(reducedMotion, 16)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-card transition-shadow"
            >
              <h3 className="chapter-title text-lg font-semibold tracking-widest text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To build a highly valued brand and community for alumni of all the Indian Institutes of Management living in Canada, facilitating professional and personal opportunities that help alumni meaningfully integrate and contribute to Canadian society.
              </p>
            </motion.div>
            <motion.div
              variants={staggerChildFadeUp(reducedMotion, 16)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-card transition-shadow"
            >
              <h3 className="chapter-title text-lg font-semibold tracking-widest text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a member-focused organisation which brings together alumni of all Indian Institutes of Management based in Canada by supporting the social and professional aspirations of our members.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* D) Sponsorship Overview + Partnership Tiers */}
      <section className="py-20 md:py-28 bg-background" aria-labelledby="tiers-heading">
        <div className="container mx-auto px-4">
          <SectionHeader
            id="tiers-heading"
            title="Sponsorship Overview"
            subtitle="Our Partnership Tiers. Each tier offers unique visibility, engagement, and collaboration benefits suited to your brand's goals."
          />
          <motion.p
            className="text-muted-foreground max-w-3xl mx-auto text-center mb-12"
            variants={fadeIn(reducedMotion)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Engaging with sponsors is essential for achieving our mission. Their support accelerates impact and ensures sustainable growth, creating <strong className="text-foreground">shared value</strong> for all stakeholders involved.
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
            variants={containerStagger(reducedMotion, { staggerChildren: 0.06, delayChildren: 0.08 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {PARTNERSHIP_TIERS.map((tier, i) => (
              <motion.div key={i} variants={staggerChildFadeUp(reducedMotion, 12)}>
                <Card className={`h-full border-2 ${tier.color} transition-all duration-300 hover:shadow-card hover:-translate-y-0.5`}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold">{tier.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <p className="text-sm font-medium opacity-90">{tier.amount}</p>
                    <div className="flex items-start gap-2 pt-2 border-t border-current/20">
                      <Eye className="h-4 w-4 shrink-0 mt-0.5 opacity-80" />
                      <p className="text-xs opacity-90">Includes brand visibility: logo on event banners, website, and gala backdrop.</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* E) Sponsorship Tier Benefits */}
      <section className="py-20 md:py-28 bg-muted/20" aria-labelledby="benefits-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="benefits-heading" title="Tier Benefits" subtitle="What each partnership tier includes." />
          <motion.div
            className="overflow-x-auto rounded-xl border border-border bg-card shadow-soft max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reducedMotion ? 0 : DURATIONS.normal }}
          >
            <div className="min-w-[640px] p-4 md:p-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold text-foreground">Benefit</th>
                    <th className="text-center py-3 px-2 font-semibold text-amber-900">Platinum</th>
                    <th className="text-center py-3 px-2 font-semibold text-amber-800">Gold</th>
                    <th className="text-center py-3 px-2 font-semibold text-slate-700">Silver</th>
                    <th className="text-center py-3 px-2 font-semibold text-orange-800">Bronze</th>
                    <th className="text-center py-3 px-2 font-semibold text-muted-foreground">Community</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Gala / Year-End Event</td><td className="text-center">Title + keynote</td><td className="text-center">Keynote + slot</td><td className="text-center">—</td><td className="text-center">—</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Co-Branded Corporate Event (100+)</td><td className="text-center">✓</td><td className="text-center">—</td><td className="text-center">—</td><td className="text-center">—</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Sponsor-Focused Webinar</td><td className="text-center">2/year</td><td className="text-center">1/year</td><td className="text-center">—</td><td className="text-center">—</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Social Media Promotions</td><td className="text-center">4/year</td><td className="text-center">2/year</td><td className="text-center">1/year</td><td className="text-center">—</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Goodies Basket (per event)</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Reserved Tables / Booths</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">—</td></tr>
                  <tr className="border-b border-border/80"><td className="py-2.5 px-2">Event Registration</td><td className="text-center">3 comp</td><td className="text-center">2 comp</td><td className="text-center">1 comp</td><td className="text-center">Paid</td><td className="text-center">—</td></tr>
                  <tr><td className="py-2.5 px-2">Website mention & Logo on collateral</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td><td className="text-center">✓</td></tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* F) Ideal Collaboration Areas */}
      <section className="py-20 md:py-28 bg-background" aria-labelledby="collab-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="collab-heading" title="Ideal Collaboration Areas" subtitle="Where partners can engage with our community." />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
            variants={containerStagger(reducedMotion, { staggerChildren: 0.04, delayChildren: 0.06 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {COLLABORATION_AREAS.map((area, i) => (
              <motion.div
                key={i}
                variants={staggerChildFadeUp(reducedMotion, 10)}
                className="flex flex-col items-center text-center p-5 rounded-xl border border-border bg-card shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300"
              >
                <area.icon className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">{area.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted by Leading Brands – logo grid */}
      <section className="py-20 md:py-28 bg-muted/20" aria-labelledby="trusted-brands-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="trusted-brands-heading" title="Trusted by Leading Brands" subtitle="Example partner brands across banking, mobility, real estate, telecom, and more." />
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
            variants={containerStagger(reducedMotion, { staggerChildren: 0.03, delayChildren: 0.05 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
          >
            {PARTNER_BRANDS_LOGO_GRID.map((brand, i) => (
              <motion.div key={brand.domain + i} variants={staggerChildFadeUp(reducedMotion, 8)}>
                <PartnerLogo name={brand.name} domain={brand.domain} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* G) Example Member Benefits + Sample Offers */}
      <section className="py-20 md:py-28 bg-background" aria-labelledby="benefits-offers-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="benefits-offers-heading" title="Example Member Benefits & Sample Offers" />
          <motion.div
            className="max-w-4xl mx-auto space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger(reducedMotion, { staggerChildren: 0.08 })}
          >
            <motion.div variants={staggerChildFadeUp(reducedMotion, 12)}>
              <h3 className="font-semibold text-foreground mb-3 underline decoration-primary/50">Partner brands can offer:</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1.5">
                <li>Exclusive discounts (e.g., 10–15% on services)</li>
                <li>Special promotions for IIMAC family members</li>
                <li>Early registration for limited offers/events</li>
                <li>Co-branded community initiatives</li>
              </ul>
            </motion.div>
            <motion.div variants={staggerChildFadeUp(reducedMotion, 12)}>
              <h3 className="font-semibold text-foreground mb-4 underline decoration-primary/50">Sample offers:</h3>
              <ul className="space-y-4">
                {SAMPLE_OFFERS_WITH_LOGO.map((offer, i) => (
                  <motion.li
                    key={offer.domain + i}
                    variants={staggerChildFadeUp(reducedMotion, 12)}
                    className="flex items-center gap-5 p-5 rounded-xl border border-border bg-card shadow-soft hover:shadow-card hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300 list-none"
                  >
                    <SampleOfferLogo domain={offer.domain} name={offer.name} />
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-foreground">{offer.brands}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{offer.description}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* H) Partnership Activation Opportunities */}
      <section className="py-20 md:py-28 bg-muted/20" aria-labelledby="activation-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="activation-heading" title="Partnership Activation Opportunities" subtitle="Ways to activate your partnership with IIMAC." />
          <div className="space-y-16 max-w-5xl mx-auto">
            {ACTIVATION_IMAGES.map((item, i) => (
              <ActivationCard key={item.title} item={item} index={i} reducedMotion={!!reducedMotion} />
            ))}
          </div>
        </div>
      </section>

      {/* I) Contact */}
      <section className="py-20 md:py-28 bg-muted/20" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="contact-heading" title="Contact Information" subtitle="Directors – Partnerships & Sponsorships" />
          <motion.div
            className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto"
            variants={containerStagger(reducedMotion, { staggerChildren: 0.1 })}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {DIRECTORS.map((dir, i) => (
              <motion.div
                key={i}
                variants={staggerChildFadeUp(reducedMotion, 16)}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card shadow-soft"
              >
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-4 overflow-hidden">
                  {"image" in dir && dir.image ? (
                    <img src={dir.image} alt="" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  ) : (
                    <Users className="h-10 w-10 text-muted-foreground" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground text-lg">{dir.name}</h3>
                <a href={`tel:${dir.phone.replace(/\D/g, "")}`} className="text-primary hover:underline mt-1 flex items-center gap-1">
                  <Phone className="h-4 w-4" /> {dir.phone}
                </a>
                <a href={dir.linkedIn} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mt-1 flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" /> {dir.linkedInLabel}
                </a>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            className="text-center text-muted-foreground mt-10 font-medium"
            variants={fadeIn(reducedMotion)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            You can also find us at{" "}
            <a href="https://www.iimalumnicanada.ca" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
              www.iimalumnicanada.ca
            </a>
          </motion.p>
        </div>
      </section>

      {/* Existing: Premier Sponsor */}
      {premierSponsors.length > 0 && (
        <section className="py-20 bg-background border-y border-border/60" aria-labelledby="premier-heading">
          <div className="container mx-auto px-4">
            <SectionHeader id="premier-heading" title="Premier Sponsor" />
            {premierSponsors.map((sponsor) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto rounded-2xl border-2 border-primary/30 bg-card p-8 md:p-12 shadow-soft"
              >
                <div className="flex flex-col items-center text-center">
                  <img src={sponsor.logo_url} alt={sponsor.sponsor_name} className="max-h-28 max-w-full object-contain mb-6" loading="lazy" decoding="async" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{sponsor.sponsor_name}</h3>
                  {sponsor.description && <p className="text-muted-foreground max-w-2xl mb-6">{sponsor.description}</p>}
                  {sponsor.website_url && (
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <a href={sponsor.website_url} target="_blank" rel="noopener noreferrer">
                        Visit Website <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Existing: Alumni Businesses & Supporters */}
      <section className="py-20 bg-muted/20" aria-labelledby="alumni-sponsors-heading">
        <div className="container mx-auto px-4">
          <SectionHeader id="alumni-sponsors-heading" title="Alumni Businesses & Supporters" subtitle="Celebrating the entrepreneurial spirit of our IIM alumni community." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {otherSponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="rounded-xl border border-border bg-card p-6 shadow-soft hover:shadow-card transition-shadow overflow-hidden group"
              >
                <div className="p-4 bg-muted/50 rounded-lg flex items-center justify-center h-36 mb-4">
                  <img
                    src={sponsor.logo_url}
                    alt={sponsor.sponsor_name}
                    className="max-h-20 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">{sponsor.tier}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{sponsor.sponsor_name}</h3>
                {sponsor.description && <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{sponsor.description}</p>}
                {sponsor.website_url && (
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href={sponsor.website_url} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground" aria-labelledby="cta-partners-heading">
        <div className="container mx-auto px-4 text-center">
          <h2 id="cta-partners-heading" className="text-3xl md:text-4xl font-bold mb-4">Partner With IIMAC</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join our mission to connect and empower IIM alumni across Canada.
          </p>
          <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
            <a href="mailto:info@iimac.ca">
              <Mail className="mr-2 h-5 w-5 inline" /> Become a Sponsor
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
