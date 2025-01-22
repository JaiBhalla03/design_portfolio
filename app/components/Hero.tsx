'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import hero from '../../public/images/heroImage.png';
import hero1 from '../../public/images/heroImage1.jpg';

function Hero() {
  return (
    <div className="text-white h-screen bg-[#0d0d0d] relative rounded-b-3xl overflow-hidden">
      <motion.div
        initial={{y: 500, opacity: 0, rotate: 45}}
        animate={{y:0, opacity: 1, rotate: 0}}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          delay: 1
        }}
      >
        <Image
          src={hero}
          alt=""
          width={750}
          className="absolute left-1/2 -translate-x-1/2 -top-32"
        />
      </motion.div>
    
      {/* Animated Blurred Gradient 1 */}
      <motion.div
        initial={{ opacity: 1, scale: 1, x: 0 }}
        animate={{ opacity: 0.7, scaleY: 1.2, x: 0}}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 left-0 w-[500px] h-[200px] bg-gradient-to-r from-[#e4ec6b] to-[#eb2626] blur-3xl rotate-[20deg] rounded-[30rem]"
      ></motion.div>

      {/* Animated Blurred Gradient 2 */}
      <motion.div
        initial={{ opacity: 1, scale: 1, x: 0 }}
        animate={{ opacity: 0.7, scaleY: 1.2, x: 0}}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-gradient-to-r from-[#eb2626] to-[#BABC77] blur-3xl -rotate-[20deg] rounded-[30rem]"
      ></motion.div>

      <div className="absolute left-0 top-0 px-12 w-full flex justify-between items-center h-full">
        <div className="flex flex-col gap-10 w-[25rem]">
          <motion.p
            initial={{x: -500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 1.2
            }}
          >
            Through innovative design and strategic thinking we create brands that spark connections, inspire loyalty, and elevate your message.
          </motion.p>
          <motion.div className="border border-yellow-200 border-dashed p-1 w-48"
            initial={{x: -500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 1.4
            }}
          >
            <Image src={hero1} alt="" width={200} />
          </motion.div>
          <motion.button className="w-40 text-md bg-white p-2 text-black mt-12"
            initial={{x: -500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 1.6
            }}
          >
            LET'S CONTACT
          </motion.button>
        </div>
        <div className="w-[35rem] font-[800] text-[4.5rem] text-left leading-[5rem]">
          <motion.div 
            className="flex justify-end"
            initial={{x: 500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.2
            }}
            >CREATING</motion.div>
          <motion.div 
            className="flex justify-end"
            initial={{x: 500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.4
            }}
            >BRANDS THAT</motion.div>
          <motion.div 
            className="flex justify-end"
            initial={{x: 500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.6
            }}
            >CONNECT AND</motion.div>
          <motion.div 
            className="flex justify-end"
            initial={{x: 500, opacity: 0, rotate: -45}}
            animate={{x:0, opacity: 1, rotate: 0}}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.8
            }}
            >INSPIRE</motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
