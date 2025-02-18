import React from 'react'
import Image from "next/image";
import Button from './component/Button';
import BtnOut from './component/BtnOut';


  


export default function page() {
  return (
    <div className="flex flex-row items-center justify-center bg-black text-white gap-10 min-h-screen  ">
      <div className='flex flex-col gap-5'>
        <h1 className=' text-6xl font-bold'>Learn to code with <br /><span className='text-[#4CAF4F] font-bold'>Masha</span></h1> 
        <p className=' w-3/4'>Start your journey to becoming a prodessional developer with our intesive bootcamp program.</p>
        <div className='flex flex-row gap-5'>
          <Button >Get Started</Button>
          <BtnOut link='/about'>Learn More</BtnOut>
        </div>
      </div>
      <div>
        <Image src="svg/illustration.svg" alt="hero" width={500} height={500} />
      </div>
      
    </div>
  )
}
