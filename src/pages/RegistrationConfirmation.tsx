import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CheckCircle2, Clock, Mail, Phone } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const RegistrationConfirmation = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [registrationId, setRegistrationId] = useState("");

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) {
      navigate("/register");
      return;
    }
    setRegistrationId(id);
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Success Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Registration Successful!
              </h1>
              <p className="text-xl text-muted-foreground">
                Thank you for applying to join IIM Alumni Canada
              </p>
            </div>

            {/* Application Details Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Your Application Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">
                    Application Reference Number
                  </p>
                  <p className="text-2xl font-mono font-bold text-primary">
                    {registrationId}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Save this number to track your application status
                  </p>
                </div>

                <Separator />

                {/* Next Steps */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    What Happens Next
                  </h3>
                  <ol className="space-y-4">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Application Review</p>
                        <p className="text-sm text-muted-foreground">
                          Our team will review your application within 3-5 business days
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        2
                      </span>
                      <div>
                        <p className="font-medium">Payment Verification</p>
                        <p className="text-sm text-muted-foreground">
                          We'll verify your payment and transaction details
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        3
                      </span>
                      <div>
                        <p className="font-medium">Approval & Welcome</p>
                        <p className="text-sm text-muted-foreground">
                          You'll receive a confirmation email with your membership details and community access
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Questions or Concerns?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you have any questions about your application or need assistance, please don't hesitate to reach out:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href="mailto:membership@iimalumnicanada.com" className="text-primary hover:underline">
                      membership@iimalumnicanada.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="text-foreground">+1 (XXX) XXX-XXXX</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Please include your application reference number when contacting us
                </p>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate("/")} size="lg">
                Return to Home
              </Button>
              <Button onClick={() => navigate("/membership")} variant="outline" size="lg">
                Learn More About Benefits
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegistrationConfirmation;
