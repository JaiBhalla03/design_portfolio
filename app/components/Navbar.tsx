import React from 'react'

function Navbar() {
  return (
    <nav className='text-white px-12 py-5 flex justify-between items-center fixed w-full bg-transparent z-50'>
        <div className='text-xl font-bold'>ellion</div>
        <ul className='flex justify-between items-center gap-8 text-md'>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>WORK</li>
            <li>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar
