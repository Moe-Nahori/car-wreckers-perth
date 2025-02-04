'use client';

import { Phone } from 'lucide-react';
import { companyInfo } from '@/config/company-info';
import PhoneNumber from '@/components/ui/PhoneNumber';

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 md:hidden">
      <PhoneNumber
        number={companyInfo.phone}
        className="flex items-center justify-center bg-[#22c55e] text-white w-14 h-14 rounded-full shadow-lg hover:bg-[#1e40af] transition-colors"
        location="sticky-mobile"
      >
        <Phone className="w-6 h-6 text-white" strokeWidth={2} />
      </PhoneNumber>
    </div>
  );
}