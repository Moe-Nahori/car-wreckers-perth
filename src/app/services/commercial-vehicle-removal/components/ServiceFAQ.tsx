import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of commercial vehicles do you accept?",
    answer: "We accept all types of commercial vehicles including vans, trucks, utes, buses, and specialized equipment vehicles. We also handle fleet vehicles of any size."
  },
  {
    question: "How do you handle fleet disposals?",
    answer: "We offer specialized fleet disposal services with bulk pricing, coordinated pickup schedules, and comprehensive documentation for business records."
  },
  {
    question: "What documentation is required?",
    answer: "You'll need business ownership documentation, vehicle registration papers, and company identification. We assist with all necessary transfer paperwork."
  },
  {
    question: "Can you handle multiple vehicle removals?",
    answer: "Yes, we specialize in multiple vehicle removals. We can coordinate removal of entire fleets with minimal disruption to your business operations."
  },
  {
    question: "Do you offer after-hours removal?",
    answer: "Yes, we provide flexible scheduling including after-hours and weekend removals to accommodate your business operations."
  },
  {
    question: "How is pricing determined for commercial vehicles?",
    answer: "Pricing is based on vehicle type, condition, size, and current market values. We offer competitive rates and bulk pricing for multiple vehicles."
  }
];

export default function ServiceFAQ() {
  return (
    <section className="py-12" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Commercial Vehicle Removal FAQs
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}