import React from 'react';
import Mercedes from '../../resourse/images/Mercedes.webp';

function About() {
  return (
    <div
      className="flex flex-col justify-center h-[100vh] mx-auto px-20 text-white"
      style={{
        backgroundImage: `url(${Mercedes.src})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="flex items-center gap-8  mb-20">
        <h1 className="text-6xl font-bold">ABOUT US</h1>
        <hr className="hr-line" />
      </div>
      <div className="mb-16">
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          similique quia quae et omnis cumque eveniet obcaecati ratione. Fugit
          voluptate ipsa dolore dolor cupiditate tenetur dignissimos eligendi
          eum blanditiis aperiam accusantium in cumque consectetur sequi, saepe
          quod nesciunt expedita, omnis quasi tempore fuga quaerat suscipit. Sed
          quisquam dolor harum dolorem?
        </p>
      </div>
      <div>
        <button className="border py-3 px-10 bg-white text-black ">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default About;
