import axios from 'axios';
import React, { useEffect, useState } from 'react';
import years from '../data/years.json';
import displacement from '../data/displacement.json';
import fuel from '../data/fuel.json';
import transmission from '../data/transmission.json';

interface Carsettings {
  name: string;
  models: string[];
}

interface YearsData {
  years: number[];
}

interface DisplacementData {
  displacement: number[];
}

interface FuelData {
  fuel: string[];
}
interface TransmissionData {
  transmission: string[];
}

function CarLoading() {
  const [carsettings, setCarsettings] = useState<Carsettings[]>([]);
  const [selectedCarName, setSelectedCarName] = useState<string>('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [imageValue, setImageValue] = useState<string>('');

  useEffect(() => {
    const carEmployment = async () => {
      try {
        const response = await axios.get('http://localhost:3001/caremployment');
        console.log(response.data);
        setCarsettings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    carEmployment();
  }, []);

  const handleCarNameCheck = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCarName = event.target.value;
    setSelectedCarName(selectCarName);

    const selectedCar = carsettings.find((car) => car.name === selectCarName);
    if (selectedCar) {
      setSelectedModels(selectedCar.models);
    } else {
      setSelectedModels([]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageValue(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageValue('');
    }
  };

  return (
    <div className="grid grid-cols-5 gap-10 px-20 py-32">
      <div>
        <select className="border w-[10vw]" onChange={handleCarNameCheck}>
          <option value="">Marke</option>
          {carsettings.map((car, index) => (
            <option key={index}>{car.name}</option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Model</option>
          {selectedModels.map((model, index) => (
            <option key={index} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Year</option>
          {years.years.map((year, index) => (
            <option key={index} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Transmission</option>
          {transmission.transmission.map((trans, index) => (
            <option value="" key={index}>
              {trans}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Fuel</option>
          {fuel.fuel.map((fueldata, index) => (
            <option value="" key={index}>
              {fueldata}
            </option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Displacement</option>
          {displacement.displacement.map((disCar, index) => (
            <option key={index}>{disCar} ㎤</option>
          ))}
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Owner</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>
      <input type="number" placeholder="Price" className="border w-[10vw]" />
      <input type="number" placeholder="Km" className="border w-[10vw]" />
      <input type="number" placeholder="Ps" className="border w-[10vw]" />

      <div className="flex flex-col gap-2">
        <div>
          <input
            type="file"
            name="image"
            className="border"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            onChange={handleImageChange}
          />
        </div>
      </div>
    </div>
  );
}

export default CarLoading;
