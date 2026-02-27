import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface RejectionNotificationRequest {
  name: string;
  email: string;
  reason?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, reason }: RejectionNotificationRequest = await req.json();

    // Log the email details to console for testing
    console.log("=== APPLICATION REJECTION EMAIL ===");
    console.log("To:", email);
    console.log("Subject: Update on Your IIM Alumni Canada Application");
    console.log("---");
    console.log(`Dear ${name},`);
    console.log("");
    console.log("Thank you for your interest in joining IIM Alumni Canada.");
    console.log("");
    console.log("After careful review, we regret to inform you that we are unable to approve your membership application at this time.");
    console.log("");
    if (reason) {
      console.log(`Reason: ${reason}`);
      console.log("");
    }
    console.log("We appreciate your understanding and encourage you to reach out if you have any questions or if you would like to discuss your application further.");
    console.log("");
    console.log("You may also reapply in the future if your circumstances change.");
    console.log("");
    console.log("Contact us:");
    console.log("Email: info@iimalumnicanada.org");
    console.log("Phone: +1-XXX-XXX-XXXX");
    console.log("");
    console.log("Best regards,");
    console.log("IIM Alumni Canada Team");
    console.log("===================================");

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
    console.error("Error in send-rejection-notification function:", error);
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
