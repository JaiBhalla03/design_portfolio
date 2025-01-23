'use client';

import React from 'react';
import trend1 from '../../public/images/trend1.jpg';
import trend2 from '../../public/images/trend2.jpg';
import trend3 from '../../public/images/trend3.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Trending() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.3, // Delays between children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="pt-20 md:pt-32 px-2 md:px-12"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="pb-10 flex flex-col md:flex-row w-full justify-between items-center"
      >
        <div className="text-2xl md:text-[3rem] font-[500]">MY TRENDY WORK</div>
        <div className="text-lg">VIEW ALL</div>
      </motion.div>

      {/* Trending Items */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row w-full items-center border-b-2 border-gray-300 py-4 justify-between"
      >
        <motion.div variants={itemVariants} className="text-xl text-gray-600">
          (01)
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src={trend1} alt="" width={400} />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full md:w-[30rem]">
          <div className="text-2xl md:text-4xl font-semibold">ON-TREND SHOWCASE</div>
          <div className="text-md text-gray-600">
            A curated collection of cutting-edge fashion pieces that define
            today's style and set tomorrow's trends.
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row w-full items-center border-b-2 border-gray-300 py-4 justify-between"
      >
        <motion.div variants={itemVariants} className="text-xl text-gray-600">
          (02)
        </motion.div>
        <motion.div variants={itemVariants} className="w-full md:w-[30rem]">
          <div className="text-2xl md:text-4xl font-semibold">ON-TREND SHOWCASE</div>
          <div className="text-md text-gray-600">
            A curated collection of cutting-edge fashion pieces that define
            today's style and set tomorrow's trends.
          </div>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src={trend2} alt="" width={400} />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row w-full items-center border-b-2 border-gray-300 py-4 justify-between"
      >
        <motion.div variants={itemVariants} className="text-xl text-gray-600">
          (03)
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src={trend3} alt="" width={400} />
        </motion.div>
        <motion.div variants={itemVariants} className="w-full md:w-[30rem]">
          <div className="text-2xl md:text-4xl font-semibold">ON-TREND SHOWCASE</div>
          <div className="text-md text-gray-600">
            A curated collection of cutting-edge fashion pieces that define
            today's style and set tomorrow's trends.
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Trending;
