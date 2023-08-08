import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import FilteredCars from './FilteredCars';

interface Cars {
  _id: string;
  img: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  model: string;
  fuel: string;
  transmission: string;
  displacement: number;
  owner: number;
  price: number;
  km: number;
  year: number;
  ps: number;
}

function Cars() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [visibility, setVisibility] = useState<number>(6);
  const [filteredCars, setFilteredCars] = useState<Cars[]>([]);
  const [isFilteredCarsOpen, setIsFilteredCarsOpen] = useState<boolean>(false);
  const [close, setClose] = useState<boolean>(true);

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

  const handleCarItem = (carId: string) => {
    const filteredCar = cars.find((car) => car._id === carId);
    console.log(filteredCar);
    if (filteredCar) {
      setFilteredCars([filteredCar]);
      setIsFilteredCarsOpen(true);
    }
  };

  const handleCloseFilteredCars = () => {
    setIsFilteredCarsOpen(false);
    setClose(false);
  };

  return (
    <div className="flex flex-col mx-auto pt-10 py-8 relative bg-[#f5f5f5]">
      <div
        className={`flex items-center gap-8 mb-20 ${
          isFilteredCarsOpen ? 'blur-background' : ''
        }`}
      >
        <h1 className="text-6xl font-bold px-5">OUR CARS</h1>
        <hr className="hr-line" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-2 mb-6 ">
        {cars.slice(0, visibility).map((car, index) => {
          return (
            <button
              key={index}
              className={`flex flex-col justify-center items-center py-3 px-10 w-[30vw] bg-white hover:scale-105 transition-all item ${
                isFilteredCarsOpen ? 'blur-background' : ''
              }`}
              onClick={() => handleCarItem(car._id)}
            >
              <div className="">
                <Image src={car.img} alt={car.img} width={300} height={100} />
              </div>
              <div className="flex items-center gap-20">
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
            </button>
          );
        })}
        <button
          onClick={handleMoreCars}
          className="border px-6 py-2 bg-primary text-white myButton"
        >
          SEE MORE
        </button>
      </div>
      <FilteredCars
        filteredCars={isFilteredCarsOpen ? filteredCars : []}
        isFilteredCarsOpen={isFilteredCarsOpen}
        handleCloseFilteredCars={handleCloseFilteredCars}
      />
    </div>
  );
}

export default Cars;
