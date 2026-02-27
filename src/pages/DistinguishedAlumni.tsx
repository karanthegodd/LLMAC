import { useState } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Linkedin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AlumniProfile {
  name: string;
  title: string;
  company: string;
  iim: string;
  batchYear: string;
  bio: string;
  linkedin?: string;
  source?: string;
  category: string;
  industry: string;
  region: string;
  image?: string;
}

const DistinguishedAlumni = () => {
  const { toast } = useToast();
  const [selectedInstitute, setSelectedInstitute] = useState<string>("all");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");

  // Sample alumni data
  const alumniProfiles: AlumniProfile[] = [
    {
      name: "Deepak Parekh",
      title: "Chairman",
      company: "HDFC",
      iim: "IIM Ahmedabad",
      batchYear: "1978",
      bio: "Built India's largest housing finance company into a financial powerhouse.",
      linkedin: "https://linkedin.com",
      category: "Global Business Leader",
      industry: "Corporate Leadership",
      region: "India",
    },
    {
      name: "Indra Nooyi",
      title: "Former CEO",
      company: "PepsiCo",
      iim: "IIM Calcutta",
      batchYear: "1976",
      bio: "Led PepsiCo's transformation into a global powerhouse.",
      linkedin: "https://linkedin.com",
      category: "Hall of Fame",
      industry: "Corporate Leadership",
      region: "USA",
    },
    {
      name: "Raghuram Rajan",
      title: "Former RBI Governor",
      company: "Reserve Bank of India",
      iim: "IIM Ahmedabad",
      batchYear: "1985",
      bio: "Renowned economist and former central bank governor.",
      linkedin: "https://linkedin.com",
      category: "Hall of Fame",
      industry: "Public Service",
      region: "India",
    },
    {
      name: "Kunal Bahl",
      title: "Co-founder",
      company: "Snapdeal",
      iim: "IIM Ahmedabad",
      batchYear: "2007",
      bio: "Pioneer in Indian e-commerce innovation.",
      linkedin: "https://linkedin.com",
      category: "Entrepreneurship",
      industry: "Entrepreneurship",
      region: "India",
    },
    {
      name: "Leena Nair",
      title: "CEO",
      company: "Chanel",
      iim: "IIM Calcutta",
      batchYear: "1992",
      bio: "Leading global luxury brand transformation.",
      linkedin: "https://linkedin.com",
      category: "Hall of Fame",
      industry: "Corporate Leadership",
      region: "Europe",
    },
  ];

  const hallOfFameAlumni = alumniProfiles.filter(
    (alumni) => alumni.category === "Hall of Fame"
  );

  const filteredAlumni = alumniProfiles.filter((alumni) => {
    const instituteMatch = selectedInstitute === "all" || alumni.iim === selectedInstitute;
    const industryMatch = selectedIndustry === "all" || alumni.industry === selectedIndustry;
    const regionMatch = selectedRegion === "all" || alumni.region === selectedRegion;
    return instituteMatch && industryMatch && regionMatch;
  });

  const handleNominationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nomination Submitted",
      description: "Thank you for your nomination. We'll review it shortly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-background to-muted py-20 px-4">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }} />
          </div>
          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Distinguished Alumni of IIMs Across the World
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating leadership, innovation, and impact by IIM graduates who are shaping industries, institutions, and communities worldwide.
            </p>
          </div>
        </section>

        {/* Fun Fact Banner */}
        <section className="bg-gradient-primary py-4">
          <div className="container mx-auto text-center">
            <p className="text-primary-foreground font-medium">
              Did you know? Over 500 IIM alumni hold C-suite positions across 40+ countries.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Filter by:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div>
                <Label>Institute</Label>
                <Select value={selectedInstitute} onValueChange={setSelectedInstitute}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Institutes" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Institutes</SelectItem>
                    <SelectItem value="IIM Ahmedabad">IIM Ahmedabad</SelectItem>
                    <SelectItem value="IIM Bangalore">IIM Bangalore</SelectItem>
                    <SelectItem value="IIM Calcutta">IIM Calcutta</SelectItem>
                    <SelectItem value="IIM Lucknow">IIM Lucknow</SelectItem>
                    <SelectItem value="IIM Indore">IIM Indore</SelectItem>
                    <SelectItem value="IIM Kozhikode">IIM Kozhikode</SelectItem>
                    <SelectItem value="IIM Kharagpur">IIM Kharagpur</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Industry</Label>
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Industries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Corporate Leadership">Corporate Leadership</SelectItem>
                    <SelectItem value="Entrepreneurship">Entrepreneurship</SelectItem>
                    <SelectItem value="Academia">Academia</SelectItem>
                    <SelectItem value="Public Service">Public Service</SelectItem>
                    <SelectItem value="Social Impact">Social Impact</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Geography</Label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Regions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="Canada">Canada</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Asia-Pacific">Asia-Pacific</SelectItem>
                    <SelectItem value="Global">Global</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Hall of Fame Carousel */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                Hall of Fame: Icons of Impact
              </h2>
              <p className="text-muted-foreground">
                Recognizing the global leadership of IIM alumni shaping the world.
              </p>
            </div>
            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {hallOfFameAlumni.map((alumni, index) => (
                <Card key={index} className="min-w-[300px] border-2 border-primary/20 hover:shadow-elegant transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold">
                        {alumni.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{alumni.name}</h3>
                        <p className="text-sm text-muted-foreground">{alumni.title}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-2">{alumni.company}</p>
                    <Badge variant="secondary" className="mb-2">
                      {alumni.iim} ({alumni.batchYear})
                    </Badge>
                    <p className="text-sm text-muted-foreground">{alumni.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alumni Grid */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Distinguished Alumni</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAlumni.map((alumni, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:shadow-elegant transition-all group hover:-translate-y-1"
                  style={{ borderImage: 'linear-gradient(135deg, hsl(var(--primary)), transparent) 1' }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-3xl font-bold">
                        {alumni.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-primary">{alumni.name}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{alumni.title}</p>
                      </div>
                    </div>
                    <Badge className="mb-2 w-fit">{alumni.category}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold mb-2">{alumni.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {alumni.iim} (PGDM {alumni.batchYear})
                    </p>
                    <p className="text-sm mb-4">{alumni.bio}</p>
                    <div className="flex gap-2">
                      {alumni.linkedin && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                      {alumni.source && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={alumni.source} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Nomination CTA */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Know a Distinguished IIM Alumnus?</h2>
              <p className="text-muted-foreground">
                Help us expand our recognition of IIM excellence. Nominate an alumnus who exemplifies leadership, innovation, or social impact.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleNominationSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="alumniName">Name of Alumnus *</Label>
                    <Input id="alumniName" required />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="institute">Institute *</Label>
                      <Select required>
                        <SelectTrigger id="institute">
                          <SelectValue placeholder="Select IIM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="IIM Ahmedabad">IIM Ahmedabad</SelectItem>
                          <SelectItem value="IIM Bangalore">IIM Bangalore</SelectItem>
                          <SelectItem value="IIM Calcutta">IIM Calcutta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="batchYear">Batch Year *</Label>
                      <Input id="batchYear" type="number" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="linkedinUrl">LinkedIn / Website</Label>
                    <Input id="linkedinUrl" type="url" />
                  </div>
                  <div>
                    <Label htmlFor="reason">Reason for Nomination *</Label>
                    <Textarea 
                      id="reason" 
                      required 
                      placeholder="Please share why this alumnus deserves recognition..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="yourName">Your Name *</Label>
                      <Input id="yourName" required />
                    </div>
                    <div>
                      <Label htmlFor="yourEmail">Your Email *</Label>
                      <Input id="yourEmail" type="email" required />
                    </div>
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Nomination
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center text-sm text-muted-foreground italic">
              <p>
                <strong>Disclaimer:</strong> The profiles and achievements listed here are based on publicly available information (official biographies, news articles, or Wikipedia). IIMAC does not claim representation or endorsement of these individuals. Information is for recognition and inspiration purposes only.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DistinguishedAlumni;
