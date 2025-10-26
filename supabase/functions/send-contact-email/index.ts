import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: string;
  livingEnvironment: string;
  experience: string;
  consent: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    console.log("Received contact form submission:", { name: formData.name, email: formData.email });

    const emailResponse = await resend.emails.send({
      from: "Tupplurens Kontakt <onboarding@resend.dev>",
      to: ["pi@tupplurens.se"],
      replyTo: formData.email,
      subject: `Nytt intresseanmälan från ${formData.name}`,
      html: `
        <h2>Ny intresseanmälan från webbplatsen</h2>
        
        <h3>Kontaktinformation:</h3>
        <p><strong>Namn:</strong> ${formData.name}</p>
        <p><strong>E-post:</strong> ${formData.email}</p>
        <p><strong>Telefon:</strong> ${formData.phone}</p>
        
        <h3>Intresse:</h3>
        <p>${formData.interest}</p>
        
        <h3>Boendesituation:</h3>
        <p>${formData.livingEnvironment}</p>
        
        <h3>Erfarenhet av katter:</h3>
        <p>${formData.experience}</p>
        
        <p><em>Godkänt lagring av personuppgifter: ${formData.consent ? 'Ja' : 'Nej'}</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
