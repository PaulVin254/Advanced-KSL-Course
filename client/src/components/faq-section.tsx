import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Who is this course designed for?",
      answer: "This course is perfect for individuals who have completed basic KSL training but still struggle with fluency, confidence, or cultural understanding. Whether you're a parent, teacher, healthcare worker, or simply passionate about deaf culture, this course will elevate your skills to professional level."
    },
    {
      question: "What makes this different from other KSL courses?",
      answer: "Our course is taught by native deaf signers, ensuring authentic language acquisition and cultural immersion. We focus on real-world application, cultural context, and building genuine connections within the deaf community rather than just teaching signs in isolation."
    },
    {
      question: "How much does the full course cost?",
      answer: "Our 12-month Advanced KSL Course is competitively priced at KSh 45,000, payable in flexible installments. This includes all materials, community events, certification, and ongoing support. We also offer scholarships for qualifying students."
    },
    {
      question: "What are the class schedules?",
      answer: "Classes meet twice weekly: Saturdays 2:00-5:00 PM and Wednesdays 6:00-8:00 PM. We also have monthly community events and practice sessions. All classes are held in accessible venues with good lighting and seating arrangements optimized for visual learning."
    },
    {
      question: "Do you provide certification?",
      answer: "Yes! Upon successful completion, you'll receive an Advanced KSL Proficiency Certificate recognized by major employers, NGOs, and deaf organizations across Kenya. We also provide career guidance and job placement assistance for those interested in interpreting or deaf education careers."
    },
    {
      question: "What if I miss classes?",
      answer: "We understand life happens! All classes are recorded (with permission), and we provide makeup sessions monthly. Our online community platform allows you to stay connected with classmates and access additional practice materials. We also offer one-on-one catch-up sessions when needed."
    },
    {
      question: "Is the masterclass really free?",
      answer: "Absolutely! The masterclass is completely free with no hidden costs. It's our way of giving back to the community and helping you determine if our advanced course is right for your learning goals. Light refreshments will be provided."
    },
    {
      question: "What should I bring to the masterclass?",
      answer: "Just bring yourself and an open mind! We'll provide all materials, including a KSL assessment guide, course brochure, and practice resources. If you have any KSL learning materials or dictionaries, feel free to bring them for reference, but they're not required."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-dark">
            Get answers to common questions about our Advanced KSL Course.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-sm border-0">
              <CardContent className="p-0">
                <Button
                  variant="ghost"
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 rounded-xl transition-colors h-auto"
                >
                  <span className="font-semibold text-navy pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`text-gray-dark transform transition-transform flex-shrink-0 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </Button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 text-gray-dark">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
