import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CourseCardsSection from "@/components/course-cards-section";
import MasterclassSection from "@/components/masterclass-section";
import RegisterSection from "@/components/register-section";
import TestimonialsSection from "@/components/testimonials-section";
import FAQSection from "@/components/faq-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <CourseCardsSection />
      <MasterclassSection />
      <RegisterSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
