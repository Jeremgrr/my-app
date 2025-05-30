'use client'

export interface Car {
    id: number;
    brand: string;
    make: string;
    year: string;
    msrp: string;
    specialty: string;
    img: string;
  }
  
  export const CARS: Car[] = [
    {
      id: 1,
      brand: "Toyota",
      make: "Supra",
      year: "2022",
      msrp: "$52,000",
      specialty: "Tuner",
      img: "/images/supraSVG.jpeg",
    },
    {
      id: 2,
      brand: "Dodge",
      make: "Challenger",
      year: "2025",
      msrp: "$45,000",
      specialty: "American Muscle",
      img: "/images/DodgeChallenger.webp",
    },
    {id: 3, brand:"Ford", 
    make:"Mustang", 
    year:"2023", 
    msrp:"$38,000", 
    specialty:"American Muscle", 
    img:"/images/MustangGT.avif"
    },
    {
    id: 4, 
    brand:"Nissan", 
    make:"GTR", 
    year:"2019", 
    msrp:"$120,000", 
    specialty:"Supercar", 
    img:"/images/NissanGTR.avif"
    },
    {id: 5, brand:"Chevrolet", make:"Corvette", year:"2024", msrp:"$85,000", specialty:"American Muscle", img:"/images/ChevroletCorvette.jpeg"},
    {id: 6, brand:"Dodge", make:"Charger", year:"2017", msrp:"$37,000", specialty:"American Muscle", img:"/images/DodgeCharger.avif"},
    {id: 7, brand:"Tesla", make:"Model S", year:"2025", msrp:"$79,099", specialty:"Electric Vehicle", img:"/images/ModelS.avif"},

  ];
  