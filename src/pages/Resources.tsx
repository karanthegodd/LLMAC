import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Briefcase, FileText, HelpCircle } from "lucide-react";

/**
 * Resources page - Placeholder per deliverables scope.
 * Phase 2: Member directory, job board, career resources, blog/news.
 */
export default function Resources() {
  const comingSoonItems = [
    { icon: Briefcase, title: "Career & Jobs", description: "Find mentors and job opportunities. Coming in Phase 2." },
    { icon: BookOpen, title: "Member Directory", description: "Search and connect with fellow alumni. Coming in Phase 2." },
    { icon: FileText, title: "Blog & News", description: "Updates, stories, and thought leadership. Coming in Phase 2." },
    { icon: HelpCircle, title: "FAQs & Guides", description: "Getting started guides and member resources." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="relative bg-gradient-hero py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Tools, guides, and opportunities for IIM alumni in Canada. More resources coming soon.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {comingSoonItems.map((item, index) => (
                <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-12 text-center space-y-4">
              <p className="text-muted-foreground">
                In the meantime, explore our{" "}
                <Link to="/events" className="text-primary hover:underline">Events</Link>,{" "}
                <Link to="/membership" className="text-primary hover:underline">Membership benefits</Link>, and{" "}
                <Link to="/contact" className="text-primary hover:underline">Contact us</Link> for support.
              </p>
              <Link to="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join IIMAC
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
