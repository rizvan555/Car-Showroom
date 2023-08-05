import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  BsFillFuelPumpDieselFill,
  BsFillPersonFill,
  BsSpeedometer2,
} from 'react-icons/bs';
import { MdAppRegistration } from 'react-icons/md';
import { TbRoad } from 'react-icons/tb';
import { PiEngineDuotone } from 'react-icons/pi';
import Image from 'next/image';

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

interface FilteredCarsProps {
  filteredCars?: Cars[];
  isFilteredCarsOpen: boolean;
  handleCloseFilteredCars: () => void;
}

function FilteredCars({
  filteredCars,
  isFilteredCarsOpen,
  handleCloseFilteredCars,
}: FilteredCarsProps) {
  const [selectedImages, setSelectedImages] = useState<string | null>(null);

  const handleImages = (carImg: any) => {
    setSelectedImages(carImg);
  };

  if (!filteredCars || filteredCars.length === 0) {
    return null;
  }
  return (
    <div className="absolute">
      {filteredCars.map((car, index) => (
        <div
          key={index}
          className={`absolute flex justify-center items-center gap-8 w-[95vw] h-[125vh] bg-white border border-gray-300 mx-6 item ${
            isFilteredCarsOpen ? 'visible' : 'invisible'
          }`}
        >
          <button
            onClick={handleCloseFilteredCars}
            className="absolute top-7 right-10"
          >
            <AiOutlineCloseCircle size={30} />
          </button>
          <div className="flex flex-col gap-5 items-center ">
            <div className="flex flex-col border rounded px-10 ml-4 w-[55vw] h-[50vh] item">
              {selectedImages ? (
                <Image
                  src={selectedImages}
                  alt="image"
                  width={500}
                  height={300}
                />
              ) : (
                <Image src={car.img} alt="image" width={500} height={300} />
              )}
            </div>
            <div className="flex gap-5 w-[55vw] ml-4">
              <button className="border px-2 w-[14vw] hover:scale-110 transition-all item">
                <Image
                  src={car.img1}
                  alt="image"
                  width={150}
                  height={50}
                  onClick={() => handleImages(car.img1)}
                />
              </button>
              <button className="border px-2 w-[14vw] hover:scale-110 transition-all item">
                <Image
                  src={car.img2}
                  alt="image"
                  width={150}
                  height={50}
                  onClick={() => handleImages(car.img2)}
                />
              </button>
              <button className="border px-2 w-[14vw] hover:scale-110 transition-all item">
                <Image
                  src={car.img3}
                  alt="image"
                  width={150}
                  height={50}
                  onClick={() => handleImages(car.img3)}
                />
              </button>
              <button className="border px-2 w-[14vw] hover:scale-110 transition-all item">
                <Image
                  src={car.img4}
                  alt="image"
                  width={150}
                  height={50}
                  onClick={() => handleImages(car.img4)}
                />
              </button>
            </div>
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

export default FilteredCars;
