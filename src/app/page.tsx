'use client'
import React, { useState } from 'react';
//import SearchBar from './toolbar';


const CARS = [
  {id: 1, brand:"Toyota", make:"Supra", year:"2022", msrp:"$52,000", specialty:"Tuner", img:"/images/supraSVG.jpeg"},
  {id: 2, brand:"Dodge", make:"Challenger", year:"2025", msrp:"$45,000", specialty:"American Muscle", img:"/images/DodgeChallenger.webp"},
  {id: 3, brand:"Ford", make:"Mustang", year:"2023", msrp:"$38,000", specialty:"American Muscle", img:"/images/MustangGT.avif"},
  {id: 4, brand:"Nissan", make:"GTR", year:"2019", msrp:"$120,000", specialty:"Supercar", img:"/images/NissanGTR.avif"},
  {id: 5, brand:"Chevrolet", make:"Corvette", year:"2024", msrp:"$85,000", specialty:"American Muscle", img:"/images/ChevroletCorvette.jpeg"},
  {id: 6, brand:"Dodge", make:"Charger", year:"2017", msrp:"$37,000", specialty:"American Muscle", img:"/images/DodgeCharger.avif"},
  {id: 7, brand:"Tesla", make:"Model S", year:"2025", msrp:"$79,099", specialty:"Electric Vehicle", img:"/images/ModelS.avif"},





 
];

function SearchBar({}) {
  const [searchTerm, setSearchTerm] = useState('');

 

  const filteredData = CARS.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()));
  
  return (
      <><h3> ItsStockBro </h3><form>
        <div className="p-4 ">

          <input type="text" placeholder="Search by make..." className="mb-6 p-2 border border-gray-300 rounded-xl w-full max-w-sm" value={searchTerm} onChange={(e) =>setSearchTerm(e.target.value)} />
          <div className="flex flex-wrap justify-center gap-4">
            {filteredData.map(car => (
              <Card key={car.id} car={car} />
            ))}
          </div>
          
          <label>
            <input type="checkbox" />
            {' '}
            Only show products in stock
          </label>

        </div>

       
      </form></>
    );
  }


const Card = ({car}) => (
  <div className="bg-white shadow-md rounded-2xl p-4 m-2 w-72">
    <img
      src={car.img}
      alt={car.make}
      className="w-full h-40 object-cover rounded-xl mb-3"
    />
    <h2 className="text-xl font-bold">{car.make}</h2>
    <p className="text-gray-800"><strong>Brand</strong> {car.brand}</p>
    <p className="text-gray-800"><strong>Make</strong> {car.make}</p>
    <p className="text-gray-800"><strong>Year</strong> {car.year}</p>
    <p className="text-gray-800"><strong>Msrp</strong> {car.msrp}</p>



    <div>
      <p className="text-gray-800 font-semibold mt-2">Specialty:</p>
      <ul className="list-disc list-inside text-gray-700">
      <p>{car.specialty}</p>

      </ul>
    </div>
  </div>
);



export default SearchBar;
