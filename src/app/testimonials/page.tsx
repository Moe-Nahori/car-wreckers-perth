import TestimonialsList from '../../components/testimonials/TestimonialsList';
import TestimonialForm from '../../components/testimonials/TestimonialForm';
import Footer from '@/components/ui/footer';

export const metadata = {
  title: 'Customer Testimonials & Reviews - iCar Wreckers Perth',
  description: 'Read what our satisfied customers say about iCar Wreckers Perth. Real reviews from Perth car owners about our car removal and cash for cars services.',
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our satisfied customers have to say about our car removal and cash for cars services in Perth.
            </p>
          </div>

          {/* Show testimonials first */}
          <TestimonialsList />

          {/* Divider */}
          <div className="my-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Had a great experience with our service? We'd love to hear about it! Share your story and help others make an informed decision.
            </p>
          </div>

          {/* Review form at the bottom */}
          <TestimonialForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}