import React from 'react';
import { Metadata } from 'next';
import { companyInfo } from '@/config/company-info';

export const metadata: Metadata = {
  title: 'Terms of Service | iCar Wreckers Perth',
  description: 'Terms and conditions for using iCar Wreckers Perth services.',
};

export default function TermsOfService() {
  // Format address as a single string
  const formattedAddress = `${companyInfo.address.street}, ${companyInfo.address.suburb}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.postcode}, ${companyInfo.address.country}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
          <p className="mb-4">
            By accessing and using iCar Wreckers Perth's services, you agree to be bound by these Terms of Service and acknowledge that they constitute a legally binding agreement between you and iCar Wreckers Perth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Services Description</h2>
          <p className="mb-4">
            iCar Wreckers Perth provides car wrecking, removal, and recycling services in Perth and surrounding areas. Our services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Car removal and wrecking</li>
            <li>Cash for cars</li>
            <li>Scrap car removal</li>
            <li>Parts dismantling</li>
            <li>Accident car removal</li>
            <li>Commercial vehicle removal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Obligations</h2>
          <p className="mb-4">When using our services, you agree to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information about yourself and your vehicle</li>
            <li>Have legal ownership or authority to sell/dispose of the vehicle</li>
            <li>Remove all personal belongings from the vehicle before collection</li>
            <li>Ensure the vehicle is accessible for collection</li>
            <li>Provide valid identification and vehicle documentation</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p className="mb-4">
            Payment for vehicles is made in cash upon collection, subject to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Verification of vehicle condition matching the description provided</li>
            <li>Confirmation of ownership and documentation</li>
            <li>Agreement on final price based on inspection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Service Availability</h2>
          <p className="mb-4">
            We operate within Perth metropolitan area and surrounding regions. Service availability may vary based on location and vehicle condition. We reserve the right to refuse service at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Liability Limitations</h2>
          <p className="mb-4">
            To the extent permitted by law, iCar Wreckers Perth:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Is not liable for any indirect, special, or consequential damages</li>
            <li>Limits liability to the value of the services provided</li>
            <li>Does not guarantee specific prices until physical inspection</li>
            <li>Is not responsible for items left in vehicles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Consumer Rights</h2>
          <p className="mb-4">
            These terms do not exclude any rights under the Australian Consumer Law. Our services come with guarantees that cannot be excluded under Australian Consumer Law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Dispute Resolution</h2>
          <p className="mb-4">
            Any disputes will be resolved through:
          </p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Direct negotiation with our customer service team</li>
            <li>Independent mediation if required</li>
            <li>Appropriate legal channels under Western Australian law</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend service at any time if:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>False or misleading information is provided</li>
            <li>Terms of service are breached</li>
            <li>Illegal activity is suspected</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            We may modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">
            For questions about these terms, please contact us:
          </p>
          <div className="mb-4">
            <p>Email: {companyInfo.email}</p>
            <p>Address: {formattedAddress}</p>
          </div>
        </section>

        <section>
          <p className="text-sm text-gray-600">
            Last updated: January 29, 2024
          </p>
        </section>
      </div>
    </div>
  );
}