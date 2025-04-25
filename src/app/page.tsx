import React from 'react';
import SearchBar from './toolbar';


const CARS = [
  {id: 1, brand:"Toyota", make:"Supra", year:"2022", msrp:"$52,000", specialty:"Tuner", img:"/images/supraSVG.jpeg"},
  {id: 2, brand:"Dodge", make:"Challenger", year:"2025", msrp:"$45,000", specialty:"American Muscle", img:"/images/DodgeChallenger.webp"},
  {id: 3, brand:"Ford", make:"Mustang", year:"2023", msrp:"$38,000", specialty:"American Muscle", img:"/images/MustangGT.avif"},
  {id: 4, brand:"Nissan", make:"GTR", year:"2019", msrp:"$120,000", specialty:"Supercar", img:"/images/NissanGTR.avif"},
  {id: 5, brand:"Chevrolet", make:"Corvette", year:"2024", msrp:"$85,000", specialty:"American Muscle", img:"/images/ChevroletCorvette.jpeg"},
  {id: 6, brand:"Dodge", make:"Charger", year:"2017", msrp:"$37,000", specialty:"American Muscle", img:"/images/DodgeCharger.avif"},
  {id: 7, brand:"Tesla", make:"Model S", year:"2025", msrp:"$79,099", specialty:"Electric Vehicle", img:"/images/ModelS.avif"},





 
];

const Card = ({ id, brand, make, year, msrp, specialty,img}) => (
  <div className="bg-white shadow-md rounded-2xl p-4 m-2 w-72">
    <img
      src={img}
      alt={id}
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <p className="text-gray-800"><strong>Brand</strong> {brand}</p>
    <p className="text-gray-800"><strong>Make</strong> {make}</p>
    <p className="text-gray-800"><strong>Year</strong> {year}</p>
    <p className="text-gray-800"><strong>Msrp</strong> {msrp}</p>


    <div>
      <p className="text-gray-800 font-semibold mt-2">Specialty:</p>
      <ul className="list-disc list-inside text-gray-700">
      <p>{specialty}</p>

      </ul>
    </div>
  </div>
);

const CardsGrid = () => (
  <><SearchBar></SearchBar><div className="flex flex-wrap justify-center gap-4 p-4">
    {CARS.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div></>
);

export default CardsGrid;
