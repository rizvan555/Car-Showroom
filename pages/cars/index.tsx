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
    <div className="flex flex-col mx-auto px-2 pt-10">
      <div className="flex items-center gap-8 mb-20">
        <h1 className="text-6xl font-bold">OUR CARS</h1>
        <hr className="hr-line" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-2 mb-6">
        {cars.map((car, index) => {
          return (
            <div
              key={index}
              className="border flex flex-col justify-center items-center py-3 px-10 w-[30vw]"
            >
              <div className="">
                <img src={car.img} alt={car.img} />
              </div>
              <div className="flex items-center gap-20">
                <div className="flex items-center gap-2">
                  <h3>{car.name}</h3>
                  <h4>{car.model}</h4>
                </div>
                <div className="">
                  <p>€ {car.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cars;
