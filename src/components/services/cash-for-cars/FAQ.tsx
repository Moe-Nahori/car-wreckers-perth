import { Card, CardContent } from '@/components/ui/card';
import { faqs } from '@/data/faqs';

export function FAQ() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}