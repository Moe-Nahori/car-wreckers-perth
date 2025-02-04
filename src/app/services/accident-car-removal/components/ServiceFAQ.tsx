import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you remove cars that are severely damaged?",
    answer: "Yes, we remove vehicles with any level of accident damage. Our specialized equipment and experienced team can safely handle severely damaged vehicles."
  },
  {
    question: "Do you handle insurance write-offs?",
    answer: "Yes, we accept all insurance write-offs, whether they're statutory or repairable write-offs. We can help with the necessary paperwork and provide competitive quotes."
  },
  {
    question: "How quickly can you remove my accident-damaged car?",
    answer: "We offer 24/7 emergency removal service and can typically collect your vehicle within 2-4 hours of accepting our quote, depending on your location in Perth."
  },
  {
    question: "What documents do I need for an accident car removal?",
    answer: "You'll need proof of ownership (registration papers), a valid photo ID, and any insurance documentation if applicable. We'll guide you through the process."
  },
  {
    question: "How do you determine the value of an accident-damaged car?",
    answer: "We assess factors like the extent of damage, salvageable parts, make and model, age of the vehicle, and current market values to offer you the best possible price."
  },
  {
    question: "Is your towing service really free for accident cars?",
    answer: "Yes, our towing service is completely free regardless of your vehicle's condition or location within the Perth metro area. There are no hidden charges."
  }
];

export default function ServiceFAQ() {
  return (
    <section className="py-12" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Common Questions About Accident Car Removal
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