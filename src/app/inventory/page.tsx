'use client'
import { useState } from 'react';
import { CARS } from '../data/carData';
import CarCard from '../../components/CarCard';
import Layout from '../../components/Layout';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = CARS.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <input
        type="text"
        placeholder="Search by make..."
        className="border p-2 mb-6 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} showCompareButton />
        ))}
      </div>
    </Layout>
  );
};

export default Inventory;