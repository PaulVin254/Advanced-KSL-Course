import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactMessageSchema } from "@shared/schema";
import type { InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to Send Message",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-dark">
            Have questions? We're here to help you on your KSL learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-accent bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="text-green-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Office Address</h4>
                  <p className="text-gray-dark">Ephphatha Kenya<br />P.O. Box 12345-00100<br />Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-accent bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="text-green-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Phone Numbers</h4>
                  <p className="text-gray-dark">+254 700 123 456<br />+254 720 987 654</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-accent bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="text-green-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Email</h4>
                  <p className="text-gray-dark">info@ephphathakenya.org<br />courses@ephphathakenya.org</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-accent bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="text-green-accent text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Office Hours</h4>
                  <p className="text-gray-dark">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 3:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-navy mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="bg-green-accent text-white w-10 h-10 rounded-full p-0 hover:bg-green-600">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-green-accent text-white w-10 h-10 rounded-full p-0 hover:bg-green-600">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-green-accent text-white w-10 h-10 rounded-full p-0 hover:bg-green-600">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="bg-green-accent text-white w-10 h-10 rounded-full p-0 hover:bg-green-600">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Card className="bg-gray-light p-8 rounded-xl border-0">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-navy mb-6">Send us a Message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea {...field} rows={4} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-navy hover:bg-slate-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
