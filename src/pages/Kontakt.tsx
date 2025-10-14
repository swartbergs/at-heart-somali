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

const formSchema = z.object({
  name: z.string().trim().min(1, { message: "Namn krävs" }).max(100),
  email: z.string().trim().email({ message: "Ogiltig e-postadress" }).max(255),
  phone: z.string().trim().min(1, { message: "Telefonnummer krävs" }).max(50),
  interest: z.string().trim().min(1, { message: "Vänligen ange vad du söker" }).max(500),
  livingEnvironment: z.string().trim().min(1, { message: "Boendemiljö krävs" }).max(1000),
  experience: z.string().trim().min(1, { message: "Vänligen berätta om din erfarenhet" }).max(1000),
  other: z.string().trim().max(1000).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "Du måste godkänna integritetspolicyn",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      consent: false,
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Here you would send the form data to your backend
      console.log("Form data:", data);
      
      toast({
        title: "Tack för ditt meddelande!",
        description: "Vi återkommer till dig så snart som möjligt.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Något gick fel",
        description: "Vänligen försök igen senare.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-brand-beige">
        <div className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
          {/* Heading */}
          <h1 className="text-brand-dark-green text-2xl md:text-3xl mb-12 text-center font-heading">
            Har du frågor eller vill göra en intresseanmälan? Hör av dig!
          </h1>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-beige-light border border-brand-dark-green/20 rounded-lg p-8 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-brand-dark-green" />
              <h2 className="text-brand-dark-green font-heading text-lg mb-2">E-post</h2>
              <a 
                href="mailto:Pi@tupplurens.se" 
                className="text-brand-dark-green hover:underline text-sm"
              >
                Pi@tupplurens.se
              </a>
            </div>

            <div className="bg-brand-beige-light border border-brand-dark-green/20 rounded-lg p-8 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-brand-dark-green" />
              <h2 className="text-brand-dark-green font-heading text-lg mb-2">Telefon</h2>
              <a 
                href="tel:+46707940614" 
                className="text-brand-dark-green hover:underline text-sm"
              >
                +46 70 794 06 14
              </a>
            </div>

            <div className="bg-brand-beige-light border border-brand-dark-green/20 rounded-lg p-8 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-brand-dark-green" />
              <h2 className="text-brand-dark-green font-heading text-lg mb-2">Plats</h2>
              <p className="text-brand-dark-green text-sm">Lidingö, Stockholm</p>
            </div>
          </div>

          {/* Interest Form */}
          <div className="bg-brand-beige-light border border-brand-dark-green/20 rounded-lg p-8 md:p-12">
            <h2 className="text-brand-dark-green font-heading text-xl md:text-2xl mb-2">
              Intresseformulär
            </h2>
            <p className="text-brand-dark-green/70 text-sm mb-8">
              Fyll i formuläret så kontaktar vi dig inom kort
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-dark-green">Namn</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Ditt fullständiga namn"
                            className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-dark-green">E-post</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="din.email@exempel.se"
                            className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-green">Telefon</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="070-123 45 67"
                          className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-green">Vad söker du?</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="T.ex. kön, färg/teckning, sällskap/avel/show"
                          className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="livingEnvironment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-green">Boendemiljö</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Beskriv din boendemiljö (barn, andra djur, inne/ute)"
                          className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-green">Erfarenhet av katt/rasen</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Berätta om din erfarenhet av katter och Somali-rasen"
                          className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="other"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-brand-dark-green">Övrigt</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Övriga frågor eller information"
                          className="bg-brand-beige border-brand-dark-green/30 text-brand-dark-green placeholder:text-brand-dark-green/40 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-brand-dark-green font-normal">
                          Jag samtycker till att At Heart Cattery lagrar mina uppgifter för att kunna kontakta mig enligt integritetspolicyn.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark-green hover:bg-brand-dark-green/90 text-brand-gold font-heading text-lg py-6"
                >
                  {isSubmitting ? "Skickar..." : "Skicka"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;