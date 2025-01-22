import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Define the props type
interface ArticleCardProps {
  source: string | StaticImageData; 
  heading: string;
  para: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ source, heading, para }) => {
  return (
    <div className='flex flex-col gap-2 hover:scale-110 transition-all duration-300 w-[32%] h-80'>
      <Image src={source} alt={heading} className='w-full object-fit h-72 object-cover'/>
      <div className='text-gray-600 text-sm flex w-full items-center justify-between'>
        <div>{para}</div>    
        <div>Marketing</div>
      </div>
      <div className='text-xl font-semibold'>{heading}</div>
    </div>
  );
};

export default ArticleCard;
