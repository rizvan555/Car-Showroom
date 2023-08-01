import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Cars {
  name: string;
  model: string;
  img: string;
}

function FindCar() {
  const [cars, setCars] = useState<Cars[]>([]);
  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');

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
   
    </div>
  );
}

export default FindCar;
