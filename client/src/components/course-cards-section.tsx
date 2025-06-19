import { GraduationCap, Users, Award, BookOpen, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function CourseCardsSection() {
  const courses = [
    {
      icon: GraduationCap,
      badge: "Advanced",
      title: "Advanced KSL Fluency",
      description: "Master complex conversations, cultural nuances, and professional signing skills with native Deaf instructors.",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["12-month program", "Native instructors", "Cultural immersion", "Certification"]
    },
    {
      icon: Users,
      badge: "Introduction",
      title: "KSL Foundation Building",
      description: "Strengthen your basic skills with advanced vocabulary, grammar structures, and regional variations.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["3-month intensive", "500+ new signs", "Grammar mastery", "Speed building"]
    },
    {
      icon: Award,
      badge: "Professional",
      title: "KSL Interpreter Training",
      description: "Develop professional interpreting skills for healthcare, education, and legal settings.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Ethics training", "Specialized vocabulary", "Practice scenarios", "Job placement"]
    },
    {
      icon: BookOpen,
      badge: "Intensive",
      title: "Cultural Integration",
      description: "Learn Deaf culture, community etiquette, and build authentic connections within Kenya's Deaf community.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Community events", "Cultural mentorship", "Social integration", "Advocacy skills"]
    },
    {
      icon: Heart,
      badge: "Beginner",
      title: "Family Communication",
      description: "Special program for families with deaf members to improve home communication and emotional connection.",
      image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Family-focused", "Emotional vocabulary", "Home practice", "Support groups"]
    },
    {
      icon: Target,
      badge: "Specialized",
      title: "Workplace KSL",
      description: "Corporate training for inclusive workplaces and professional communication with deaf colleagues.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      features: ["Corporate training", "Workplace vocabulary", "Team building", "Inclusion strategies"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="course" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner to professional level, we have the right course to match your goals and current skill level.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden">
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      course.badge === 'Advanced' ? 'bg-purple-600' :
                      course.badge === 'Introduction' ? 'bg-purple-500' :
                      course.badge === 'Professional' ? 'bg-blue-600' :
                      course.badge === 'Intensive' ? 'bg-green-600' :
                      course.badge === 'Beginner' ? 'bg-yellow-600' :
                      'bg-red-600'
                    } text-white px-3 py-1 rounded-full font-semibold`}
                  >
                    {course.badge}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-100 p-3 rounded-full mr-4">
                    <course.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-black">{course.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <Button 
                  onClick={() => scrollToSection('register')}
                  className="w-full bg-black text-white hover:bg-gray-800 py-3 rounded-full font-semibold transition-colors"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}