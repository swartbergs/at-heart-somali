import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/i18n/translations";

const Kontakt = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z.object({
    name: z.string().trim().min(1, {
      message: language === 'sv' ? "Namn krävs" : "Name is required"
    }).max(100),
    email: z.string().trim().email({
      message: language === 'sv' ? "Ogiltig e-postadress" : "Invalid email address"
    }).max(255),
    phone: z.string().trim().min(1, {
      message: language === 'sv' ? "Telefonnummer krävs" : "Phone number is required"
    }).max(50),
    interest: z.string().trim().min(1, {
      message: language === 'sv' ? "Vänligen ange vad du söker" : "Please specify your interest"
    }).max(500),
    livingEnvironment: z.string().trim().min(1, {
      message: language === 'sv' ? "Boende krävs" : "Living situation is required"
    }).max(1000),
    experience: z.string().trim().min(1, {
      message: language === 'sv' ? "Vänligen berätta om din erfarenhet" : "Please tell us about your experience"
    }).max(1000),
    other: z.string().trim().max(1000).optional(),
    consent: z.boolean().refine(val => val === true, {
      message: language === 'sv' ? "Du måste godkänna integritetspolicyn" : "You must accept the privacy policy"
    })
  });

  type FormData = z.infer<typeof formSchema>;
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      livingEnvironment: "",
      experience: "",
      other: "",
      consent: false
    }
  });
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: data
      });

      if (error) throw error;

      toast({
        title: "Tack för ditt meddelande!",
        description: "Vi återkommer till dig så snart som möjligt."
      });
      form.reset();
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Något gick fel",
        description: "Vänligen försök igen senare.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-dark-green">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          {/* Heading */}
          <h1 className="text-brand-gold text-2xl md:text-3xl mb-12 text-center font-heading">
            {t.contact.subtitle}
          </h1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-8 text-center">
              <Mail className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-4 text-black" />
              <h2 className="text-black font-heading text-xs md:text-lg mb-1 md:mb-2">{t.contact.info.email}</h2>
              <a href="mailto:Pi@tupplurens.se" className="text-black hover:underline text-[10px] md:text-sm break-words">pi@tupplurens.se</a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-8 text-center">
              <Phone className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-4 text-black" />
              <h2 className="text-black font-heading text-xs md:text-lg mb-1 md:mb-2">{t.contact.info.phone}</h2>
              <a href="tel:+46707940614" className="text-black hover:underline text-[10px] md:text-sm break-words">
                +46 70 794 06 14
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-3 md:p-8 text-center">
              <MapPin className="w-5 h-5 md:w-8 md:h-8 mx-auto mb-2 md:mb-4 text-black" />
              <h2 className="text-black font-heading text-xs md:text-lg mb-1 md:mb-2">{t.contact.info.location}</h2>
              <p className="text-black text-[10px] md:text-sm">{language === 'sv' ? 'Lidingö, Stockholm' : 'Lidingö, Stockholm, Sweden'}</p>
            </div>
          </div>

          {/* Interest Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
            <h2 className="text-black font-heading text-xl md:text-2xl mb-2">
              {t.contact.form.title}
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              {language === 'sv' ? 'Fyll i formuläret så kontaktar vi dig inom kort' : 'Fill in the form and we will contact you shortly'}
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-black">{t.contact.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.contact.form.namePlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />

                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-black">{t.contact.form.email}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t.contact.form.emailPlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>

                <FormField control={form.control} name="phone" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-black">{t.contact.form.phone}</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder={t.contact.form.phonePlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="interest" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-black">{t.contact.form.interest}</FormLabel>
                      <FormControl>
                        <Input placeholder={t.contact.form.interestPlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="livingEnvironment" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-black">{t.contact.form.living}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.contact.form.livingPlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="experience" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-black">{t.contact.form.experience}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.contact.form.experiencePlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="other" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-black">{t.contact.form.other}</FormLabel>
                      <FormControl>
                        <Textarea placeholder={t.contact.form.otherPlaceholder} className="bg-white border-gray-300 text-black placeholder:text-gray-400 min-h-[100px]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />

                <FormField control={form.control} name="consent" render={({
                field
              }) => <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-black font-normal">
                          {t.contact.form.consent}
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>} />

                <Button type="submit" disabled={isSubmitting} className="w-full bg-brand-dark-green hover:bg-brand-dark-green/90 text-brand-gold font-heading text-lg py-6">
                  {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
};
export default Kontakt;