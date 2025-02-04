"use client";

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';
import { companyInfo } from '@/config/company-info';

export default function Footer() {
  const carMakesGroup1 = {
    Toyota: ['Corolla', 'Camry', 'HiLux', 'RAV4', 'Prado', 'LandCruiser'],
    Holden: ['Commodore', 'Cruze', 'Captiva', 'Colorado', 'Astra'],
    Ford: ['Ranger', 'Falcon', 'Territory', 'Focus', 'Mustang'],
    Mazda: ['Mazda3', 'CX-5', 'BT-50', 'Mazda2', 'CX-3'],
    Hyundai: ['i30', 'Tucson', 'Santa Fe', 'Accent', 'Elantra']
  };

  const carMakesGroup2 = {
    Kia: ['Cerato', 'Sportage', 'Carnival', 'Rio', 'Sorento'],
    Nissan: ['X-Trail', 'Navara', 'Patrol', 'Qashqai', 'Pulsar'],
    Honda: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Odyssey'],
    Suzuki: ['Swift', 'Vitara', 'Jimny', 'Ignis', 'Baleno'],
    Isuzu: ['D-Max', 'MU-X', 'NPR', 'NQR', 'FTR'],
    Mitsubishi: ['Triton', 'Pajero', 'ASX', 'Outlander', 'Lancer'],
    Volkswagen: ['Golf', 'Polo', 'Tiguan', 'Passat', 'Amarok'],
    Subaru: ['Impreza', 'Forester', 'Outback', 'WRX', 'Liberty']
  };

  const carMakesGroup3 = {
    Audi: ['A3', 'A4', 'Q5', 'Q7', 'TT'],
    BMW: ['3 Series', '5 Series', 'X3', 'X5', 'M3'],
    Mercedes: ['C-Class', 'E-Class', 'A-Class', 'GLC', 'GLE'],
    Tesla: ['Model 3', 'Model Y', 'Model S', 'Model X'],
    Lexus: ['ES', 'IS', 'RX', 'NX', 'LS'],
    Jeep: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Compass', 'Renegade'],
    'Land Rover': ['Range Rover', 'Discovery', 'Defender', 'Range Rover Sport', 'Range Rover Evoque']
  };

  const locations = [
    'Perth Metro', 'Bellevue', 'Midland', 'Malaga', 'Welshpool', 
    'Osborne Park', 'Cannington', 'Joondalup', 'Fremantle', 'Rockingham',
    'Armadale', 'Bayswater', 'Victoria Park', 'Morley', 'Bibra Lake'
  ];

  // Function to handle special cases for URL generation
  const getModelUrl = (make: string, model: string) => {
    const makeSlug = make.toLowerCase();
    let modelSlug = model.toLowerCase().replace(/\s+/g, '-');
    
    // Special cases for Isuzu models
    if (make === 'Isuzu') {
      switch (model) {
        case 'D-Max':
          return `${makeSlug}/dmax`;
        case 'MU-X':
          return `${makeSlug}/muX`;
        default:
          return `${makeSlug}/${modelSlug}`;
      }
    }
    
    return `${makeSlug}/${modelSlug}`;
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-green-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-green-500">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-green-500">Contact</Link></li>
              <li><Link href="/quote" className="hover:text-green-500">Get Quote</Link></li>
              <li><Link href="/environmental-commitment" className="hover:text-green-500">Environmental Commitment</Link></li>
              <li><Link href="/faq" className="hover:text-green-500">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-green-500">Blog</Link></li>
              <li><Link href="/testimonials" className="hover:text-green-500">Testimonials</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/car-removal" className="hover:text-green-500">Car Removal</Link></li>
              <li><Link href="/services/cash-for-cars" className="hover:text-green-500">Cash for Cars</Link></li>
              <li><Link href="/services/scrap-car-removal" className="hover:text-green-500">Scrap Car Removal</Link></li>
              <li><Link href="/services/parts-dismantling" className="hover:text-green-500">Parts Dismantling</Link></li>
              <li><Link href="/services/accident-car-removal" className="hover:text-green-500">Accident Car Removal</Link></li>
              <li><Link href="/services/old-car-removal" className="hover:text-green-500">Old Car Removal</Link></li>
              <li><Link href="/services/commercial-vehicle-removal" className="hover:text-green-500">Commercial Vehicle Removal</Link></li>
            </ul>
          </div>

          {/* Car Makes We Buy - Group 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Popular Car Makes</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(carMakesGroup1).map(([make, models]) => (
                <div key={make}>
                  <Link href={`/cars/${make.toLowerCase()}`} className="font-semibold hover:text-green-500">
                    {make}
                  </Link>
                  <ul className="text-sm space-y-1 mt-1">
                    {models.map(model => (
                      <li key={model}>
                        <Link 
                          href={`/cars/${getModelUrl(make, model)}`}
                          className="hover:text-green-500"
                        >
                          {model}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Car Makes We Buy - Group 2 & 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">More Car Makes</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Group 2 */}
              {Object.entries(carMakesGroup2).map(([make, models]) => (
                <div key={make}>
                  <Link href={`/cars/${make.toLowerCase()}`} className="font-semibold hover:text-green-500">
                    {make}
                  </Link>
                  <ul className="text-sm space-y-1 mt-1">
                    {models.map(model => (
                      <li key={model}>
                        <Link 
                          href={`/cars/${getModelUrl(make, model)}`}
                          className="hover:text-green-500"
                        >
                          {model}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {/* Group 3 */}
              {Object.entries(carMakesGroup3).map(([make, models]) => (
                <div key={make}>
                  <Link href={`/cars/${make.toLowerCase().replace(/\s+/g, '')}`} className="font-semibold hover:text-green-500">
                    {make}
                  </Link>
                  <ul className="text-sm space-y-1 mt-1">
                    {models.map(model => (
                      <li key={model}>
                        <Link 
                          href={`/cars/${make.toLowerCase().replace(/\s+/g, '')}/${model.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hover:text-green-500"
                        >
                          {model}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Service Areas</h3>
              <div className="grid grid-cols-2 gap-2">
                {locations.map(location => (
                  <Link 
                    key={location}
                    href={`/locations/${location.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-green-500"
                  >
                    {location}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Us and Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <p>Phone: <a href={`tel:${companyInfo.phone}`} className="hover:text-green-500">{companyInfo.phone}</a></p>
                  <p>Email: <a href={`mailto:${companyInfo.email}`} className="hover:text-green-500">{companyInfo.email}</a></p>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href="#facebook" 
                    className="text-white hover:text-blue-500 transition-colors" 
                    title="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#instagram" 
                    className="text-white hover:text-pink-500 transition-colors" 
                    title="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#youtube" 
                    className="text-white hover:text-red-500 transition-colors" 
                    title="YouTube"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                  <a 
                    href="#twitter" 
                    className="text-white hover:text-blue-400 transition-colors" 
                    title="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
                <div className="space-y-2 pt-4">
                  <Link href="/privacy-policy" className="block hover:text-green-500">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="block hover:text-green-500">Terms of Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}