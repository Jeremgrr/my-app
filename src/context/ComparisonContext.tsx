"use client"; // if you're in Next.js

import { createContext, useState, useContext } from 'react';
import { Car } from '../app/data/carData';

interface ComparisonContextType {
  selectedCars: Car[];
  addCar: (car: Car) => void;
  removeCar: (id: number) => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const ComparisonProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const addCar = (car: Car) => {
    if (selectedCars.length >= 3) return; // limit to 3
    if (!selectedCars.find(c => c.id === car.id)) {
      setSelectedCars([...selectedCars, car]);
    }
  };

  const removeCar = (id: number) => {
    setSelectedCars(selectedCars.filter(car => car.id !== id));
  };

  return (
    <ComparisonContext.Provider value={{ selectedCars, addCar, removeCar }}>
      {children}
    </ComparisonContext.Provider>
  );
};

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (!context) {
    throw new Error('useComparison must be used inside a ComparisonProvider');
  }
  return context;
};
