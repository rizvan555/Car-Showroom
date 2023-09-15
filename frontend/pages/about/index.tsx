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
    x: 30,
  },
  show: { opacity: 1, x: 0, transition: { duration: 1 } },
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
      <div>
        <motion.div variants={images} className="flex items-center gap-8 mb-20">
          <h1 className="md:text-6xl text-4xl font-bold z-10">ABOUT US</h1>
          <hr className="md:hr-line z-10" />
        </motion.div>
        <motion.div
          variants={images}
          className="mb-16 z-10 aboutNotBg md:w-[90vw] w-[65vw]"
        >
          <p className="text-xl ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            similique quia quae et omnis cumque eveniet obcaecati ratione. Fugit
            voluptate ipsa dolore dolor cupiditate tenetur dignissimos eligendi
            eum blanditiis aperiam accusantium in cumque consectetur sequi,
            saepe quod nesciunt expedita, omnis quasi tempore fuga quaerat
            suscipit. Sed quisquam dolor harum dolorem?
          </p>
          <p className="text-xl">{visibilityAbout ? aboutInfo : ''}</p>
        </motion.div>
        <motion.div
          className="z-10 cursor-pointer aboutNotBg"
          onClick={() => {
            setVisibilityAbout(!visibilityAbout);
          }}
        >
          <motion.button
            variants={images}
            className="border py-3 px-10 bg-white text-black cursor-pointer myButton "
          >
            READ MORE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
