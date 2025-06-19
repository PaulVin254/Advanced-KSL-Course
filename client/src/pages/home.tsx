import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PainPointsSection from "@/components/pain-points-section";
import BenefitsSection from "@/components/benefits-section";
import CourseTimelineSection from "@/components/course-timeline-section";
import TestimonialsSection from "@/components/testimonials-section";
import RegistrationFormSection from "@/components/registration-form-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <BenefitsSection />
      <CourseTimelineSection />
      <TestimonialsSection />
      <RegistrationFormSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
