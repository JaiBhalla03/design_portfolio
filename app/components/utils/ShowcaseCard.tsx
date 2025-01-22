import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Define the props type
interface ShowcaseCardProps {
  source: string | StaticImageData; 
  heading: string;
  para: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ source, heading, para }) => {
  return (
    <div className='flex flex-col gap-2 hover:scale-110 transition-all duration-300 w-[32%] h-80'>
      <Image src={source} alt={heading} className='w-full object-fit h-72 object-cover'/>
      <div className='text-xl font-semibold'>{heading}</div>
      <div className='text-gray-600 text-sm'>{para}</div>
    </div>
  );
};

export default ShowcaseCard;
