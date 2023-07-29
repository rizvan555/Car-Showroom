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
  const [visibility, setVisibility] = useState<number>(6);
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

  const handleMoreCars = () => {
    setVisibility((prevVisibleCars) => prevVisibleCars + 6);
  };

  return (
    <div className="flex flex-col mx-auto px-2 pt-10 py-8 bg-[#dadada]">
      <div className="flex items-center gap-8 mb-20">
        <h1 className="text-6xl font-bold">OUR CARS</h1>
        <hr className="hr-line" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-2 mb-6">
        {cars.slice(0, visibility).map((car, index) => {
          return (
            <div
              key={index}
              className="border flex flex-col justify-center items-center py-3 px-10 w-[30vw] bg-white"
            >
              <div className="">
                <img src={car.img} alt={car.img} />
              </div>
              <div className="flex items-center gap-24">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold">{car.name}</h3>
                  <h4>{car.model}</h4>
                </div>
                <div className="">
                  <p className="font-bold">
                    <span className="text-primary">€</span> {car.price}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        <button
          onClick={handleMoreCars}
          className="border px-6 py-2 bg-primary text-white myButton"
        >
          SEE MORE
        </button>
      </div>
    </div>
  );
}

export default Cars;
