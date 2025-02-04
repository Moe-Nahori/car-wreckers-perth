import { FC } from 'react';
import { Car } from 'lucide-react';

interface VehicleType {
  type: string;
  description: string;
}

interface AcceptedVehiclesProps {
  title: string;
  subtitle: string;
  vehicleTypes: VehicleType[];
}

const AcceptedVehicles: FC<AcceptedVehiclesProps> = ({
  title,
  subtitle,
  vehicleTypes,
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicleTypes.map((vehicle, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <Car className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {vehicle.type}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {vehicle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceptedVehicles;