import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How old does a car need to be for your service?",
    answer: "We accept cars of any age. Whether your car is a few years old or several decades old, we will provide a fair quote based on its condition and value."
  },
  {
    question: "Does the car need to be in running condition?",
    answer: "No, we accept non-running cars. Our tow trucks can handle vehicles in any condition, and we will still offer you a competitive price."
  },
  {
    question: "What paperwork do I need to sell my old car?",
    answer: "You will need proof of ownership (registration papers or similar documentation) and a valid photo ID. We will help you with all necessary paperwork during the process."
  },
  {
    question: "How long does the removal process take?",
    answer: "We offer same-day service in most cases. Once you accept our quote, we can typically collect your vehicle within 2-4 hours, depending on your location."
  },
  {
    question: "Do you buy cars without registration?",
    answer: "Yes, we buy unregistered vehicles. However, you will still need to prove ownership of the vehicle."
  },
  {
    question: "What happens to my old car after collection?",
    answer: "We recycle old cars responsibly. Usable parts are salvaged and recycled, while the remaining materials are processed through licensed recycling facilities."
  }
];

export default function ServiceFAQ() {
  return (
    <section className="py-12" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
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