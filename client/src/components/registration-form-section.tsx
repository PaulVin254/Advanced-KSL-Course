import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Calendar, MapPin, Clock, Gift, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertMasterclassRegistrationSchema } from "@shared/schema";
import type { InsertMasterclassRegistration } from "@shared/schema";

export default function RegistrationFormSection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertMasterclassRegistration>({
    resolver: zodResolver(insertMasterclassRegistrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      kslLevel: "",
      motivation: "",
      consent: "true",
    },
  });

  const registrationMutation = useMutation({
    mutationFn: async (data: InsertMasterclassRegistration) => {
      const response = await apiRequest("POST", "/api/masterclass-registration", data);
      return response.json();
    },
    onSuccess: (data) => {
      setIsSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "You will receive a confirmation email with venue details and directions.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Registration Failed",
        description: error.message || "Please try again or contact us for assistance.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertMasterclassRegistration) => {
    registrationMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section id="registration" className="py-20 bg-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-2xl p-8 text-navy text-center">
            <CardContent className="p-0">
              <div className="mb-6">
                <div className="bg-green-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Registration Confirmed!</h2>
                <p className="text-xl text-gray-dark mb-6">
                  Thank you for registering for our free masterclass. We're excited to see you there!
                </p>
              </div>
              
              <div className="bg-gray-light p-6 rounded-xl text-left">
                <h3 className="font-semibold text-navy mb-4">Event Details:</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="text-green-accent mr-3 h-5 w-5" />
                    <span>Saturday, June 21st, 2025 at 2:00 PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-accent mr-3 h-5 w-5" />
                    <span>Our Lady of Guadalupe Parish, Adams Arcade, Nairobi</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-green-accent mr-3 h-5 w-5" />
                    <span>3 hours (2:00 PM - 5:00 PM)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-dark mt-4">
                  Check your email for detailed directions and parking information.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="registration" className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Reserve Your Spot for the Free Masterclass
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join us on Saturday, June 21st, 2025 at Our Lady of Guadalupe Parish, Adams Arcade. Limited to 50 participants.
          </p>
        </div>

        <Card className="bg-white rounded-2xl p-8 text-navy">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Masterclass Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="text-green-accent text-xl mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Date & Time</p>
                      <p className="text-gray-dark">Saturday, June 21st, 2025 at 2:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-green-accent text-xl mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Venue</p>
                      <p className="text-gray-dark">Our Lady of Guadalupe Parish<br />Adams Arcade, Nairobi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-green-accent text-xl mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-gray-dark">3 hours (2:00 PM - 5:00 PM)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Gift className="text-green-accent text-xl mr-4 mt-1" />
                    <div>
                      <p className="font-semibold">Cost</p>
                      <p className="text-gray-dark">Completely FREE</p>
                    </div>
                  </div>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="kslLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current KSL Level *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="beginner-completed">Completed basic KSL course</SelectItem>
                            <SelectItem value="intermediate">Some intermediate experience</SelectItem>
                            <SelectItem value="advanced-beginner">Advanced beginner</SelectItem>
                            <SelectItem value="other">Other (please specify)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Why do you want to improve your KSL? (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={3} 
                            placeholder="e.g., to communicate with deaf family member, for work, personal interest..."
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
                            checked={field.value === "true"}
                            onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm text-gray-dark">
                            I agree to receive updates about the masterclass and course information from Ephphatha Kenya. I understand I can unsubscribe at any time.
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={registrationMutation.isPending}
                    className="w-full bg-green-accent hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    <Users className="mr-2 h-5 w-5" />
                    {registrationMutation.isPending ? "Registering..." : "Reserve My Free Spot"}
                  </Button>
                </form>
              </Form>
            </div>

            <Card className="bg-green-accent bg-opacity-10 p-6 rounded-xl">
              <CardContent className="p-0">
                <h4 className="font-semibold text-green-accent mb-2">What You'll Learn at the Masterclass:</h4>
                <ul className="text-gray-dark space-y-1">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-accent rounded-full mr-2"></div>
                    Assessment of your current KSL level
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-accent rounded-full mr-2"></div>
                    Advanced vocabulary demonstration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-accent rounded-full mr-2"></div>
                    Cultural insights from deaf community
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-accent rounded-full mr-2"></div>
                    Personalized learning pathway
                  </li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
