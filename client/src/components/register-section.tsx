import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { User, Mail, Phone, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertMasterclassRegistrationSchema } from "@shared/schema";
import type { InsertMasterclassRegistration } from "@shared/schema";

export default function RegisterSection() {
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
      <section id="register" className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Registration Confirmed!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Thank you for registering for our free masterclass. We're excited to see you there!
          </p>
          
          <Card className="bg-white text-black rounded-3xl p-8 max-w-2xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <User className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Saturday, June 21st, 2025</p>
                    <p className="text-gray-600">2:00 PM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Our Lady of Guadalupe Parish</p>
                    <p className="text-gray-600">Adams Arcade, Nairobi</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Check your email for detailed directions and parking information.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Register for Free Masterclass
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Secure your spot for the exclusive KSL masterclass. Limited to 50 participants for personalized attention.
          </p>
        </div>

        <Card className="bg-white rounded-3xl shadow-xl border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="bg-black text-white p-12">
                <h3 className="text-2xl font-bold mb-6">Why Register Now?</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-green-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Free Assessment</h4>
                      <p className="text-gray-300 text-sm">Get professional evaluation of your current KSL skills</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Native Instructors</h4>
                      <p className="text-gray-300 text-sm">Learn from experienced Deaf teachers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Personalized Path</h4>
                      <p className="text-gray-300 text-sm">Receive custom learning recommendations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Community Access</h4>
                      <p className="text-gray-300 text-sm">Connect with deaf community members</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-semibold">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input {...field} className="pl-10 py-3 rounded-xl border-gray-200" placeholder="Enter your full name" />
                            </div>
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
                          <FormLabel className="text-black font-semibold">Email Address</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input type="email" {...field} className="pl-10 py-3 rounded-xl border-gray-200" placeholder="Enter your email" />
                            </div>
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
                          <FormLabel className="text-black font-semibold">Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                              <Input type="tel" {...field} className="pl-10 py-3 rounded-xl border-gray-200" placeholder="Enter your phone number" />
                            </div>
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
                          <FormLabel className="text-black font-semibold">Current KSL Level</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="py-3 rounded-xl border-gray-200">
                                <SelectValue placeholder="Select your current level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner-completed">Completed basic KSL course</SelectItem>
                              <SelectItem value="intermediate">Some intermediate experience</SelectItem>
                              <SelectItem value="advanced-beginner">Advanced beginner</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
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
                              className="mt-1"
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm text-gray-600">
                              I agree to receive updates about the masterclass and course information from Ephphatha Kenya.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      disabled={registrationMutation.isPending}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                    >
                      {registrationMutation.isPending ? "Registering..." : "Reserve My Free Spot"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}