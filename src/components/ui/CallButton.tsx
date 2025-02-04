"use client";

import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from './button';
import { companyInfo } from '@/config/company-info';
import PhoneNumber from './PhoneNumber';

export default function CallButton() {
  return (
    <div className="fixed z-50">
      {/* Desktop Call Button */}
      <div className="hidden md:block fixed top-4 right-4">
        <Button
          className="bg-[#22c55e] hover:bg-[#1e40af] text-white"
          asChild
        >
          <PhoneNumber 
            number={companyInfo.phone} 
            className="flex items-center"
            location="header"
          >
            <Phone className="h-4 w-4 mr-2" />
            Call Now: {companyInfo.phone}
          </PhoneNumber>
        </Button>
      </div>

      {/* Mobile Call Button */}
      <div className="md:hidden fixed bottom-4 right-4">
        <Button
          className="bg-[#22c55e] hover:bg-[#1e40af] text-white rounded-full w-14 h-14 p-0 flex items-center justify-center"
          asChild
        >
          <PhoneNumber 
            number={companyInfo.phone} 
            className="flex items-center justify-center"
            location="mobile-sticky"
          >
            <Phone className="h-6 w-6 text-white" strokeWidth={2} />
          </PhoneNumber>
        </Button>
      </div>
    </div>
  );
}