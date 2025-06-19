import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-black text-white py-20 lg:py-32 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Still Struggling to Sign{" "}
            <Badge className="bg-blue-600 text-white text-5xl lg:text-7xl px-4 py-2 rounded-2xl font-bold inline-block mb-2">
              Confidently?
            </Badge>
            <br />
            Join Our{" "}
            <Badge className="bg-green-600 text-white text-5xl lg:text-7xl px-4 py-2 rounded-2xl font-bold inline-block">
              Advanced
            </Badge>{" "}
            KSL Course.
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Professional courses that will teach you fluent Kenyan Sign Language, 
            provided by experienced and trusted Deaf instructors.
          </p>
          
          <Button 
            onClick={() => scrollToSection('register')}
            className="bg-white text-black hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
          >
            Learn more
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
