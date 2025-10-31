import React from 'react'
import { AiOutlineWechatWork } from "react-icons/ai";
import { LuSearch } from "react-icons/lu";
import { LuLibrary } from "react-icons/lu";
import { IoFlowerOutline } from "react-icons/io5";
import { VscLayoutSidebarRightOff } from "react-icons/vsc";
import CDKL_Logo from '../Images/CDKL_Logo.png';



function Sidebar() {
  return (
    <div className='bg-stone-900 w-[25vh] h-screen p-3 border-r-2 border-gray-200'>
        <div className='flex justify-between h-[5vh] mb-7'>
            <div className='text-white'>
                <img src={CDKL_Logo} className='h-auto w-[6vh] z-[1]'></img>
            </div>
            <div className='text-white hover:text-stone-500 transition duration-200'><VscLayoutSidebarRightOff size={17}/> </div>
        </div>
        <div className='flex flex-col mb-5 '>
            <div className='text-white font-light text-[14px] flex items-center gap-1 cursor-pointer hover:bg-stone-800 p-2 rounded-lg transition duration-200'>
            <AiOutlineWechatWork size={18}/>
            New chat </div>

            <div className='text-white font-light text-[14px] flex items-center gap-1 cursor-pointer hover:bg-stone-800 p-2 rounded-lg transition duration-200'>
            <LuSearch size={16}/>

            Search chat </div>
            <div className='text-white font-light text-[14px] flex items-center gap-1 cursor-pointer hover:bg-stone-800 p-2 rounded-lg transition duration-200'>
            <LuLibrary size={18}/>
            Library </div>

            <div className='text-white font-light text-[14px] flex items-center gap-1 cursor-pointer hover:bg-stone-800 p-2 rounded-lg transition duration-200'>
            <IoFlowerOutline />
            Explore
            </div>
        </div>

        <h1 className='text-gray-400 font-light text-[14px]'>Chats</h1>
    </div>
  )
}

export default Sidebar