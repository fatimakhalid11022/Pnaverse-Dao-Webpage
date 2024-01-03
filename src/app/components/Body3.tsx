import React from 'react';
import Box from "@/app/components/Box"
const CoreTrack =[
    {
        header:"Quater I",
        description :"CS-101:Object-oriented Programming using Typescript. As you know that Typescript is the superset of Javascript.",
        number:1
    },
    {
        header:"Quater II",
        description :"CW2-201:developing Planet-scale web 2.0.Severless CloudAPPs and API using Next.js (CDK) for terraform.",
        number:2
    },
    {
        header:"Quater III",
        description :"$-101:Dollar making Bootcamp Full-stack template and API Product Development",
        number:3
    },
    
]
function Body3() {
    return (
        <div className={`flex flex-col md:flex-row gap-x-8 my-20 mx-5 flex-1 p-5 rounded-md shadow-2xl bg-green-50`}>
            {
                CoreTrack.map((item,i)=>(
                    
                     <Box 
                     key={i} 
                     description={item.description} 
                     header={item.header} 
                     number={item.number}
                    haveBorder={true}/> 
        
                     
                 ))
            }
           
            
           
        </div>
    );
}

export default Body3;