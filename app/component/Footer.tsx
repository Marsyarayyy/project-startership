import React from 'react'
import BtnPutih from './BtnPutih'



export default function Footer() {
  return (
    <div className='flex flex-col text-white bg-[#4CAF4F] '>
        <div className='flex flex-col items-center justify-center text-center py-20'>
            <h1 className='text-4xl font-bold'>
                Ready to dive in?
                <br />
                Start your free trial today.
            </h1>
            <p className='pt-4 text-[18px] font-normal pb-5 '>
                Join thousands of satisfied students and start your journey to becoming <br /> 
                a professional developer            
            </p>
              <BtnPutih>Get Started</BtnPutih>
        </div>
        <div className='flex item-center justify-center text[16px] bg-[#353535] py-5'>@ 2025 made by Marsya Rayani Humaira ALL right reserved.</div>
    </div>  
    
  )
}

