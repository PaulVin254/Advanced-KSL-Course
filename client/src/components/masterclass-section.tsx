import { Calendar, MapPin, Clock, Users, Gift } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MasterclassSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="masterclass" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold mb-6 inline-block">
              FREE MASTERCLASS
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Experience Advanced KSL Learning
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join us for a comprehensive 3-hour session where you'll experience our teaching methodology, 
              assess your current level, and discover your personalized learning pathway.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-black">Saturday, June 21st, 2025</p>
                  <p className="text-gray-600">2:00 PM - 5:00 PM</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-black">Our Lady of Guadalupe Parish</p>
                  <p className="text-gray-600">Adams Arcade, Nairobi</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-black">Limited to 50 Participants</p>
                  <p className="text-gray-600">Intimate learning environment</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <Gift className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <p className="font-semibold text-black">Completely FREE</p>
                  <p className="text-gray-600">Includes materials and refreshments</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Reserve Your Free Spot
            </Button>
          </div>
          
          <div>
            <Card className="bg-gray-50 rounded-3xl p-8 border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-black mb-6">What You'll Experience</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Skill Assessment</h4>
                      <p className="text-gray-600">Personalized evaluation of your current KSL proficiency and identification of growth areas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Advanced Techniques</h4>
                      <p className="text-gray-600">Live demonstration of advanced vocabulary, cultural expressions, and fluency techniques.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Learning Pathway</h4>
                      <p className="text-gray-600">Customized roadmap for achieving your KSL fluency goals with clear milestones.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-2">Community Connection</h4>
                      <p className="text-gray-600">Meet fellow learners and connect with the deaf community through our instructor network.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}