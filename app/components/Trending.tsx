import React from 'react'
import trend1 from '../../public/images/trend1.jpg';
import trend2 from '../../public/images/trend2.jpg';
import trend3 from '../../public/images/trend3.jpg';
import Image from 'next/image';

function Trending() {
  return (
    <div className='pt-32 px-12'>
        <div className='pb-10 flex w-full justify-between items-center'>
            <div className='text-[3rem] font-[500]'>MY TRENDY WORK</div>
            <div className='text-lg'>VIEW ALL</div>
        </div>
        <div className='flex w-full items-center border-b-2 border-gray-300 py-4 justify-between'>
            <div className='text-xl text-gray-600'>(01)</div>
            <Image src={trend1} alt='' width={400}/>
            <div className='w-[30rem]'>
                <div className='text-4xl font-semibold'>ON-TREND SHOWCASE</div>
                <div className='text-md text-gray-600'>A curated collection of cutting-edge fashion pieces that define today's style and set tomorrow's trends.</div>
            </div>
        </div>
        <div className='flex w-full items-center border-b-2 border-gray-300 py-4 justify-between'>
            <div className='text-xl text-gray-600'>(02)</div>
            <div className='w-[30rem]'>
                <div className='text-4xl font-semibold'>ON-TREND SHOWCASE</div>
                <div className='text-md text-gray-600'>A curated collection of cutting-edge fashion pieces that define today's style and set tomorrow's trends.</div>
            </div>
            <Image src={trend2} alt='' width={400}/>
        </div>
        <div className='flex w-full items-center border-b-2 border-gray-300 py-4 justify-between'>
            <div className='text-xl text-gray-600'>(03)</div>
            <Image src={trend3} alt='' width={400}/>
            <div className='w-[30rem]'>
                <div className='text-4xl font-semibold'>ON-TREND SHOWCASE</div>
                <div className='text-md text-gray-600'>A curated collection of cutting-edge fashion pieces that define today's style and set tomorrow's trends.</div>
            </div>
        </div>
    </div>
  )
}

export default Trending