import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { PersonalInfoSection } from "@/components/registration/PersonalInfoSection";
import { ProfessionalSection } from "@/components/registration/ProfessionalSection";
import { InterestsSection } from "@/components/registration/InterestsSection";
import { MembershipSection } from "@/components/registration/MembershipSection";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  city: z.string().min(1, "Please select a city"),
  customCity: z.string().optional(),
  iimInstitute: z.string().min(1, "Please select your IIM institute"),
  graduationYear: z.number().min(1980).max(2030),
  profession: z.string().min(1, "Profession is required"),
  company: z.string().min(1, "Company name is required"),
  linkedIn: z.string().url().optional().or(z.literal("")),
  interests: z.array(z.string()).min(1, "Please select at least one interest"),
  membershipType: z.enum(["Annual", "Lifetime"]),
  transactionId: z.string().min(5, "Please enter your transaction ID"),
}).refine((data) => {
  if (data.city === "Others") {
    return data.customCity && data.customCity.length > 0;
  }
  return true;
}, {
  message: "Please enter your city name",
  path: ["customCity"],
});

type FormData = z.infer<typeof formSchema>;

const Register = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      customCity: "",
      iimInstitute: "",
      graduationYear: new Date().getFullYear(),
      profession: "",
      company: "",
      linkedIn: "",
      interests: [],
      membershipType: "Annual",
      transactionId: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { data: registration, error } = await supabase.from("registrations").insert({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        city: data.city,
        custom_city: data.customCity,
        iim_institute: data.iimInstitute,
        graduation_year: data.graduationYear,
        profession: data.profession,
        company: data.company,
        linkedin: data.linkedIn,
        interests: data.interests,
        membership_type: data.membershipType,
        transaction_id: data.transactionId,
      }).select().single();

      if (error) throw error;
      
      // Send registration confirmation email
      try {
        await supabase.functions.invoke("send-registration-confirmation", {
          body: {
            name: data.fullName,
            email: data.email,
            registrationId: registration.id,
            membershipType: data.membershipType,
          },
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't block the user flow if email fails
      }

      toast.success("✅ Registration submitted successfully!");
      
      // Redirect to confirmation page with registration ID
      navigate(`/registration-confirmation?id=${registration.id}`);
    } catch (error: any) {
      console.error("Registration error:", error);
      
      // Handle duplicate entry errors
      if (error?.code === '23505') {
        if (error?.message?.includes('email')) {
          toast.error("❌ This email is already registered. Please use a different email or contact support.");
        } else if (error?.message?.includes('phone')) {
          toast.error("❌ This phone number is already registered. Please use a different number or contact support.");
        } else {
          toast.error("❌ This email or phone number is already registered.");
        }
      } else {
        toast.error("❌ Something went wrong. Please try again or contact support.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
        <div className="container max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Join IIM Alumni Canada (IIMAC)
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Be part of a growing network of IIM alumni in Canada. Connect, collaborate, 
            and contribute to a vibrant community.
          </p>
        </header>

        {/* Form */}
        <div className="bg-card rounded-2xl shadow-lg border border-border p-6 md:p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <PersonalInfoSection form={form} />
              <ProfessionalSection form={form} />
              <InterestsSection form={form} />
              <MembershipSection form={form} />

              <div className="pt-6 border-t">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto md:min-w-[200px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Register;
