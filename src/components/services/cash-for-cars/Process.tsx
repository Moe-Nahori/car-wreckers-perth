import { Phone, DollarSign, Clock } from 'lucide-react';

export function Process() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">How Our Service Works</h2>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">1. Contact Us</h3>
          <p>Call or fill our online form for an instant quote</p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">2. Get Your Quote</h3>
          <p>Receive a competitive cash offer instantly</p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">3. Schedule Pickup</h3>
          <p>Choose a convenient time for free car removal</p>
        </div>
        <div className="text-center">
          <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">4. Get Paid</h3>
          <p>Receive cash payment on the spot</p>
        </div>
      </div>
    </section>
  );
}