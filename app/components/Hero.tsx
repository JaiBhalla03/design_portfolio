import React from 'react'
import hero from '../../public/images/heroImage.png'
import hero1 from '../../public/images/heroImage1.jpg'
import Image from 'next/image'

function Hero() {
  return (
    <div className="h-screen bg-[#0d0d0d] relative rounded-b-3xl overflow-hidden">
      <Image
        src={hero}
        alt=""
        width={750}
        className="absolute left-1/2 -translate-x-1/2 -top-32"
      />
      {/* Blurred Gradient 1 */}
      <div
        className="absolute bottom-10 left-0 w-[500px] h-[200px] bg-gradient-to-r from-[#e4ec6b] to-[#eb2626] blur-3xl rotate-[20deg] rounded-[30rem]"
      ></div>

      {/* Blurred Gradient 2 */}
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-gradient-to-r from-[#eb2626] to-[#BABC77] blur-3xl -rotate-[20deg] rounded-[30rem]"
      ></div>

      <div className="absolute left-0 top-0 px-12 w-full flex justify-between items-center h-full">
        <div className='flex flex-col gap-10 w-[25rem]'>
            <p>Through innovative design and strategic thinking we create brands that spark connections, inspire loyalty, and elevate your message.</p>
            <div className='border border-yellow-200 border-dashed p-1 w-48'>
                <Image src={hero1} alt='' width={200}/>
            </div>
            <button className='w-40 text-md bg-white p-2 text-black mt-12'>
                LET'S CONTACT
            </button>
        </div>
        <div className="w-[35rem] font-[800] text-[4.5rem] text-left leading-[5rem]">
          <div className='flex justify-end'>CREATING</div> 
          <div className='flex justify-end'>BRANDS THAT</div> 
          <div className='flex justify-end'>CONNECT AND</div> 
          <div className='flex justify-end'>INSPIRE</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
