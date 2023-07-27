import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Cars {
  img: string;
  name: string;
  model: string;
  price: number;
}

function Cars() {
  const [cars, setCars] = useState<Cars[]>([]);
  useEffect(() => {
    const getCars = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cars');
        console.log(response.data);
        setCars(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCars();
  }, []);
  return (
    <div className="flex flex-col  h-[100vh] mx-auto px-2">
      <div className="flex items-center gap-8  mb-20">
        <h1 className="text-6xl font-bold">OUR CARS</h1>
        <hr className="hr-line" />
      </div>
      {cars.map((car, index) => {
        return (
          <div key={index}>
            <img src={car.img} alt={car.img} />
            <h3>{car.name}</h3>
            <h4>{car.model}</h4>
            <p>{car.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
