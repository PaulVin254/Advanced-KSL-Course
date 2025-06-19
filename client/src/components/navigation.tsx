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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-black">EPHPHATHA</span>
              <span className="text-red-600">KENYA</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('course')} 
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Course
            </button>
            <button 
              onClick={() => scrollToSection('masterclass')} 
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              Masterclass
            </button>
            <Button 
              onClick={() => scrollToSection('register')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
            >
              Register
            </Button>
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
                onClick={() => scrollToSection('course')} 
                className="text-gray-700 hover:text-black transition-colors text-left font-medium"
              >
                Course
              </button>
              <button 
                onClick={() => scrollToSection('masterclass')} 
                className="text-gray-700 hover:text-black transition-colors text-left font-medium"
              >
                Masterclass
              </button>
              <Button 
                onClick={() => scrollToSection('register')}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-fit"
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
