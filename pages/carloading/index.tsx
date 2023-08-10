import { useSession } from '@clerk/nextjs';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface Carsettings {
  name: string;
  models: string[];
}

function CarLoading() {
  const [carsettings, setCarsettings] = useState<Carsettings[]>([]);
  const [selectedCarName, setSelectedCarName] = useState<string>('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);

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
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Transmission</option>
          <option value="">Automatik</option>
          <option value="">Halbautomatik</option>
          <option value="">Schaltgetriebe</option>
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Fuel</option>
          <option value="">Diesel</option>
          <option value="">Hybrid(Benzin/Elektro)</option>
          <option value="">Hybrid(Diesel/Elektro)</option>
          <option value="">Elektro</option>
          <option value="">Autogas</option>
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Displacement</option>
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
      <div>
        <select className="border w-[10vw]">
          <option value="">Price</option>
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Km</option>
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Ps</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <input type="file" name="image" className="border" />
        </div>
        <div>
          <input type="file" name="image" className="border" />
        </div>
        <div>
          <input type="file" name="image" className="border" />
        </div>
        <div>
          <input type="file" name="image" className="border" />
        </div>
        <div>
          <input type="file" name="image" className="border" />
        </div>
      </div>
    </div>
  );
}

export default CarLoading;
