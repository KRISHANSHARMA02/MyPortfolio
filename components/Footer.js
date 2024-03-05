import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className='flex gap-8 bg-black text-white font-raleway w-full h-min item-center sticky p-3 bottom-0'>
        <p className='text-3xl font-logo ml-3 border-r-2 p-3 min-[600px] text-xl p-2'>Krishan Sharma </p>
        <p className='flex gap-2 items-center'>copyright <FaRegCopyright /> 2024</p>
      </div>
    </div>
  )
}

export default Footer
