import axios from 'axios';
import React, { useEffect, useState } from 'react';
import years from '../data/years.json';
import displacement from '../data/displacement.json';
import fuel from '../data/fuel.json';
import transmission from '../data/transmission.json';
import { motion } from 'framer-motion';
import { Autocomplete, TextField } from '@mui/material';

interface Carsettings {
  name: string;
  models: string[];
}
const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: { opacity: 1, y: 0, transition: { duration: 1 } },
};

function CarLoading() {
  const [carSettings, setCarSettings] = useState<Carsettings[]>([]);
  const [selectedCarName, setSelectedCarName] = useState<string>('');
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [nameValue, setNameValue] = useState<string>('');
  const [modelValue, setModelValue] = useState<string>('');
  const [yearsValue, setYearsValue] = useState<string>('');
  const [transmissionValue, setTransmissionValue] = useState<string>('');
  const [fuelValue, setFuelValue] = useState<string>('');
  const [displacementValue, setDisplacementValue] = useState<string>('');
  const [ownerValue, setOwnerValue] = useState<string>('');
  const [priceValue, setPriceValue] = useState<number | null>(null);
  const [kilometerValue, setKilometerValue] = useState<number | null>(null);
  const [psValue, setPsValue] = useState<number | null>(null);
  const [imageValue, setImageValue] = useState<string>('');

  const myOwner = ['1', '2', '3', '4', '5'];

  useEffect(() => {
    const carEmployment = async () => {
      try {
        const response = await axios.get('http://localhost:3001/caremployment');
        console.log(response.data);
        setCarSettings(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    carEmployment();
  }, []);

  const handleCarNameCheck = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectCarName = event.target.value || '';
    setSelectedCarName(selectCarName);

    const selectedCar = carSettings.find((car) => car.name === selectCarName);
    if (selectedCar) {
      setSelectedModels(selectedCar.models);
    } else {
      setSelectedModels([]);
    }
    setModelValue('');
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedCar = carSettings.find((car) => car.name === selectedCarName);

    if (!selectedCar) {
      console.log('Selected car not found!');
      return;
    }

    const employmentData = {
      img: imageValue,
      name: selectedCarName,
      model: selectedCar.models[0],
      year: yearsValue,
      fuel: fuelValue,
      transmission: transmissionValue,
      displacement: displacementValue,
      owner: ownerValue,
      price: priceValue,
      km: kilometerValue,
      ps: psValue,
    };

    try {
      await axios.post('http://localhost:3001/cars', {
        caremployment: employmentData,
      });

      setNameValue('');
      setModelValue('');
      setYearsValue('');
      setFuelValue('');
      setTransmissionValue('');
      setDisplacementValue('');
      setOwnerValue('');
      setPriceValue(null);
      setKilometerValue(null);
      setPsValue(null);
      setImageValue('');
    } catch (error) {
      console.log(error);
    }
  };

  const options = carSettings.map((option) => {
    const firstLetter = option.name.toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });
  return (
    <motion.form
      variants={variants}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-10 px-20 py-32"
    >
      <motion.div variants={images} className="flex justify-center">
        <div className="grid grid-cols-3 gap-14">
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={selectedCarName}
              onChange={handleCarNameCheck}
            >
              <option >Marke</option>
              {carSettings
                .filter(
                  (car, index, self) =>
                    self.findIndex((c) => c.name === car.name) === index
                )
                .map((car, index) => (
                  <option key={index} value={car.name}>
                    {car.name}
                  </option>
                ))}
            </select>
          <div className="invalid-feedback">Error</div>

          </div>
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={modelValue}
              onChange={(e) => setModelValue(e.target.value)}
            >
              <option value="">Model</option>
              {selectedModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={yearsValue}
              onChange={(e) => setYearsValue(e.target.value)}
            >
              <option value="">Year</option>
              {years.years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={transmissionValue}
              onChange={(e) => setTransmissionValue(e.target.value)}
            >
              <option value="">Transmission</option>
              {transmission.transmission.map((trans, index) => (
                <option value={trans} key={index}>
                  {trans}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={fuelValue}
              onChange={(e) => setFuelValue(e.target.value)}
            >
              <option value="">Fuel</option>
              {fuel.fuel.map((fueldata, index) => (
                <option value={fueldata} key={index}>
                  {fueldata}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={displacementValue}
              onChange={(e) => setDisplacementValue(e.target.value)}
            >
              <option value="">Displacement</option>
              {displacement.displacement.map((disCar, index) => (
                <option key={index} value={disCar}>
                  {disCar} ㎤
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border w-[20vw] px-2 py-3 rounded-lg"
              value={ownerValue}
              onChange={(e) => setOwnerValue(e.target.value)}
            >
              <option value="">Owner</option>
              {myOwner.map((owner, index) => (
                <option value={owner} key={index}>
                  {owner}
                </option>
              ))}
            </select>
          </div>

          <input
            type="number"
            placeholder="Price"
            value={priceValue || ''}
            className="border w-[20vw] px-2 py-3 rounded-lg"
            onChange={(e) => setPriceValue(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Km"
            value={kilometerValue || ''}
            className="border w-[20vw] px-2 py-3 rounded-lg"
            onChange={(e) => setKilometerValue(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Ps"
            value={psValue || ''}
            className="border w-[20vw] px-2 py-3 rounded-lg"
            onChange={(e) => setPsValue(Number(e.target.value))}
          />
        </div>
      </motion.div>

      <motion.div variants={images} className="grid grid-cols-3 gap-10">
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
      </motion.div>

      <motion.div variants={images}>
        <button
          className="border w-[10vw] py-2  tracking-wider myButton"
          type="submit"
        >
          SEND
        </button>
      </motion.div>
    </motion.form>
  );
}

export default CarLoading;
