import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  BsFillFuelPumpDieselFill,
  BsFillPersonFill,
  BsSpeedometer2,
} from 'react-icons/bs';
import { MdAppRegistration } from 'react-icons/md';
import { TbRoad } from 'react-icons/tb';
import { PiEngineDuotone } from 'react-icons/pi';

interface Cars {
  _id: string;
  img: string;
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
          className={`absolute flex justify-center items-center gap-8 w-[95vw] h-[95vh] bg-white border border-gray-300 mx-6 item ${
            isFilteredCarsOpen ? 'visible' : 'invisible'
          }`}
        >
          <button
            onClick={handleCloseFilteredCars}
            className="absolute top-7 right-10"
          >
            <AiOutlineCloseCircle size={30} />
          </button>
          <div className="flex flex-col border rounded px-10 py-10 ml-4  w-[55vw] h-[65vh]">
            <Image src={car.img} alt="image" width={600} height={400} />
          </div>
          <div className="flex flex-col px-10 py-10 gap-2 border-r border-l w-[32vw]">
            <div className="flex gap-3 font-extrabold ">
              <p className="text-2xl"> {car.name}</p>
              <p className="text-2xl"> {car.model}</p>
            </div>
            <p className="text-base">{car.transmission}</p>
            <p className="text-3xl mb-6">
              {car.price}
              <span className="text-primary ml-2">€</span>
            </p>
            <hr />
            <p className="flex items-center gap-3 text-l mt-6">
              <MdAppRegistration size={22} />
              <span className="font-bold">Erstzulassung:</span> {car.year}
            </p>
            <p className="flex items-center gap-4 text-l">
              <BsFillFuelPumpDieselFill size={20} />
              <span className="font-bold">Kraftstoff:</span> {car.fuel}
            </p>
            <p className="flex items-center gap-3 text-l">
              <TbRoad size={20} />
              <span className="font-bold">Kilometerstand:</span> {car.km} km
            </p>
            <p className="flex items-center gap-3 text-l">
              <PiEngineDuotone size={22} />
              <span className="font-bold">Hubraum:</span> {car.displacement}
            </p>
            <p className="flex items-center gap-3 text-l">
              <BsSpeedometer2 size={20} />
              <span className="font-bold">Leistung:</span> {car.ps} hp
            </p>
            <p className="flex items-center gap-3 text-l">
              <BsFillPersonFill size={20} />
              <span className="font-bold">Farhrzeughalter:</span> {car.owner}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cars;
