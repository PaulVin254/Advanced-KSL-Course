import { GraduationCap, Heart, Eye, Hand, Network, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Native Fluency",
      description: "Learn from someone who lives and breathes KSL daily, ensuring authentic language acquisition."
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Understand deaf culture, etiquette, and community values that enhance your communication."
    },
    {
      icon: Eye,
      title: "Visual Learning",
      description: "Experience truly visual instruction methods that deaf educators naturally excel at."
    },
    {
      icon: Hand,
      title: "Expressive Mastery",
      description: "Master subtle facial expressions and body language that complete your signing fluency."
    },
    {
      icon: Network,
      title: "Community Connection",
      description: "Build authentic relationships within the deaf community through your instructor's network."
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Gain skills recognized by employers and deaf community organizations across Kenya."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-accent to-green-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Why Learn from a Deaf Instructor?
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience authentic KSL learning with native signers who understand the language from the inside out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white p-8 rounded-xl border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="bg-green-accent w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-navy">{benefit.title}</h3>
                <p className="text-gray-dark">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
