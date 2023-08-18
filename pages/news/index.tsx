import React from 'react';
import Mercedes from '../../resourse/images/Mercedes.webp';
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

function News() {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center mx-auto px-20 py-32 text-white newsBg"
    >
      <motion.div variants={images}>
        <div className="flex items-center gap-8  mb-20">
          <h1 className="text-6xl font-bold tracking-wider z-10">NEWS</h1>
          <hr className="hr-line-news z-10" />
        </div>
        <div className="mb-16 aboutNotBg z-10">
          <p className="text-xl z-10">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
            similique quia quae et omnis cumque eveniet obcaecati ratione. Fugit
            voluptate ipsa dolore dolor cupiditate tenetur dignissimos eligendi
            eum blanditiis aperiam accusantium in cumque consectetur sequi,
            saepe quod nesciunt expedita, omnis quasi tempore fuga quaerat
            suscipit. Sed quisquam dolor harum dolorem? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Placeat similique quia quae et
            omnis cumque eveniet obcaecati ratione.
          </p>
        </div>
        <div className="z-10 aboutNotBg">
          <button className="border py-3 px-10 bg-white text-black myButton z-10">
            READ MORE
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default News;
