import {NextPage} from "next";
import React from "react";

interface Props{
    children: React.ReactNode;
}

const layout: NextPage<Props> = ({children}) => {
    return <div>{children}</div>;
};

export default layout;  