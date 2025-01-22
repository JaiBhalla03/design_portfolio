import React from 'react'
import { IoMdArrowBack, IoMdArrowForward } from 'react-icons/io'
import trend3 from '../../public/images/trend3.jpg';
import Image from 'next/image';

function Clients() {
  return (
    <div className='px-12 pt-20'>
        <div className='text-[3rem] font-[500]'>CLIENTS FEEDBACK</div>
        <div className='flex justify-between w-full items-center'>
            <button className='p-6 flex items-center justify-center bg-gray-100 rounded-full'>
                <IoMdArrowBack  size={20} className='text-gray-400'/>
            </button>
            <div className='px-24 py-10 flex flex-col gap-4'>
                <div className='text-3xl font-[400] text-center'>"Great experience from start to finish. The team understood our needs perfectly and delivered excellent results. We're thrilled with the outcome!"</div>
                <div className='text-lg text-center'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                </div>
                <div className='flex justify-center gap-2'>
                    <Image src={trend3} alt='' className='rounded-full h-12 w-12 object-cover'/>
                    <div>
                        <div className='font-semibold text-lg'>David Laid</div>
                        <div className='text-gray-600 text-md'>Founder at Zara Shop</div>
                    </div>
                </div>
            </div>
            <button className='p-6 flex items-center justify-center bg-gray-100 rounded-full'>
                <IoMdArrowForward  size={20} className='text-gray-400'/>
            </button>
        </div>
    </div>
  )
}

export default Clients