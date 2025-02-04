import React from 'react';
import { Metadata } from 'next';
import { companyInfo } from '@/config/company-info';

export const metadata: Metadata = {
  title: 'Privacy Policy | iCar Wreckers Perth',
  description: 'Our commitment to protecting your privacy and personal information at iCar Wreckers Perth.',
};

export default function PrivacyPolicy() {
  // Format address as a single string
  const formattedAddress = `${companyInfo.address.street}, ${companyInfo.address.suburb}, ${companyInfo.address.city}, ${companyInfo.address.state} ${companyInfo.address.postcode}, ${companyInfo.address.country}`;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            At iCar Wreckers Perth, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in accordance with the Australian Privacy Principles (APPs).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect the following types of personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, address, and contact details</li>
            <li>Vehicle information and registration details</li>
            <li>Payment information for transactions</li>
            <li>Communication records between you and our team</li>
            <li>Website usage data and cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use your personal information to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide car wrecking and removal services</li>
            <li>Process payments and transactions</li>
            <li>Communicate about our services</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">
            We may share your personal information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Our employees and contractors</li>
            <li>Service providers and business partners</li>
            <li>Government authorities when required by law</li>
          </ul>
          <p className="mb-4">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, modification, or disclosure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
          <p className="mb-4">
            Our website uses cookies and similar technologies to improve user experience and analyze website traffic. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have questions about this Privacy Policy or your personal information, please contact us:
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