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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

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
  const [filteredCars, setFilteredCars] = useState<Cars[]>([]);
  const [selectedName, setSelectedName] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<number | undefined>();
  const [showMyMessage, setShowMyMessage] = useState<boolean>(false);

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
    const filteredCars = cars.filter((car) => {
      const isNameMatch = selectedName === '' || car.name === selectedName;
      const isModelMatch = selectedModel === '' || car.model === selectedModel;
      const isYearMatch =
        selectedYear === undefined || car.year === selectedYear;

      return isNameMatch && isModelMatch && isYearMatch;
    });
    setFilteredCars(filteredCars);
    setShowMyMessage(filteredCars.length === 0);
  };

  const handleCleanFilter = () => {
    window.location.reload();
  };

  const options = cars.map((option) => {
    const firstLetter =
      option.name[0].toUpperCase() || option.model[0].toLowerCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <div className="flex flex-col my-20 gap-10 item py-10 w-[90%] mx-auto">
      <div className="flex justify-start ml-20 font-bold text-2xl text-primary">
        <h3 className="">FIND YOUR CAR</h3>
      </div>
      <div className="md:flex grid grid-cols-1 mx-auto gap-3 items-center justify-center">
        <Autocomplete
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.name}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="All Marke"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            />
          )}
        />

        <Autocomplete
          id="grouped-demo"
          options={options.sort(
            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
          )}
          groupBy={(option) => option.firstLetter}
          getOptionLabel={(option) => option.model}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Models"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            />
          )}
        />

        <select
          className="border md:w-[25vw] w-[60vw] px-2 py-4"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
        >
          <option value="">Erstzulassung</option>
          {cars.map((car, index) => (
            <option value={car.year} key={index}>
              {car.year}
            </option>
          ))}
        </select>
      </div>
      <div className="md:flex md:justify-end mx-auto md:mr-20">
        <button
          className="border px-16 py-2 myButton text-l"
          onClick={handleCarSearch}
        >
          SEARCH
        </button>
      </div>

      {showMyMessage ? (
        <div className="flex flex-col gap-3">
          <p className="text-2xl text-center tracking-wide">
            Your car was not found.
          </p>
          <div className="flex justify-center">
            <button
              className="border px-4 py-2 active:scale-95 transition-all myButtonBlack"
              onClick={handleCleanFilter}
            >
              Click and try again
            </button>
          </div>
        </div>
      ) : (
        filteredCars.map((car, index) => (
          <div
            className="flex ml-[10vw] gap-10 px-6 py-8 w-[70vw] border"
            key={index}
          >
            <div className="border px-5">
              <Image src={car.img} alt="image" width={300} height={100} />
            </div>
            <div className="mr-38 w-[30vw]">
              <div className="flex gap-3 ">
                <p className="text-2xl font-bold"> {car.name}</p>
                <p className="text-2xl"> {car.model}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-base">{car.transmission}</p>
                <p className="flex items-center gap-3 text-l mt-2">
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
                  <span className="font-bold">Farhrzeughalter:</span>{' '}
                  {car.owner}
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
        ))
      )}
    </div>
  );
}

export default FindCar;
