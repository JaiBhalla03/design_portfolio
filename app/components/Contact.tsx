import React from 'react'

function Contact() {
  return (
    <div className='pt-32 px-12'>
        <div className='flex justify-center w-full'>
            <button className='bg-black text-white w-[30rem] text-[3rem] font-semibold p-4 rounded-full'>LET'S TALK</button>
        </div>
        <div className='pt-10'>
            <div className='w-[22rem]'>If you need assitance with your portfolio, feel free to reach out to me, and let's have a chat.</div>
            <form className='py-8 flex items-center gap-4'>
                <input placeholder='Enter Email' className='bg-gray-100 rounded-md p-2 w-64 text-center'/> 
                <button className='bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-2'>Submit</button>
            </form>
            <div className='py-4 border-b-2 border-gray-200 flex items-center justify-between text-sm'>
                <ul className='flex items-center gap-20'>
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>Insights</li>
                </ul>
                <div>Phone: +91-9415483472</div>
            </div>
            <div className='flex items-center justify-center text-gray-500 text-sm py-4'>
                Designed by Jai Bhalla
            </div>
        </div>
    </div>
  )
}

export default Contact