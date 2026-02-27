import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ApprovalNotificationRequest {
  name: string;
  email: string;
  memberId: string;
  membershipType: string;
  membershipStartDate: string;
  membershipEndDate: string | null;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      name, 
      email, 
      memberId, 
      membershipType, 
      membershipStartDate,
      membershipEndDate 
    }: ApprovalNotificationRequest = await req.json();

    // Log the email details to console for testing
    console.log("=== APPLICATION APPROVAL EMAIL ===");
    console.log("To:", email);
    console.log("Subject: Welcome to IIM Alumni Canada - Application Approved!");
    console.log("---");
    console.log(`Dear ${name},`);
    console.log("");
    console.log("Congratulations! We are delighted to inform you that your application has been approved.");
    console.log("");
    console.log(`Your Membership Details:`);
    console.log(`- Member ID: ${memberId}`);
    console.log(`- Membership Type: ${membershipType}`);
    console.log(`- Start Date: ${new Date(membershipStartDate).toLocaleDateString()}`);
    if (membershipEndDate) {
      console.log(`- Valid Until: ${new Date(membershipEndDate).toLocaleDateString()}`);
    } else {
      console.log(`- Valid Until: Lifetime`);
    }
    console.log("");
    console.log("As a member, you now have access to:");
    console.log("- Exclusive networking events");
    console.log("- Professional development workshops");
    console.log("- Alumni directory");
    console.log("- Career resources and mentorship programs");
    console.log("");
    console.log("We look forward to connecting with you at our upcoming events!");
    console.log("");
    console.log("If you have any questions, please contact us:");
    console.log("Email: info@iimalumnicanada.org");
    console.log("Phone: +1-XXX-XXX-XXXX");
    console.log("");
    console.log("Warm regards,");
    console.log("IIM Alumni Canada Team");
    console.log("==================================");

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
    console.error("Error in send-approval-notification function:", error);
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
