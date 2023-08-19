import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

function About() {
  const [visibilityAbout, setVisibilityAbout] = useState<boolean>(false);
  const aboutInfo = [
    ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeatsimilique quia quae et omnis cumque eveniet obcaecati ratione.',
  ];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center h-[100vh] mx-auto px-20 text-white relative aboutBg "
    >
      <motion.div variants={images}>
        <div className="flex items-center gap-8 mb-20">
          <h1 className="text-6xl font-bold z-10">ABOUT US</h1>
          <hr className="hr-line z-10" />
        </div>
        <div className="mb-16 z-10 aboutNotBg">
          <p className="text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            similique quia quae et omnis cumque eveniet obcaecati ratione. Fugit
            voluptate ipsa dolore dolor cupiditate tenetur dignissimos eligendi
            eum blanditiis aperiam accusantium in cumque consectetur sequi,
            saepe quod nesciunt expedita, omnis quasi tempore fuga quaerat
            suscipit. Sed quisquam dolor harum dolorem?
          </p>
          <p className="text-xl">{visibilityAbout ? 'Lorem ipsum...' : ''}</p>
        </div>
        <div className="z-10 aboutNotBg">
          <button
            className="border py-3 px-10 bg-white text-black cursor-pointer myButton "
            onClick={() => {
              console.log('Button clicked');
              setVisibilityAbout(!visibilityAbout);
            }}
          >
            READ MORE
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
