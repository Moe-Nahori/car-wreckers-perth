import { FC } from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { companyInfo } from '@/config/company-info';

interface CallToActionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction: FC<CallToActionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <section className="py-12 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={buttonLink}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300"
            >
              {buttonText}
            </Link>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center text-white text-lg hover:text-blue-100 transition-colors duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              <span>{companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;