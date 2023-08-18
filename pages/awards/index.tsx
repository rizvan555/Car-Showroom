import axios from 'axios';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { AiFillCar } from 'react-icons/ai';
import { GiTrophyCup } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import { HiOutlineEmojiHappy } from 'react-icons/hi';

const Awards: NextPage = () => {
  const [cars, setCars] = useState([]);

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

  return (
    <div className="flex justify-around items-center bg-[rgba(0,0,0,0.9)] text-white py-[10vh]">
      <div className="flex flex-col justify-center items-center gap-2">
        <AiFillCar size={40} />
        <p className="font-bold tracking-wider">CAR STOCKS</p>
        <span>{cars.length}</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <GiTrophyCup size={40} />
        <p className="font-bold tracking-wider">AWARDS</p>
        <span>600+</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <FaTruck size={40} />
        <p className="font-bold tracking-wider">DEALER BRANCHES</p>
        <span>500+</span>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <HiOutlineEmojiHappy size={40} />
        <p className="font-bold tracking-wider">HAPPY CLIENTS</p>
        <span>10000+</span>
      </div>
    </div>
  );
};

export default Awards;
