import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Award, Calendar, Network } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            IIM Alumni Canada
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Be part of a growing network of IIM alumni across Canada. 
            Connect, collaborate, and contribute to a vibrant community.
          </p>
          <div className="flex justify-center">
            <Link to="/register">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8"
              >
                Join IIMAC Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Why Join IIMAC?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Network className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with fellow IIM alumni across major Canadian cities
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Join a vibrant community of professionals and thought leaders
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Events</h3>
                <p className="text-muted-foreground">
                  Exclusive access to professional and social events
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth</h3>
                <p className="text-muted-foreground">
                  Mentorship opportunities and professional development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Join?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Choose from Annual (CAD $30) or Lifetime (CAD $250) membership. 
            Start your journey with IIMAC today.
          </p>
          <Link to="/register">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
            >
              Register Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">© 2025 IIM Alumni Canada. All rights reserved.</p>
          <p className="text-sm opacity-80">
            Questions? Contact us at{" "}
            <a href="mailto:membership@iimacanada.org" className="underline">
              membership@iimacanada.org
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
