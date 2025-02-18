import {NextPage} from "next";
import React from "react";


interface Props{
    children: React.ReactNode;
    link: string;
    
}

const BtnOut: NextPage<Props> = ({ link, children}) => {
    return (
        <div className="px-6 py-2 outline-[#4CAF4F] outline outline-1 text-white rounded-md hover:bg-white hover:text-black cursor-pointer transition-all ease-in-out duration-500">
        <a href={link}>{children}</a>
    </div>
    ) 
};

export default BtnOut;  
