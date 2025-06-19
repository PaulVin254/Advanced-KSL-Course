import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CourseTimelineSection() {
  const timelineItems = [
    {
      period: "Months 1-3",
      title: "Foundation Strengthening",
      items: [
        "Advanced vocabulary building (500+ new signs)",
        "Improved fingerspelling speed and accuracy",
        "Complex sentence structure and grammar",
        "Regional sign variations across Kenya"
      ]
    },
    {
      period: "Months 4-6",
      title: "Fluency Development",
      items: [
        "Natural conversation pace and rhythm",
        "Advanced facial expressions and non-manual markers",
        "Storytelling and narrative techniques",
        "Professional and academic vocabulary"
      ]
    },
    {
      period: "Months 7-9",
      title: "Cultural Integration",
      items: [
        "Deaf community events and social etiquette",
        "KSL poetry and artistic expression",
        "Interpreting skills and ethics",
        "Technology and modern communication"
      ]
    },
    {
      period: "Months 10-12",
      title: "Mastery & Certification",
      items: [
        "Advanced conversational fluency assessment",
        "Teaching and mentoring basic learners",
        "Community leadership and advocacy",
        "Official certification and career guidance"
      ]
    }
  ];

  return (
    <section id="course" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            12-Month Advanced KSL Journey
          </h2>
          <p className="text-xl text-gray-dark max-w-3xl mx-auto">
            Structured learning path from June 2025 to May 2026, designed to transform your signing from basic to fluent.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-accent hidden md:block"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start">
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-green-accent rounded-full border-4 border-white shadow-lg"></div>
                <Card className="md:ml-16 bg-gray-light p-8 rounded-xl w-full border-0">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <Badge className="bg-green-accent text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                        {item.period}
                      </Badge>
                      <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                    </div>
                    <ul className="text-gray-dark space-y-2">
                      {item.items.map((listItem, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <Check className="text-green-accent mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                          {listItem}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
