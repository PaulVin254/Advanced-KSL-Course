import { Calendar, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFullCourseClick = () => {
    alert('Full course registration will be available after the masterclass. Please attend the free session first!');
  };

  return (
    <section className="bg-gradient-to-br from-gray-light to-white py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Still Struggling to Sign Confidently? 
              <span className="text-green-accent"> Level Up</span> with Our Advanced KSL Course!
            </h1>
            <p className="text-xl text-gray-dark mb-8 leading-relaxed">
              Master fluent Kenyan Sign Language with our comprehensive 12-month program. Learn from experienced Deaf instructors and join a supportive community of learners.
            </p>
            
            <Card className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-accent mb-8">
              <CardContent className="p-0">
                <div className="flex items-start">
                  <Calendar className="text-red-accent text-xl mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-navy mb-2">Free Masterclass</h3>
                    <p className="text-gray-dark mb-2">Saturday, June 21st, 2025 at 2:00 PM</p>
                    <p className="text-sm text-gray-dark">Our Lady of Guadalupe Parish, Adams Arcade</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToRegistration}
                className="bg-green-accent hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Users className="mr-2 h-5 w-5" />
                Join Free Masterclass
              </Button>
              <Button 
                onClick={handleFullCourseClick}
                variant="outline"
                className="bg-navy hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center border-navy"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Register for Full Course
              </Button>
            </div>
          </div>
          <div className="lg:text-right">
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Professional sign language instructor teaching students" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
