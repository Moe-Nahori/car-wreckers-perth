import { FC } from 'react';

interface ServiceDescriptionProps {
  title: string;
  description: string[];
  additionalContent?: React.ReactNode;
}

const ServiceDescription: FC<ServiceDescriptionProps> = ({
  title,
  description,
  additionalContent,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{title}</h2>
        <div className="prose prose-lg max-w-none">
          {description.map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {additionalContent && (
          <div className="mt-8">
            {additionalContent}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceDescription;