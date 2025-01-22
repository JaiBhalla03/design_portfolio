import React from 'react'
import AboutImage from '../../public/images/aboutImage.jpg'
import Image from 'next/image'

function About() {
  return (
    <div className='pt-20 bg-white px-12 flex items-end justify-between w-full'>
        <div className='w-2/3 h-full flex flex-col gap-8'>
            <div className='text-gray-500 text-md'>ABOUT ME</div>
            <div className='text-[3rem] font-[500] leading-[3rem]'>CRAFTING AESTHETIC HARMONY AND WELLNESS EXPERTISE</div>
            <div className='text-xl'>I specialize in designing sleek, stylish, and visually captivating fashion portfolios that make a statement</div>
            <div className='flex gap-8 pt-8'>
                <div>
                    <div className='text-[3rem] font-[500]'>150+</div>
                    <div>Successful projects</div>
                </div>
                <div>
                    <div className='text-[3rem] font-[500]'>+72%</div>
                    <div>Client revenue</div>
                </div>
            </div>
        </div>
        <div className='w-96 h-full flex flex-col justify-end'>
            <Image src={AboutImage} alt='' className='w-full object-contain'/>
        </div>
    </div>
  )
}

export default About