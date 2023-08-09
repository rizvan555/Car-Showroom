import Image from 'next/image';
import React from 'react';

function CarLoading() {
  return (
    <div className="flex gap-10 p-20">
      <div>
        <select className="border w-[10vw]">
          <option value="">Marke</option>
          <Image src={''} alt="" width={300} height={100} />
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Model</option>
        </select>
      </div>
      <div>
        <select className="border w-[10vw]">
          <option value="">Year</option>
        </select>
      </div>
      <div className="border">
        <input type="file" />
      </div>
    </div>
  );
}

export default CarLoading;
