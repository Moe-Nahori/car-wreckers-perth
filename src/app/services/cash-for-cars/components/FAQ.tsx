import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How much can I get for my car?",
      answer: "The value of your car depends on several factors including make, model, year, condition, and market demand. We offer up to $9,999 for cars in good condition, and our quotes are always competitive regardless of your car's state."
    },
    {
      question: "Do you buy damaged or non-running cars?",
      answer: "Yes, we buy cars in any condition! Whether your car is damaged, non-running, accident-affected, or mechanically faulty, we'll make you a fair offer. Our service includes free removal for all vehicles."
    },
    {
      question: "How quickly can you pick up my car?",
      answer: "We offer same-day pickup in most cases. Once you accept our quote, we can usually collect your car within a few hours, depending on your location and schedule preference."
    },
    {
      question: "What documents do I need?",
      answer: "You'll need to provide proof of ownership (registration papers or similar) and a valid photo ID. We'll help you with all the necessary paperwork during the collection process."
    },
    {
      question: "Is your car removal service really free?",
      answer: "Yes! Our car removal service is completely free across the Perth metropolitan area. There are no hidden fees or charges - we handle all towing costs."
    },
    {
      question: "How do I get paid?",
      answer: "We pay cash on the spot when we collect your vehicle. We can also arrange bank transfers if you prefer electronic payment."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}