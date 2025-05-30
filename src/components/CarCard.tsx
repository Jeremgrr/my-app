'use client'

import { Car } from '../app/data/carData';
import { useComparison } from '../context/ComparisonContext';

interface CarCardProps {
  car: Car;
  showCompareButton?: boolean;
}

const CarCard = ({ car, showCompareButton = false }: CarCardProps) => {
  const { addCar } = useComparison();

  return (
    <div className="border rounded-md shadow-md p-4 max-w-sm">
      <img src={car.img} alt={car.make} className="w-full h-48 object-cover mb-4 rounded" />
      <h2 className="text-xl font-bold">{car.brand} {car.make}</h2>
      <p>Year: {car.year}</p>
      <p>MSRP: {car.msrp}</p>
      <p>Specialty: {car.specialty}</p>

      {showCompareButton && (
        <button
          onClick={() => addCar(car)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Compare
        </button>
      )}
    </div>
  );
};

export default CarCard;
