import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  BsFillFuelPumpDieselFill,
  BsFillPersonFill,
  BsSpeedometer2,
} from 'react-icons/bs';
import { MdAppRegistration } from 'react-icons/md';
import { PiEngineDuotone } from 'react-icons/pi';
import { TbRoad } from 'react-icons/tb';

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

function FindCar() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [filteredCars, setFilteredCars] = useState<Cars[]>([]);

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

  const handleCarSearch = () => {
    const filteredCars = cars.filter(
      (car) => car.name === selectedName && car.model === selectedModel
    );
    console.log(filteredCars);
    setFilteredCars(filteredCars);
  };

  return (
    <div className="flex flex-col items-center justify-center my-20 gap-10">
      <h3>FIND YOUR CAR</h3>
      <div className="flex gap-3">
        <select
          className="border w-[25vw] px-2 py-2"
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">Make All</option>
          {cars.map((car, index) => (
            <option value={car.name} key={index}>
              {car.name}
            </option>
          ))}
        </select>
        <select
          className="border w-[25vw] px-2 py-2"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">Model</option>
          {cars.map((car, index) => (
            <option value={car.model} key={index}>
              {car.model}
            </option>
          ))}
        </select>
      </div>
      <button
        className="border px-4 py-1 rounded myButton"
        onClick={handleCarSearch}
      >
        SEARCH
      </button>
      {filteredCars.map((car, index) => (
        <div className="flex gap-10 px-6 py-10 w-[72vw] border">
          <div>
            <Image src={car.img} alt="image" width={300} height={200} />
          </div>
          <div className="mr-38 w-[30vw]">
            <div className="flex gap-3 ">
              <p className="text-2xl font-bold"> {car.name}</p>
              <p className="text-2xl"> {car.model}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-base">{car.transmission}</p>
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
                <span className="font-bold">Hubraum:</span> {car.displacement}{' '}
                cm
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
          <div>
            <p className="text-3xl mb-6">
              {car.price}
              <span className="text-primary ml-2">€</span>
            </p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FindCar;
