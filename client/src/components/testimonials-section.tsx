import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Grace Wanjiku",
      role: "Teacher, Nairobi",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "I went from being afraid to sign in public to confidently interpreting at church services. The cultural aspects I learned were invaluable for connecting with my deaf students.",
      year: "Class of 2024"
    },
    {
      name: "David Kiprop",
      role: "Social Worker, Eldoret",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "The advanced course helped me become the bridge between deaf and hearing communities in my work. My signing is now natural and expressive, not just functional.",
      year: "Class of 2023"
    },
    {
      name: "Mary Achieng",
      role: "Parent, Kisumu",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "As a mother of a deaf child, this course gave me the skills to truly communicate with my son about his dreams, fears, and aspirations. We're closer than ever.",
      year: "Class of 2024"
    },
    {
      name: "Samuel Mwangi",
      role: "University Student, Nairobi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "I was stuck at intermediate level for years. This course gave me the confidence to pursue my dream of becoming a professional interpreter. I got my first job before graduation!",
      year: "Class of 2023"
    },
    {
      name: "Faith Nekesa",
      role: "Healthcare Worker, Mombasa",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "The medical KSL vocabulary and cultural sensitivity training I received has made me the go-to person for deaf patients at our hospital. It's incredibly fulfilling.",
      year: "Class of 2024"
    },
    {
      name: "Peter Kimani",
      role: "Pastor, Nakuru",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      testimonial: "Learning from deaf instructors opened my eyes to the richness of deaf culture and spirituality. Our church now has a thriving deaf ministry thanks to this training.",
      year: "Class of 2023"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Hear from graduates who transformed their KSL skills and gained confidence in the deaf community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white p-8 rounded-xl shadow-lg border-0">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={`Portrait of ${testimonial.name}`} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-gray-dark">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-dark italic mb-4">"{testimonial.testimonial}"</p>
                <Badge variant="secondary" className="text-sm text-green-accent font-semibold bg-green-accent/10">
                  {testimonial.year}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
