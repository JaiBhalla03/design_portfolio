'use client';

import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.3, // Stagger animations for children
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
      {/* Call-to-Action Button */}
      <motion.div variants={itemVariants} className="flex justify-center w-full">
        <button className="bg-black text-white w-[20rem] md:w-[30rem] text-4xl md:text-[3rem] font-semibold p-4 rounded-full">
          LET'S TALK
        </button>
      </motion.div>

      {/* Text and Form Section */}
      <motion.div variants={itemVariants} className="pt-10">
        <div className="w-[22rem]">
          If you need assistance with your portfolio, feel free to reach out to me, and let's have a chat.
        </div>
        <form className="py-8 flex items-center gap-4">
          <input
            placeholder="Enter Email"
            className="bg-gray-100 rounded-md p-2 w-64 text-center"
          />
          <button className="bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-2">
            Submit
          </button>
        </form>
      </motion.div>

      {/* Links and Contact Section */}
      <motion.div variants={itemVariants} className="py-4 border-b-2 border-gray-200 flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between text-sm">
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
          <li>Facebook</li>
          <li>Linkedin</li>
          <li>Instagram</li>
          <li>Insights</li>
        </ul>
        <div>Phone: +91-9415483472</div>
      </motion.div>

      {/* Footer Section */}
      <motion.div variants={itemVariants} className="flex items-center justify-center text-gray-500 text-sm py-4">
        Designed by Jai Bhalla
      </motion.div>
    </motion.div>
  );
}

export default Contact;
