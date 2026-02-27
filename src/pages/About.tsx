import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-iimac.png";

export default function About() {
  const values = [
    {
      icon: Users,
      title: "Community",
      description: "Building a strong, supportive network of IIM alumni across Canada.",
    },
    {
      icon: Heart,
      title: "Collaboration",
      description: "Fostering partnerships and knowledge sharing among members.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Upholding the IIM legacy of academic and professional excellence.",
    },
    {
      icon: Eye,
      title: "Inclusivity",
      description: "Creating an welcoming environment for all alumni and their families.",
    },
  ];

  const timeline = [
    { year: "2010", event: "IIMAC founded in Toronto by pioneering alumni" },
    { year: "2012", event: "Expanded to Vancouver and Calgary chapters" },
    { year: "2015", event: "Launched mentorship program for new immigrants" },
    { year: "2018", event: "Established scholarship fund for deserving students" },
    { year: "2020", event: "Pivoted to virtual events during pandemic" },
    { year: "2023", event: "Reached 500+ active members across 10 chapters" },
  ];

  const iims = [
    { name: "Indian Institute of Management Calcutta (IIM C)", url: "https://www.iimcal.ac.in/", year: "1961" },
    { name: "Indian Institute of Management Ahmedabad (IIM A)", url: "https://www.iima.ac.in/", year: "1961" },
    { name: "Indian Institute of Management Bangalore (IIM B)", url: "https://www.iimb.ac.in/", year: "1973" },
    { name: "Indian Institute of Management Lucknow (IIM L)", url: "http://www.iiml.ac.in/", year: "1984" },
    { name: "Indian Institute of Management Indore (IIM I)", url: "https://www.iimidr.ac.in/", year: "1996" },
    { name: "Institute of Management Kozhikode (IIM K)", url: "https://www.iimk.ac.in/", year: "1996" },
    { name: "Indian Institute of Management Shillong (IIM S)", url: "https://www.iimshillong.ac.in/", year: "2007" },
    { name: "Indian Institute of Management Rohtak (IIM R)", url: "https://www.iimrohtak.ac.in/", year: "2010" },
    { name: "Indian Institute of Management Ranchi (IIM Ranchi)", url: "https://iimranchi.ac.in/", year: "2010" },
    { name: "Indian Institute of Management Raipur (IIM Raipur)", url: "https://www.iimraipur.ac.in/", year: "2010" },
    { name: "Indian Institute of Management Udaipur (IIM U)", url: "https://www.iimu.ac.in/", year: "2011" },
    { name: "Indian Institute of Management Kashipur (IIM Kashipur)", url: "http://www.iimkashipur.ac.in/", year: "2011" },
    { name: "Indian Institute of Management Tiruchirappalli (IIMT)", url: "https://www.iimtrichy.ac.in/", year: "2011" },
    { name: "Indian Institute of Management Sambalpur (IIM Sambalpur)", url: "https://www.iimsambalpur.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Visakhapatnam (IIM V)", url: "https://www.iimv.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Bodh Gaya (IIM BG)", url: "http://iimbg.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Amritsar (IIM Amritsar)", url: "https://iimamritsar.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Nagpur (IIM N)", url: "https://www.iimnagpur.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Sirmaur (IIM Sirmaur)", url: "https://www.iimsirmaur.ac.in/", year: "2015" },
    { name: "Indian Institute of Management Jammu (IIM J)", url: "http://www.iimj.ac.in/", year: "2016" },
    { name: "Indian Institute of Management Mumbai (IIM Mumbai)", url: "https://iimmumbai.ac.in/", year: "2023" },
  ];

  const leadership = [
    { 
      name: "Venkatesh Nagoji", 
      role: "President", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Venkatesh-150x150-1.jpeg",
      linkedin: "https://www.linkedin.com/in/meticulous%20"
    },
    { 
      name: "Bharat Godra", 
      role: "Vice President", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Bharat-Godra.jpeg",
      linkedin: "https://www.linkedin.com/in/bharatgodra"
    },
    { 
      name: "Shikha Kansal", 
      role: "General Secretary & Membership Engagement", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/elementor/thumbs/PHOTO-2025-04-08-21-25-23-r46ewd50hmrssi3ad6vw8c6z8bqxo3jj5bdolq7fbw.jpg",
      linkedin: "https://www.linkedin.com/in/shikhakansal/"
    },
    { 
      name: "Namarata Maheshwari", 
      role: "Director, Finance & Treasurer", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Namrata-Maheshwari-1-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/nam-maheshwari-6803b317"
    },
    { 
      name: "Sai Krishna Chippa", 
      role: "Director, Sponsorship & Partnership", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Sai-Krishna-Chippa_auto_x2_colored_toned-150x150-1.jpg",
      linkedin: "https://www.linkedin.com/in/sai-krishna-chippa-mba-b1b4308b/"
    },
    { 
      name: "Grishma Parmar", 
      role: "Director, Technology", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Grishma_Passport.jpg",
      linkedin: "https://www.linkedin.com/in/grishma-parmar-ca"
    },
    { 
      name: "Nirlipta Dash", 
      role: "Director, Social Media", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Nirlipta-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/thisisrealnirliptadash"
    },
    { 
      name: "Madhur Kanjolia", 
      role: "Director, Events", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Madhur-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/madhur-kanjolia"
    },
    { 
      name: "Minhaz Moin", 
      role: "Director, Sponsorship & Partnership", 
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/elementor/thumbs/Minhaz-scaled-qw3ie0b1aq0kzgo31w24137ahxt2lxk6payfit7wws.jpg",
      linkedin: "https://www.linkedin.com/in/minhaz-moin"
    },
  ];

  const pastLeadership = [
    { 
      name: "Rashmi Gupta", 
      tenure: "April 2021 - February 2022",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Rashmi-Gupta-150x150.jpeg",
      linkedin: "https://www.linkedin.com/in/rashmi-gupta-67640a5"
    },
    { 
      name: "Preeti Juneja", 
      tenure: "Apr 2021 - Mar 2024",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Preeti-1-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/preetijuneja"
    },
    { 
      name: "Kenil Kotak", 
      tenure: "Apr 2025 - August 2025",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2025/04/PHOTO-2025-04-08-21-26-35-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/kenil-kotak/?originalSubdomain=ca"
    },
    { 
      name: "Sudipti Katwal", 
      tenure: "April 2021 - May 2023",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Sudipti-150x150.jpeg",
      linkedin: "https://www.linkedin.com/in/sudiptikatwal"
    },
    { 
      name: "Sudhir Nair", 
      tenure: "Apr 2023 - Mar 2024",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2023/08/Sudhir-Nair-150x150.jpeg",
      linkedin: "https://www.linkedin.com/in/sudhirnair72"
    },
    { 
      name: "Manish Jain", 
      tenure: "Apr 2023 - Oct 2025",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2025/07/HH73284279_Manish_Jain-Copy-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/manishvjain"
    },
    { 
      name: "Sudhakaran R Dass", 
      tenure: "April 2021 - July 2023",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Sudhakaran-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/sudhakaran"
    },
    { 
      name: "Juhi Panchal", 
      tenure: "Apr 2021 - Mar 2025",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Juhi-150x150-1.jpeg",
      linkedin: "https://www.linkedin.com/in/juhi-panchal"
    },
    { 
      name: "Shiv Ram Krishna", 
      tenure: "April 2021 - Mar 2024",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2021/11/Shiv-150x150.jpg",
      linkedin: "https://www.linkedin.com/in/shivramkrishna"
    },
    { 
      name: "Niraj Ghai", 
      tenure: "Apr 2021 - Mar 2025",
      image: "https://www.iimalumnicanada.ca/wp-content/uploads/2024/10/Niraj-Ghai_auto_x2_colored_toned-150x150-1.jpg",
      linkedin: "https://www.linkedin.com/in/nirajghai"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                About <span className="bg-gradient-primary bg-clip-text text-transparent">IIMAC</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>Indian Institutes of Management (IIMs)</strong> are premier graduate schools of management and research in India. 
                They primarily offer postgraduate, doctoral and executive education programs. Across all IIMs, the flagship program is 
                the full-time Master of Business Administration (MBA). There are 21 IIMs established in India.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>IIM Alumni in Canada (IIMAC)</strong> is a non-profit organization connecting and engaging a vibrant community 
                of IIM alumni based in Canada. With over 520+ alumni, IIMAC aims to foster social, cultural & business relationships 
                among the members, while elevating the IIM brand in Canada and making a positive impact on the local communities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-2 hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To build a highly valued brand and community for alumni of all Indian Institutes of Management living in Canada, facilitating professional and personal opportunities that help alumni meaningfully integrate and contribute to Canadian society.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-elegant transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    To be a member-focused organization which brings together alumni of all Indian Institutes of Management based in Canada by supporting the social and professional aspirations of the members.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at IIMAC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-2 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-gradient-primary mx-auto flex items-center justify-center mb-4">
                      <value.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* IIMs List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Indian Institutes of Management
              </h2>
              <p className="text-lg text-muted-foreground">
                21 premier management institutes across India
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-4 px-4 font-bold text-foreground">Institute</th>
                          <th className="text-left py-4 px-4 font-bold text-foreground">Year of Establishment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {iims.map((iim, index) => (
                          <tr key={index} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                            <td className="py-4 px-4">
                              <a 
                                href={iim.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                {iim.name}
                              </a>
                            </td>
                            <td className="py-4 px-4 text-muted-foreground">{iim.year}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Building a community of excellence since 2010
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                        {item.year}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <Card className="border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                          <p className="text-foreground">{item.event}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="leadership" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Board of Directors
              </h2>
              <p className="text-lg text-muted-foreground">
                Meet the dedicated individuals leading IIMAC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center border-2 hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{leader.name}</CardTitle>
                    <CardDescription className="font-semibold text-primary text-sm uppercase">
                      {leader.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Leadership */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Board of Directors - Previous
              </h2>
              <p className="text-lg text-muted-foreground">
                Honoring our past leaders who helped build IIMAC
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {pastLeadership.map((leader, index) => (
                <Card key={index} className="text-center border-2 hover:shadow-elegant transition-shadow">
                  <CardHeader>
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-primary/20">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-lg">{leader.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {leader.tenure}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center text-sm text-primary hover:underline"
                    >
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Become a Member Today
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hundreds of IIM alumni making a difference across Canada
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-elegant">
                  Join IIMAC Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
