import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai';

interface Cars {
  _id: string;
  img: string;
  name: string;
  model: string;
  fuel: number;
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
    <div className="flex flex-col mx-auto px-2 pt-10 py-8 relative">
      <div
        className={`flex items-center gap-8 mb-20 ${
          isFilteredCarsOpen ? 'blur-background' : ''
        }`}
      >
        <h1 className="text-6xl font-bold">OUR CARS</h1>
        <hr className="hr-line" />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-2 mb-6">
        {cars.slice(0, visibility).map((car, index) => {
          return (
            <button
              key={index}
              className={`border flex flex-col justify-center items-center py-3 px-10 w-[30vw] bg-white active:scale-105 transition-all ${
                isFilteredCarsOpen ? 'blur-background' : ''
              }`}
              onClick={() => handleCarItem(car._id)}
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

      {filteredCars.map((car, index) => (
        <div
          key={index}
          className={`absolute flex flex-col justify-center items-center w-[90vw] h-[95vh] bg-white border border-gray-300 mx-16 ${
            isFilteredCarsOpen ? 'visible' : 'invisible'
          }`}
        >
          <button
            onClick={handleCloseFilteredCars}
            className="absolute top-7 right-10"
          >
            <AiOutlineCloseCircle size={30} />
          </button>
          <Image src={car.img} alt="image" width={500} height={400} />
          <div className="flex gap-56 mt-10">
            <div className="flex gap-4">
              <p className="text-3xl font-bold">{car.name}</p>
              <p className="text-3xl">{car.model}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl">
                <span className="text-primary">€</span> {car.price}
              </p>
              <p className="text-xl">year: {car.year}</p>
              <p className="text-xl">kilometr: {car.km} km</p>
              <p className="text-xl">ps: {car.ps} hp</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cars;
