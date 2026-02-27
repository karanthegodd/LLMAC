import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RegistrationConfirmationRequest {
  name: string;
  email: string;
  registrationId: string;
  membershipType: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, registrationId, membershipType }: RegistrationConfirmationRequest = await req.json();

    // Log the email details to console for testing
    console.log("=== REGISTRATION CONFIRMATION EMAIL ===");
    console.log("To:", email);
    console.log("Subject: Thank You for Registering with IIM Alumni Canada");
    console.log("---");
    console.log(`Dear ${name},`);
    console.log("");
    console.log("Thank you for your interest in joining IIM Alumni Canada!");
    console.log("");
    console.log(`Your registration has been received successfully. Here are your registration details:`);
    console.log(`- Application Reference: ${registrationId}`);
    console.log(`- Membership Type: ${membershipType}`);
    console.log("");
    console.log("What happens next?");
    console.log("1. Our team will review your application within 2-3 business days");
    console.log("2. You will receive an email notification once your application is reviewed");
    console.log("3. Upon approval, you will gain access to all member benefits");
    console.log("");
    console.log("If you have any questions, please feel free to reach out:");
    console.log("Email: info@iimalumnicanada.org");
    console.log("Phone: +1-XXX-XXX-XXXX");
    console.log("");
    console.log("Best regards,");
    console.log("IIM Alumni Canada Team");
    console.log("=======================================");

    return new Response(
      JSON.stringify({ success: true, message: "Email logged to console" }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-registration-confirmation function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
