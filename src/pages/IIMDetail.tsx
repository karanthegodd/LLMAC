import { useParams, Link } from "react-router-dom";
import { getIIMBySlug } from "@/data/iims";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function IIMDetail() {
  const { slug } = useParams<{ slug: string }>();
  const iim = slug ? getIIMBySlug(slug) : null;

  if (!iim) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">IIM not found</h1>
          <Link to="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary mb-6 inline-block">
            ← Back to Home
          </Link>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <img
                  src={"logo" in iim && iim.logo ? iim.logo : `https://www.google.com/s2/favicons?domain=${iim.domain}&sz=48`}
                  alt=""
                  className="h-12 w-12 object-contain"
                />
                <div>
                  <CardTitle className="text-2xl">{iim.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Add relevant info about this IIM
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="overview">Overview / Description</Label>
                <Textarea
                  id="overview"
                  placeholder="Enter a brief overview or description of this IIM..."
                  className="min-h-[120px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. Ahmedabad, Gujarat" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Official Website</Label>
                <Input id="website" type="url" defaultValue={iim.url} placeholder="https://..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Programs, rankings, notable alumni, or any other relevant info..."
                  className="min-h-[100px]"
                />
              </div>
              <Button>Save / Submit</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
