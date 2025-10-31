import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";



function Navbar() {
  return (
    <div>
        <div className='w-[155vh] h-[5vh] border-b border-gray-300 flex justify-between items-center p-1'>
            <div className='flex items-center font-medium hover:bg-gray-300 rounded-lg trasition duration-200 p-1'>CDKL Chat Bot<MdKeyboardArrowDown /></div>
            <button className='bg-gradient-to-r from-fuchsia-500 to-pink-400 text-white font-light w-[12vh] p-1 rounded-lg'>Upgrade</button>
        </div>


    </div>
  )
}

export default Navbar