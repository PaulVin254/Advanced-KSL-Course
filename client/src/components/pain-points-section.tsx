import { MessageSquareX, Clock, EyeOff, UserX, HeartCrack, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function PainPointsSection() {
  const painPoints = [
    {
      icon: MessageSquareX,
      title: "Limited Vocabulary",
      description: "Struggling to express complex thoughts or emotions beyond basic needs and greetings."
    },
    {
      icon: Clock,
      title: "Slow Signing Speed",
      description: "Unable to keep up with natural conversation pace, making communication frustrating."
    },
    {
      icon: EyeOff,
      title: "Reading Difficulties",
      description: "Missing subtle facial expressions and body language that give signs their full meaning."
    },
    {
      icon: UserX,
      title: "Lack of Practice Partners",
      description: "No regular opportunities to practice with fluent signers in real-world situations."
    },
    {
      icon: HeartCrack,
      title: "Low Confidence",
      description: "Feeling embarrassed or hesitant to sign in public or with native signers."
    },
    {
      icon: BookOpen,
      title: "Cultural Gaps",
      description: "Missing cultural context and deaf community etiquette that makes communication authentic."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Are You Stuck at the Basic Level?
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Many students complete basic KSL courses but still struggle with real-world communication. You're not alone in facing these challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <Card key={index} className="bg-gray-light p-8 rounded-xl text-center border-0">
              <CardContent className="p-0">
                <div className="bg-red-accent bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <point.icon className="text-red-accent text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{point.title}</h3>
                <p className="text-gray-dark">{point.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
