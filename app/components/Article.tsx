'use client';

import React from 'react';
import ArticleCard from './utils/ArticleCard';
import show1 from '../../public/images/show1.jpg';
import show2 from '../../public/images/show2.jpg';
import show3 from '../../public/images/show3.jpg';
import { motion } from 'framer-motion';

function Article() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.3, // Stagger animation for child components
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
      className="pt-20 px-12"
    >
      {/* Header Section */}
      <motion.div variants={itemVariants} className="text-[3rem] font-[500]">
        LATEST ARTICLE
      </motion.div>

      {/* Article Cards */}
      <motion.div
        variants={containerVariants}
        className="flex flex-col md:flex-row w-full justify-between pt-10"
      >
        <motion.div variants={itemVariants}>
          <ArticleCard
            source={show3}
            heading="WHAT YOUR CLOTHING"
            para="January 20, 2024"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ArticleCard
            source={show2}
            heading="CREATING UNIQUE PIECES"
            para="February 13, 2024"
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <ArticleCard
            source={show1}
            heading="UNLEASH THE POTENTIAL"
            para="July 15, 2024"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Article;
