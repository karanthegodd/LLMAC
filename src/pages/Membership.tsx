import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, TrendingUp, Briefcase, Plane, Heart, BookOpen, MapPin, ShoppingBag, MessageCircle, CreditCard, UserCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Membership() {
  const whatsappCommunities = [
    { name: "IIMAC Marketplace", icon: ShoppingBag, description: "Buy, sell & exchange" },
    { name: "Finance & Investment", icon: TrendingUp, description: "Financial guidance" },
    { name: "Jobs & Referrals", icon: Briefcase, description: "Career opportunities" },
    { name: "Travel & Visa", icon: Plane, description: "Immigration support" },
    { name: "Activities & Interests", icon: Heart, description: "Hobbies & events" },
    { name: "Entrepreneurs", icon: Sparkles, description: "Startup ecosystem" },
    { name: "Book Club", icon: BookOpen, description: "Reading community" },
    { name: "City Chapters", icon: MapPin, description: "Local connections" },
  ];

  const coreBenefits = [
    { icon: Users, title: "Networking Events", description: "Exclusive events & member directory" },
    { icon: TrendingUp, title: "Career Growth", description: "Mentorship & job opportunities" },
    { icon: Heart, title: "Community", description: "Cultural celebrations & social events" },
    { icon: Briefcase, title: "Professional Development", description: "Workshops & seminars" },
  ];

  const comparisonFeatures = [
    { feature: "Networking Events", annual: true, lifetime: true },
    { feature: "Member Directory", annual: true, lifetime: true },
    { feature: "WhatsApp Communities", annual: true, lifetime: true },
    { feature: "Event Discounts", annual: true, lifetime: true },
    { feature: "Career Mentorship", annual: true, lifetime: true },
    { feature: "Premium Badge", annual: false, lifetime: true },
    { feature: "Website Recognition", annual: false, lifetime: true },
    { feature: "Priority Registration", annual: false, lifetime: true },
    { feature: "Voting Rights", annual: false, lifetime: true },
    { feature: "Validity", annual: "1 Year", lifetime: "10 Years" },
  ];

  const testimonials = [
    {
      name: "Amit Desai",
      institute: "IIM Calcutta '17",
      type: "Lifetime",
      quote: "Best decision for my career in Canada.",
    },
    {
      name: "Neha Reddy",
      institute: "IIM Bangalore '19",
      type: "Annual",
      quote: "Smooth transition with great mentorship.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Join the <span className="bg-gradient-primary bg-clip-text text-transparent">IIMAC Community</span>
              </h1>
              <p className="text-xl md:text-2xl font-semibold text-foreground">
                Connect. Collaborate. Contribute.
              </p>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Be part of Canada's premier IIM alumni network with 520+ members across major cities, fostering lifelong connections and creating opportunities for professional growth and community impact.
              </p>
            </div>
          </div>
        </section>

        {/* WhatsApp Community Section - Featured First */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-background">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-accent/20 rounded-full">
                      <MessageCircle className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">
                    Be a part of the exclusive <span className="text-accent">WhatsApp Communities</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {whatsappCommunities.map((community, index) => {
                      const Icon = community.icon;
                      return (
                        <div key={index} className="text-center p-4 rounded-lg bg-background hover:shadow-elegant transition-all border border-border">
                          <Icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                          <h4 className="font-semibold text-sm text-foreground mb-1">{community.name}</h4>
                          <p className="text-xs text-muted-foreground">{community.description}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/register">
                        <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          <MessageCircle className="h-5 w-5 mr-2" />
                          Get Access Now
                        </Button>
                      </Link>
                      <a href="#membership-plans">
                        <Button size="lg" variant="outline">
                          Compare Plans
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Unite, Grow, Impact Banner */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Unite */}
                <Card className="border-2 hover:shadow-elegant hover:border-primary/50 transition-all group hover-glow-blue">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-4 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-all">
                      <Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      <span className="group-hover:text-primary transition-colors">Unite</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Join a network of IIM alumni across Canada.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Connect with 520+ alumni through exclusive networking events, regional chapters, and vibrant WhatsApp communities.
                    </p>
                  </CardContent>
                </Card>

                {/* Grow */}
                <Card className="border-2 hover:shadow-elegant hover:border-secondary/50 transition-all group hover-glow-gold">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-4 bg-secondary/10 rounded-full w-fit mb-4 group-hover:bg-secondary/20 transition-all">
                      <TrendingUp className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      <span className="group-hover:text-secondary transition-colors">Grow</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Access opportunities, mentorship, and leadership programs.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Advance your career through mentorship, job referrals, professional workshops, and continuous learning opportunities.
                    </p>
                  </CardContent>
                </Card>

                {/* Impact */}
                <Card className="border-2 hover:shadow-elegant hover:border-accent/50 transition-all group hover-glow-maroon">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto p-4 bg-accent/10 rounded-full w-fit mb-4 group-hover:bg-accent/20 transition-all">
                      <Heart className="h-10 w-10 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="text-2xl mb-4">
                      <span className="group-hover:text-accent transition-colors">Impact</span>
                    </CardTitle>
                    <CardDescription className="text-base">
                      Contribute to professional, social, and community causes.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Make a difference through community service, cultural celebrations, and initiatives that create lasting positive change.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Membership Plans */}
        <section id="membership-plans" className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Choose Your Membership
              </h2>
              <p className="text-muted-foreground">Two plans. Lifetime value.</p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Annual Membership */}
              <Card className="relative hover:shadow-lg transition-shadow border-2">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <UserCheck className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Annual Membership</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4">
                    $30<span className="text-lg text-muted-foreground">/year</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Access to all 8 WhatsApp communities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Monthly networking events</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Career support & job referrals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Alumni directory access</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Valid for 1 year</span>
                    </li>
                  </ul>
                  <Link to="/register" className="block">
                    <Button size="lg" className="w-full">
                      Join Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Lifetime Membership */}
              <Card className="relative hover:shadow-lg transition-shadow border-2 border-secondary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 bg-secondary text-secondary-foreground text-sm font-semibold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Best Value
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Sparkles className="w-10 h-10 text-secondary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Lifetime Membership</CardTitle>
                  <div className="text-4xl font-bold text-secondary mb-4">
                    $250<span className="text-lg text-muted-foreground"> once</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>All Annual benefits included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Premium badge & website recognition</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Priority event registration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Voting rights in alumni decisions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span>Valid for 10 years</span>
                    </li>
                  </ul>
                  <Link to="/register" className="block">
                    <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                      Join Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 3-Step Payment Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Getting Started
                </h2>
                <p className="text-muted-foreground">Simple 3-step process</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-2 text-center hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                      <UserCheck className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">1. Choose Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Select Annual or Lifetime membership</p>
                  </CardContent>
                </Card>

                <Card className="border-2 text-center hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-accent/10 rounded-full w-fit mb-3">
                      <CreditCard className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-lg">2. Pay via Interac</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Transfer to <span className="font-semibold text-accent-foreground">treasurer@iimacanada.org</span>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 text-center hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-secondary/10 rounded-full w-fit mb-3">
                      <Check className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-lg">3. Complete Form</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Submit registration with transaction ID</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Core Benefits - Icon-Driven */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Member Benefits
                </h2>
                <p className="text-muted-foreground">Everything you need to thrive in Canada</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coreBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="border-2 hover:shadow-elegant transition-all text-center">
                      <CardHeader className="pb-4">
                        <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-lg">{benefit.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - Condensed */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Trusted by Alumni
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.institute}</div>
                        </div>
                        <div className="ml-auto">
                          <div className="px-2 py-1 bg-accent/20 rounded text-xs font-medium text-accent-foreground">
                            {testimonial.type}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"{testimonial.quote}"</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Ready to Become a part of IIMAC Family?
              </h2>
              <p className="text-lg text-muted-foreground">
                Take the first step towards lifelong connections and opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link to="/register">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    Become a Member
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Have Questions?
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
