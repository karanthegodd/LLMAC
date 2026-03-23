import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import {
  Building2,
  Globe2,
  Heart,
  Monitor,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import logo from "@/assets/logo-iimac.png";

type Director = {
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
};

type FormerDirector = {
  name: string;
  tenure: string;
  image?: string;
  linkedin?: string;
};

const journey = [
  { year: "2010", title: "IIMAC Founded", desc: "Established in Toronto", icon: Building2 },
  { year: "2012", title: "National Expansion", desc: "Vancouver and Calgary chapters", icon: Globe2 },
  { year: "2015", title: "Mentorship Launch", desc: "Alumni mentorship program", icon: Heart },
  { year: "2018", title: "Community Outreach", desc: "Scholarship fund created", icon: Users },
  { year: "2020", title: "Digital Pivot", desc: "Virtual events and engagement", icon: Monitor },
  { year: "2023", title: "500+ Alumni", desc: "10 chapters nationwide", icon: TrendingUp },
];

const directors: Director[] = [
  { name: "Venkatesh Nagoji", role: "President", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Venkatesh-150x150-1.jpeg", linkedin: "https://www.linkedin.com/in/meticulous%20" },
  { name: "Bharat Godra", role: "Vice President", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Bharat-Godra.jpeg", linkedin: "https://www.linkedin.com/in/bharatgodra" },
  { name: "Shikha Kansal", role: "General Secretary and Membership", image: "https://www.iimalumnicanada.ca/wp-content/uploads/elementor/thumbs/PHOTO-2025-04-08-21-25-23-r46ewd50hmrssi3ad6vw8c6z8bqxo3jj5bdolq7fbw.jpg", linkedin: "https://www.linkedin.com/in/shikhakansal/" },
  { name: "Namarata Maheshwari", role: "Director, Finance and Treasurer", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Namrata-Maheshwari-1-150x150.jpg", linkedin: "https://www.linkedin.com/in/nam-maheshwari-6803b317" },
  { name: "Sai Krishna Chippa", role: "Director, Sponsorship and Partnership", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Sai-Krishna-Chippa_auto_x2_colored_toned-150x150-1.jpg", linkedin: "https://www.linkedin.com/in/sai-krishna-chippa-mba-b1b4308b/" },
  { name: "Grishma Parmar", role: "Director, Technology", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Grishma_Passport.jpg", linkedin: "https://www.linkedin.com/in/grishma-parmar-ca" },
  { name: "Nirlipta Dash", role: "Director, Social Media", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Nirlipta-150x150.jpg", linkedin: "https://www.linkedin.com/in/thisisrealnirliptadash" },
  { name: "Madhur Kanjolia", role: "Director, Events", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Madhur-150x150.jpg", linkedin: "https://www.linkedin.com/in/madhur-kanjolia" },
  { name: "Minhaz Moin", role: "Director, Sponsorship and Partnership", image: "https://www.iimalumnicanada.ca/wp-content/uploads/elementor/thumbs/Minhaz-scaled-qw3ie0b1aq0kzgo31w24137ahxt2lxk6payfit7wws.jpg", linkedin: "https://www.linkedin.com/in/minhaz-moin" },
  { name: "Juhi Parmar", role: "Director" },
  { name: "Akshay Raju", role: "Director" },
];

const formerDirectors: FormerDirector[] = [
  { name: "Rashmi Gupta", tenure: "Apr 2021 - Feb 2022", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Rashmi-Gupta-150x150.jpeg", linkedin: "https://www.linkedin.com/in/rashmi-gupta-67640a5" },
  { name: "Preeti Juneja", tenure: "Apr 2021 - Mar 2024", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Preeti-1-150x150.jpg", linkedin: "https://www.linkedin.com/in/preetijuneja" },
  { name: "Kenil Kotak", tenure: "Apr 2025 - Aug 2025", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2025/04/PHOTO-2025-04-08-21-26-35-150x150.jpg", linkedin: "https://www.linkedin.com/in/kenil-kotak/?originalSubdomain=ca" },
  { name: "Sudipti Katwal", tenure: "Apr 2021 - May 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Sudipti-150x150.jpeg", linkedin: "https://www.linkedin.com/in/sudiptikatwal" },
  { name: "Sudhir Nair", tenure: "Apr 2023 - Mar 2024", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Sudhir-Nair-150x150.jpeg", linkedin: "https://www.linkedin.com/in/sudhirnair72" },
  { name: "Manish Jain", tenure: "Apr 2023 - Oct 2025", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2025/07/HH73284279_Manish_Jain-Copy-150x150.jpg", linkedin: "https://www.linkedin.com/in/manishvjain" },
  { name: "Sudhakaran R Dass", tenure: "Apr 2021 - Jul 2023", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Sudhakaran-150x150.jpg", linkedin: "https://www.linkedin.com/in/sudhakaran" },
  { name: "Juhi Panchal", tenure: "Apr 2021 - Mar 2025", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Juhi-150x150-1.jpeg", linkedin: "https://www.linkedin.com/in/juhi-panchal" },
  { name: "Shiv Ram Krishna", tenure: "Apr 2021 - Mar 2024", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Shiv-150x150.jpg", linkedin: "https://www.linkedin.com/in/shivramkrishna" },
  { name: "Niraj Ghai", tenure: "Apr 2021 - Mar 2025", image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Niraj-Ghai_auto_x2_colored_toned-150x150-1.jpg", linkedin: "https://www.linkedin.com/in/nirajghai" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const journeyBubbleContent: Record<string, { title: string; body: string }> = {
  "2010": {
    title: "IIMAC Founded",
    body: "IIMAC was founded in Toronto by a group of pioneering IIM alumni committed to building a professional community in Canada.",
  },
  "2012": {
    title: "National Expansion",
    body: "Expanded operations to Vancouver and Calgary, establishing regional chapters to serve alumni across Western Canada.",
  },
  "2015": {
    title: "Mentorship Launch",
    body: "Launched mentorship initiatives connecting newly arrived alumni with experienced professionals to accelerate career growth.",
  },
  "2018": {
    title: "Community Outreach",
    body: "Established a scholarship fund and community outreach programs, deepening IIMAC's impact beyond the alumni network.",
  },
  "2020": {
    title: "Digital Pivot",
    body: "Pivoted to virtual events and digital engagement during the pandemic, maintaining community connections across distances.",
  },
  "2023": {
    title: "500+ Alumni",
    body: "Reached over 500 active members across 10 chapters, becoming Canada's premier IIM alumni organization.",
  },
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-12 md:py-14">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="uppercase text-sm tracking-[0.16em] text-muted-foreground mb-2">Who We Are</p>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold leading-tight mb-4">
                About IIM Alumni in <span className="text-primary">Canada</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Indian Institutes of Management (IIMs)</strong> are premier graduate schools of management and research in India. They primarily offer postgraduate, doctoral and executive education programs. Across all IIMs, the flagship program is the full-time Master of Business Administration (MBA). There are 21 IIMs established in India.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                <strong className="text-foreground">IIM Alumni in Canada (IIMAC)</strong> is a non-profit organization connecting and engaging a vibrant community of IIM alumni based in Canada. With over 520+ alumni, IIMAC aims to foster social, cultural and business relationships among the members, while elevating the IIM brand in Canada and making a positive impact on local communities.
              </p>
            </div>
            <img
              src="https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/IMG_9959-scaled.jpg"
              alt="IIMAC community group event"
              className="w-full rounded-xl border border-border object-cover h-[320px] md:h-[420px]"
              loading="lazy"
            />
          </div>
        </section>

        <section className="py-10 md:py-12 border-t border-b border-border/60">
          <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
            <div className="grid grid-cols-2 gap-3">
              <img src="https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/DSC04628.jpg" alt="IIMAC networking event" className="rounded-xl h-40 md:h-52 w-full object-cover" loading="lazy" />
              <img src="https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/IMG_9967-scaled.jpg" alt="IIMAC panel event" className="rounded-xl h-40 md:h-52 w-full object-cover" loading="lazy" />
              <img src="https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/IMG_9956-scaled.jpg" alt="IIMAC community gathering" className="rounded-xl h-40 md:h-52 w-full object-cover" loading="lazy" />
              <img src="https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/IMG_9962-scaled.jpg" alt="IIMAC social event" className="rounded-xl h-40 md:h-52 w-full object-cover" loading="lazy" />
            </div>
            <div>
              <p className="uppercase text-sm tracking-[0.16em] text-muted-foreground mb-2">Our Community</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
                A Thriving Alumni <span className="text-primary">Community</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Across cities and industries, IIM alumni in Canada come together to build meaningful professional relationships, support each other's growth, and create lasting impact through events, mentorship, and collaboration.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-8">
              <img src={logo} alt="IIMAC logo" className="h-9 w-auto mx-auto mb-3" />
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">Our Purpose</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="uppercase text-sm tracking-[0.14em] text-muted-foreground mb-2">Vision</p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">To build the most influential community of IIM alumni in Canada - shaping leadership, driving innovation, and creating lasting impact across industries and society.</p>
              </div>
              <div>
                <p className="uppercase text-sm tracking-[0.14em] text-muted-foreground mb-2">Mission</p>
                <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">To foster a vibrant and inclusive community of IIM alumni in Canada by enabling meaningful professional connections, supporting career growth, and creating opportunities to collaborate and contribute to society.</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/60 text-center">
              <p className="uppercase text-sm tracking-[0.14em] text-muted-foreground mb-2">Our Motto</p>
              <h3 className="font-playfair text-4xl font-semibold mb-8">Unite. Grow. Impact.</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <span className="inline-flex h-11 w-11 rounded-full bg-primary/10 items-center justify-center mb-3"><Users className="h-5 w-5 text-primary" /></span>
                  <p className="font-semibold text-lg">Unite</p>
                  <p className="text-base text-muted-foreground">Connecting IIM alumni across cities and industries.</p>
                </div>
                <div className="text-center">
                  <span className="inline-flex h-11 w-11 rounded-full bg-primary/10 items-center justify-center mb-3"><Target className="h-5 w-5 text-primary" /></span>
                  <p className="font-semibold text-lg">Grow</p>
                  <p className="text-base text-muted-foreground">Supporting mentorship and professional development.</p>
                </div>
                <div className="text-center">
                  <span className="inline-flex h-11 w-11 rounded-full bg-primary/10 items-center justify-center mb-3"><TrendingUp className="h-5 w-5 text-primary" /></span>
                  <p className="font-semibold text-lg">Impact</p>
                  <p className="text-base text-muted-foreground">Creating meaningful contributions to communities and society.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 border-t border-border/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold">Our Journey</h2>
              <p className="text-muted-foreground text-lg mt-2">A story of growth, community, and impact - unfolding across Canada since 2010.</p>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="pt-14">
                {journey.map((item) => {
                  const hasBubble = Boolean(journeyBubbleContent[item.year]);
                  const cardContent = (
                    <div className="text-center relative cursor-default border-t border-border/70 pt-2">
                      <p className="text-base font-semibold text-muted-foreground mb-3">{item.year}</p>
                      <span className="mx-auto h-14 w-14 rounded-full border border-border bg-background inline-flex items-center justify-center shadow-sm">
                        <item.icon className="h-5 w-5 text-primary" />
                      </span>
                      <p className="text-lg font-semibold mt-4 leading-tight">{item.title}</p>
                      <p className="text-base text-muted-foreground leading-tight mt-1">{item.desc}</p>
                    </div>
                  );

                  return (
                    <CarouselItem key={item.year} className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                      {hasBubble ? (
                        <HoverCard openDelay={120} closeDelay={90}>
                          <HoverCardTrigger asChild>
                            <div className="cursor-help">{cardContent}</div>
                          </HoverCardTrigger>
                          <HoverCardContent
                            side="top"
                            align="center"
                            sideOffset={14}
                            className="w-[420px] rounded-2xl border border-border bg-background p-5 shadow-xl"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <p className="text-xl font-bold text-primary">{item.year}</p>
                              <div className="h-px flex-1 bg-border" />
                            </div>
                            <p className="text-2xl font-semibold text-foreground leading-tight mb-2">
                              {journeyBubbleContent[item.year].title}
                            </p>
                            <p className="text-xl leading-relaxed text-muted-foreground">
                              {journeyBubbleContent[item.year].body}
                            </p>
                          </HoverCardContent>
                        </HoverCard>
                      ) : (
                        cardContent
                      )}
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-6" />
              <CarouselNext className="-right-4 md:-right-6" />
            </Carousel>
          </div>
        </section>

        <section id="leadership" className="py-12 md:py-14">
          <div className="container mx-auto px-4">
            <p className="text-center uppercase text-sm md:text-base tracking-[0.2em] text-muted-foreground mb-4">
              Our Leadership
            </p>
            <h2 className="text-center font-playfair text-6xl md:text-7xl font-bold mb-10 bg-gradient-primary bg-clip-text text-transparent">
              Board of Directors
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 max-w-6xl mx-auto">
              {directors.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedin || undefined}
                  target={member.linkedin ? "_blank" : undefined}
                  rel={member.linkedin ? "noopener noreferrer" : undefined}
                  className={`text-center block ${member.linkedin ? "cursor-pointer transition-transform hover:-translate-y-0.5" : "cursor-default"}`}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-28 w-28 rounded-full object-cover border border-border mx-auto mb-4" loading="lazy" />
                  ) : (
                    <div className="h-28 w-28 rounded-full bg-muted border border-border mx-auto mb-4 text-3xl font-semibold text-muted-foreground flex items-center justify-center">
                      {initials(member.name)}
                    </div>
                  )}
                  <p className="text-lg font-semibold leading-tight">{member.name}</p>
                  <p className="text-xs md:text-sm tracking-[0.06em] uppercase text-muted-foreground mt-1">{member.role}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 border-t border-border/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Past Leadership
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Honoring those who helped build IIMAC
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-8 gap-x-6 max-w-6xl mx-auto">
              {formerDirectors.map((member) => (
                <a
                  key={member.name}
                  href={member.linkedin || undefined}
                  target={member.linkedin ? "_blank" : undefined}
                  rel={member.linkedin ? "noopener noreferrer" : undefined}
                  className={`text-center block ${member.linkedin ? "cursor-pointer transition-transform hover:-translate-y-0.5" : "cursor-default"}`}
                >
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-20 w-20 rounded-full object-cover border border-border mx-auto mb-3" loading="lazy" />
                  ) : (
                    <div className="h-20 w-20 rounded-full bg-muted border border-border mx-auto mb-3 text-xl font-semibold text-muted-foreground flex items-center justify-center">
                      {initials(member.name)}
                    </div>
                  )}
                  <p className="text-base md:text-lg font-medium leading-tight">{member.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{member.tenure}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-14 bg-muted/40 border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center max-w-5xl mx-auto">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">500+</p>
                <p className="text-base text-muted-foreground">Alumni</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">10</p>
                <p className="text-base text-muted-foreground">Chapters Nationwide</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">20+</p>
                <p className="text-base text-muted-foreground">Annual Events</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">21</p>
                <p className="text-base text-muted-foreground">IIMs Connected</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Become a Member Today</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-7">
              Join a growing network of IIM alumni building meaningful professional relationships and lasting impact across Canada.
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90">Join IIMAC Now</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
