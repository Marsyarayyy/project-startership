import { NextPage } from "next";
import React from 'react';
interface ButtonProps {
  children: React.ReactNode;

}

const BtnPutih: NextPage<ButtonProps> = ({ children }) => {
  return (
    <div  
        className="px-6 py-2 bg-white text-black rounded-md cursor-pointer transition-all ease-in-out duration-500 w-fit font-medium hover:bg-gray-200 hover:text-black">
        {children}
    </div>
  );
};


export default BtnPutih;