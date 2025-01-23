'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ShowcaseCard from './utils/ShowcaseCard';
import show1 from '../../public/images/show1.jpg';
import show2 from '../../public/images/show2.jpg';
import show3 from '../../public/images/show3.jpg';

function Showcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="pt-10 md:pt-20 px-2 md:px-12"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row w-full justify-between items-center"
      >
        <div className="text-2xl md:text-[3rem] font-[500]">FASHION SHOWCASE</div>
        <div className="text-lg">VIEW ALL</div>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="flex flex-col md:flex-row w-full justify-between pt-10 md:pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="flex-shrink-0"
        >
          <ShowcaseCard
            source={show1}
            heading="STYLE IN FOCUS"
            para="Elevating Style Through Design."
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          className="flex-shrink-0"
        >
          <ShowcaseCard
            source={show2}
            heading="FASHION EDIT"
            para="Curated Trends, Timeless Styles."
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.4 }}
          className="flex-shrink-0"
        >
          <ShowcaseCard
            source={show3}
            heading="CHIC IN MOTION"
            para="Where Style Meets Movement."
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Showcase;
