import { NextPage } from "next";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  buttonColor?: string;
}

const Button: NextPage<ButtonProps> = ({ children }) => {
  return (
    <div className=" text-center px-6 py-2 bg-[#4CAF4F] text-white rounded-md hover:bg-[#3A853C] cursor-pointer transition-all ease-in-out duration-500">
      {children}
    </div>
  );
};

export default Button;
