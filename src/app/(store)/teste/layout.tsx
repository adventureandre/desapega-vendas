import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata : Metadata = {
    title:'testeaki'
}

export default function TestLayout ({children}:{children:ReactNode}){
    return(
        <div>
            {children}
        </div>
    )
}