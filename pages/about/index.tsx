import React from 'react';
import bmw1 from '../../resourse/images/bmw1.jpeg';

function About() {
  return (
    <div
      className="flex flex-col justify-center h-[100vh] mx-auto px-20 text-white relative"
      style={{
        backgroundImage: `url(${bmw1.src})`,
        backgroundSize: 'cover',
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ backgroundColor: 'rgba(0,0,0,0.6' }}
      ></div>
      <div className="flex items-center gap-8 mb-20">
        <h1 className="text-6xl font-bold z-10">ABOUT US</h1>
        <hr className="hr-line z-10" />
      </div>
      <div className="mb-16 z-10">
        <p className="text-xl ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
          similique quia quae et omnis cumque eveniet obcaecati ratione. Fugit
          voluptate ipsa dolore dolor cupiditate tenetur dignissimos eligendi
          eum blanditiis aperiam accusantium in cumque consectetur sequi, saepe
          quod nesciunt expedita, omnis quasi tempore fuga quaerat suscipit. Sed
          quisquam dolor harum dolorem?
        </p>
      </div>
      <div className='z-10'>
        <button className="border py-3 px-10 bg-white text-black myButton">
          READ MORE
        </button>
      </div>
    </div>
  );
}

export default About;
