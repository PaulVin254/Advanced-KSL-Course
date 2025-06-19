import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=60" 
              alt="Ephphatha Kenya Logo" 
              className="h-10 w-auto mr-3"
            />
            <span className="text-xl font-bold text-navy">Ephphatha Kenya</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-dark hover:text-navy transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('course')} 
              className="text-gray-dark hover:text-navy transition-colors"
            >
              Course
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-dark hover:text-navy transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-gray-dark hover:text-navy transition-colors"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-dark hover:text-navy transition-colors"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-dark hover:text-navy transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('course')} 
                className="text-gray-dark hover:text-navy transition-colors text-left"
              >
                Course
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-gray-dark hover:text-navy transition-colors text-left"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="text-gray-dark hover:text-navy transition-colors text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-gray-dark hover:text-navy transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
