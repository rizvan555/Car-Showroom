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
  year: string[];
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
  const [nameValue, setNameValue] = useState<string>('');
  const [modelValue, setModelValue] = useState<string>('');
  const [yearsValue, setYearsValue] = useState<string>('');
  const [transmissionValue, setTransmissionValue] = useState<string>('');
  const [fuelValue, setFuelValue] = useState<string>('');
  const [displacementValue, setDisplacementValue] = useState<string>('');
  const [ownerValue, setOwnerValue] = useState<string>('');
  const [priceValue, setPriceValue] = useState<number | null>(null);
  const [kilometerValue, setKilometerValue] = useState<number>(0);
  const [psValue, setPsValue] = useState<number | null>(null);
  const [imageValue, setImageValue] = useState<string>('');
  const [imageValue1, setImageValue1] = useState<string>('');
  const [imageValue2, setImageValue2] = useState<string>('');
  const [imageValue3, setImageValue3] = useState<string>('');
  const [imageValue4, setImageValue4] = useState<string>('');

  const [submittedValuesName, setSubmittedValuesName] = useState<{
    name: string;
  }>({ name: '' });
  const [submittedValuesModels, setSubmittedValuesModels] = useState<{
    models: string;
  }>({ models: '' });
  const [submittedValuesYears, setSubmittedValuesYears] = useState<{
    year: string;
  }>({ year: '' });
  const [submittedValuesTransmission, setSubmittedValuesTransmission] =
    useState<{
      transmission: string;
    }>({ transmission: '' });
  const [submittedValuesFuel, setSubmittedValuesFuel] = useState<{
    fuel: string;
  }>({ fuel: '' });
  const [submittedValuesDisplacement, setSubmittedValuesDisplacement] =
    useState<{
      displacement: string;
    }>({ displacement: '' });
  const [submittedValuesOwner, setSubmittedValuesOwner] = useState<{
    owner: string;
  }>({ owner: '' });
  const [submittedValuesPrice, setSubmittedValuesPrice] = useState<{
    price: number;
  }>({ price: 0 });
  const [submittedValuesKilometer, setSubmittedValuesKilometer] = useState<{
    km: number;
  }>({ km: 0 });
  const [submittedValuesPs, setSubmittedValuesPs] = useState<{
    ps: number;
  }>({ ps: 0 });
  const [submittedValuesImage, setSubmittedValuesImage] = useState<{
    img: string;
  }>({ img: '' });
  const [submittedValuesImage1, setSubmittedValuesImage1] = useState<{
    img1: string;
  }>({ img1: '' });
  const [submittedValuesImage2, setSubmittedValuesImage2] = useState<{
    img2: string;
  }>({ img2: '' });
  const [submittedValuesImage3, setSubmittedValuesImage3] = useState<{
    img3: string;
  }>({ img3: '' });
  const [submittedValuesImage4, setSubmittedValuesImage4] = useState<{
    img4: string;
  }>({ img4: '' });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      nameValue ||
      modelValue ||
      yearsValue ||
      transmissionValue ||
      fuelValue ||
      displacementValue ||
      ownerValue ||
      priceValue ||
      kilometerValue ||
      psValue ||
      imageValue ||
      imageValue1 ||
      imageValue2 ||
      imageValue3 ||
      imageValue4
    ) {
      const employmentData = {
        name: nameValue,
        models: modelValue,
        year: yearsValue,
        fuel: fuelValue,
        transmission: transmissionValue,
        displacement: displacementValue,
        owner: ownerValue,
        price: priceValue,
        km: kilometerValue,
        ps: psValue,
        img: imageValue,
        img1: imageValue1,
        img2: imageValue2,
        img3: imageValue3,
        img4: imageValue4,
      };

      try {
        await axios.post('http://localhost:3001/cars', {
          caremployment: employmentData,
        });

        setSubmittedValuesName({ name: nameValue });
        setSubmittedValuesModels({ models: modelValue });
        setSubmittedValuesYears({ year: yearsValue });
        setSubmittedValuesTransmission({ transmission: transmissionValue });
        setSubmittedValuesFuel({ fuel: fuelValue });
        setSubmittedValuesDisplacement({ displacement: displacementValue });
        setSubmittedValuesOwner({ owner: ownerValue });
        setSubmittedValuesPrice({ price: priceValue || 0 });
        setSubmittedValuesKilometer({ km: kilometerValue || 0 });
        setSubmittedValuesPs({ ps: psValue || 0 });

        setNameValue('');
        setModelValue('');
        setYearsValue('');
        setFuelValue('');
        setTransmissionValue('');
        setDisplacementValue('');
        setOwnerValue('');
      } catch (error) {
        console.log(error);
      }
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
              onChange={handleCarNameCheck}
            >
              <option value="">Marke</option>
              {carsettings.map((car, index) => (
                <option key={index}>{car.name}</option>
              ))}
            </select>
          </div>
          <div>
            <select className="border w-[12vw] px-2 py-1">
              <option value="">Model</option>
              {selectedModels.map((model, index) => (
                <option key={index} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border w-[12vw] px-2 py-1">
              <option value="">Year</option>
              {years.years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border w-[12vw] px-2 py-1">
              <option value="">Transmission</option>
              {transmission.transmission.map((trans, index) => (
                <option value="" key={index}>
                  {trans}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border w-[12vw] px-2 py-1">
              <option value="">Fuel</option>
              {fuel.fuel.map((fueldata, index) => (
                <option value="" key={index}>
                  {fueldata}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select className="border w-[12vw] px-2 py-1">
              <option value="">Displacement</option>
              {displacement.displacement.map((disCar, index) => (
                <option key={index}>{disCar} ㎤</option>
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
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
