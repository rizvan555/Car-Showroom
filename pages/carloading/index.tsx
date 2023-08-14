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

function CarLoading() {
  const [carsettings, setCarsettings] = useState<Carsettings[]>([]);
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
  const [imageValue1, setImageValue1] = useState<string>('');
  const [imageValue2, setImageValue2] = useState<string>('');
  const [imageValue3, setImageValue3] = useState<string>('');
  const [imageValue4, setImageValue4] = useState<string>('');

  const myOwner = ['1', '2', '3', '4', '5'];

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

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageValue(reader.result as string);
        setImageValue1(reader.result as string);
        setImageValue2(reader.result as string);
        setImageValue3(reader.result as string);
        setImageValue4(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImageValue('');
      setImageValue1('');
      setImageValue2('');
      setImageValue3('');
      setImageValue4('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const selectedCar = carsettings.find((car) => car.name === selectedCarName);

    if (!selectedCar) {
      console.log('Selected car not found!');
      return;
    }

    const employmentData = {
      img: imageValue,
      img1: imageValue1,
      img2: imageValue2,
      img3: imageValue3,
      img4: imageValue4,
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
      setImageValue1('');
      setImageValue2('');
      setImageValue3('');
      setImageValue4('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-10 px-20 py-32"
    >
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-14">
          <div>
            <select
              className="border w-[12vw] px-2 py-1"
              value={nameValue}
              onChange={handleCarNameCheck}
            >
              <option>Marke</option>
              {carsettings.map((car, index) => (
                <option key={index} value={car.name}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className="border w-[12vw] px-2 py-1"
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
              className="border w-[12vw] px-2 py-1"
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
              className="border w-[12vw] px-2 py-1"
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
              className="border w-[12vw] px-2 py-1"
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
              className="border w-[12vw] px-2 py-1"
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
              className="border w-[12vw] px-2 py-1"
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
            className="border w-[12vw] px-2 py-1"
            onChange={(e) => setPriceValue(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Km"
            value={kilometerValue || ''}
            className="border w-[12vw] px-2 py-1"
            onChange={(e) => setKilometerValue(Number(e.target.value))}
          />
          <input
            type="number"
            placeholder="Ps"
            value={psValue || ''}
            className="border w-[12vw] px-2 py-1"
            onChange={(e) => setPsValue(Number(e.target.value))}
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-10">
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 0)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 1)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 2)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 3)}
          />
        </div>
        <div>
          <input
            type="file"
            name="image"
            className="border"
            accept="image/*"
            onChange={(e) => handleImageChange(e, 4)}
          />
        </div>
      </div>

      <div>
        <button
          className="border w-[10vw] rounded tracking-wider"
          type="submit"
        >
          SEND
        </button>
      </div>
    </form>
  );
}

export default CarLoading;
