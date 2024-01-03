import React from 'react';
import Button from "@/app/components/button"
function Body2() {
    const header = "Core Courses \n (Common in All Specialization)"
   
    return (
        <div className='mt-20 mx-5 flex-1 p-5 pl-7 bg-blend-color-burn relative bg-cover bg-center bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrt0C30L2wpSmz_BBdH5dCinoqW2wUveAsQ&usqp=CAU")]'>
            <h4 className='text-green-700'>PROGRAM OF STUDIES</h4>
            <h1 className='font-bold text-4xl whitespace-pre-line'>{header}</h1>
           
            
            <p className='mt-4 text-lg'>Every participant of the program will start by completing the following three core courses: </p>
                <ul className='text-md text-gray-600 hover:font-bold'>
                    <li>* Typescript</li>
                    <li>* Front-end </li>
                    <li>* next.js</li>
                </ul>
                <Button text = {"Learn More"} />
            
        </div>
    );
}

export default Body2;