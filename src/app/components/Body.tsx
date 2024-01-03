import React from 'react';
import Image from "next/image"
import Wrapper from "@/app/components/Wrapper"
import pro from "../../../public/assets/pro.jpg"
import Button from "@/app/components/button"
function Body() {
    return (
       
        <section>
            <Wrapper>
            <div className='sm:flex mt-8 '>
                <div className='container mx-5 flex-1 p-5 pl-7 rounded-md shadow-2xl  bg-green-50'>
                    <h4 className='text-green-600 font-semibold '>Presential Initiative For Artificial Intelligence and Computing (PIAIC)</h4>
                    <h1 className='text-gray-900 md:text-red-500 text-5xl sm:text-6xl font-extrabold mt-4 mb-4 max-w-[550px]'>Certified Web 3.0 and Metaverse Developer</h1>
                    <p className='text-lg max-w-[550px]'> A one and Quater Years Panaverse DAO Earn as you learn Program Getting ready for Next Generation of the Internet</p>
                    <p className='mt-4 text-lg max-w-[550px]'>Consolidating Web 3.0 , Metaverse , Artificial Intelligence ,CNC , cloud edge and Bioinformatics Technologies</p>
                    <Button text = {"Learn More"} />
                    
                </div>
                <div className='flex-1 m-7'>
                    <Image src ={pro} alt="body Image" className='rounded-sm h-full w-full'/>
                </div>
            </div>
            </Wrapper>
        </section>
      
    );
}

export default Body;