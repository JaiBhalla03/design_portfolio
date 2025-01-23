'use client';

import React from 'react';
import AboutImage from '../../public/images/aboutImage.jpg';
import Image from 'next/image';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="pt-10 md:pt-20 bg-white px-2 md:px-12 flex flex-col md:flex-row items-end justify-between w-full"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="w-full md:w-2/3 h-full flex flex-col gap-4 md:gap-8"
      >
        <div className="text-gray-500 text-md">ABOUT ME</div>
        <div className="text-2xl md:text-[3rem] font-[500] leading-[1.5rem] md:leading-[3rem]">
          CRAFTING AESTHETIC HARMONY AND WELLNESS EXPERTISE
        </div>
        <div className="texl-lg md:text-xl">
          I specialize in designing sleek, stylish, and visually captivating
          fashion portfolios that make a statement
        </div>
        <div className="flex gap-8 pt-4 md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl md:text-[3rem] font-[500]">150+</div>
            <div>Successful projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl md:text-[3rem] font-[500]">+72%</div>
            <div>Client revenue</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="w-96 h-full flex flex-col justify-end"
      >
        <Image src={AboutImage} alt="" className="w-full object-contain" />
      </motion.div>
    </motion.div>
  );
}

export default About;
