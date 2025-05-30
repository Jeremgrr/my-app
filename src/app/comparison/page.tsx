'use client'

import Layout from '../../components/Layout';
import { useComparison } from '../../context/ComparisonContext';
import CarCard from '../../components/CarCard';

const ComparisonPage = () => {
  const { selectedCars, removeCar } = useComparison();

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-6">Compare Your Cars</h1>
      {selectedCars.length === 0 ? (
        <p>No cars selected yet. Go to Inventory and add some!</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {selectedCars.map(car => (
            <div key={car.id} className="relative">
              <CarCard car={car} />
              <button
                onClick={() => removeCar(car.id)}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default ComparisonPage;