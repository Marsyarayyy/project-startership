import React from 'react'
import Image from "next/image";
import Button from './Button';

export default function Navbar() {
  return (
    <div className='flex flex-row px-10 py-5 items-center justify-between bg-[rgba(53,53,53,1)] text-white font-bold sticky top-0 z-50' >
         <Image src="svg/logo.svg" alt="logo" width={200} height={200} />
    
      <div className='flex flex-row gap-10 items-center justify-center text-[18px] font-medium'>
          <a href="/  ">Courses</a>
          <a href="about">About</a>
          <a href="contact">Contact</a>
      </div>
         <Button >Sign Up</Button>
    </div>
  )
}


