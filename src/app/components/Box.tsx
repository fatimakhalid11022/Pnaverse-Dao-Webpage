import React from 'react';
import {FC} from "react"
interface IProps{
    header:string;
    description:string;
    number:any;
    haveBorder?:boolean
}
const Box:FC<IProps> = ({header,description,number , haveBorder = true}) => {
    return (
        <div>
            <div className={`rounded-md flex flex-col flex-1 border-gray-600 py-16 px-6 relative  ${haveBorder && "border"}`}>
                           <h2 className=' mb-3 text-xl font-bold'>{header}</h2>
                           <p  >{description}</p>
                           <span className='absolute -top-2 right-10 text-[170px] font-bold -z-10 text-gray-200 '>{number}</span>
                      </div>
        </div>
    );
}

export default Box;