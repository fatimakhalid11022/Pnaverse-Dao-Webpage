"use client"
import React, { useState } from 'react';
import Box from "@/app/components/Box"
import Image from "next/image"

import { SpecializeProgram } from "./SpecializeProgram"
const Body4 = () =>{
    const [selectedItem,setSelectedItem] = useState("wmd")
    const selectedItemData = SpecializeProgram.find((item) => item.slug === selectedItem)
    return (
        <section>
         <div className='bg-center bg-[url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgIBwcHCAgHBwcHBwoHBwcHBw8ICQcKFREiFhUREx8YKCggGBolGxMfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDzcZFRkrKy03LSsrNysrNysrKy0rKystLTc4LS0rKy0tLS0tKy0rKystKy0rKysrKzcrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIFBAMH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwUE/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9qrNarNafJrNSrUquWss1qs0c9ZrNaqVK56zWa0zUc9ZotRGEASogCVIgqJUiCoJBFBIyoFSOuzWqldXt6xUrVZo5azWa1URz1mstM0c9ZqVqs1K57jNRplmsbiColSCKJSIiiVIgCUiChUiCoUjr1mtVmu72NZrNbrNHLWay1Uo56zWa1WUY3GajVZrLG4zUrVZrLG4gqJWYgohERRKRBRKkRFEpEFCkdas1qs19L1tZrNaqDnuM1mtVKjnuMVK1URjcZrNaqIxuM1mtozrG4wLUZZiCozSCKJSIKJSIAlIIuBSOtWa0zX1vV3GalaqUc9xipWqyMbjKNVKy57jCNWIms7jNZbqYyxuMVGkrOsxkUZ1IiKM0iCiVYgolIgCUjqpVH3PUZZrdZo57jNZrdZqMbjNiNJYjG4xUaSs6xuM1GrEZZ3Gay3UZ1IymNYjOpGUaMYSMqYM7pEFEqxBRKR0xR6L0WalaRE3Gay0liMbjNStJRjcYRpKyxuMpWkrLMZxGkxnUjOGNJjOpGUawxjSMpjWGM6RkxrExnSJguCEdIB6T70ARGajSVGdxlLGkGdxio3UrOsbjGI0MpGcSxqxGdZjKNYM6kZRrBnSMo0MaRnDGsMZ1YyjYyR7gHpvrQBARREZsStIibjKY0iMbjOJjSIkZxGkZ1mImNGM6RlMaTGdSIjRjGkZFxWdxYzgqsxY9YqPSdyooggACKIM4mNFZZjGDWJiJGUaxEZiYmNIzuERMawxlIwY1gzpGcFEhEwUSLHqAfc7IKiAAiAAIKiCI0YhGcRrExEjOGNIjMZwxrEZ3CMjRiEZxGhIkZGsEix9xUfY6ACCAIACAACCoyACCYjQJGRcMSEZMawxIkZGsTEhEFxSEfQB9LSAICKAgCAAgAAgqIACQAEAAABARQGwHdRFQQAQAEEFEEAAABFBBBQEFRIACQACDYqOzQAIgqIgAAAgIoggqAAAAAAIAAAANgOjQigIKiIgoCACACAACCiCAAAAAAAA2A20AAAAgoCAIiCgIKgACAAAAIgokEFAaAbaAAAAAAEAABEAEAABAUUBAAAAB/9k=")] bg-cover '>
            <div className=''>
              <h1 className='font-bold text-3xl sm:text-6xl p-10'>Specialized Tracks:</h1>
               <p className='mb-10 max-w-sreen-sm px-12'>After completing the first three quaters the participants will select one or more specializations consisting of two courses each:</p>
               </div>
               {/* content left */}
               <div className=' flex  flex-col-reverse lg:flex-row sticky self-start top-0 gap-x-6 gap-y-8'>
                <div className='flex pl-10'>
                    
                 <div className='container mx-auto gray-50 shadow-md border border-teal-100 p-12'>
                   <h4 className='text-green-700 font-semibold'>Specialized Programe</h4>
                   <h1 className='text-4xl font-bold mb-4 max-w-[800px]'>{selectedItemData?.header}</h1>
                   <p className=''>{selectedItemData?.description}
                        </p>
                       <button className='text-teal-800 font-semibold text-lg mt-3 underline'>Learn More</button>
                    <div className='flex justify-center sm:justify-between w-50'>
                        {selectedItemData?.quaters.map((item)=>(
                            <Box key={item.number}
                            description={item.description}
                            header={item.header}
                            number={item.number}
                            haveBorder={false}/>
                    ))}
                    </div>

                    </div>
          
               </div>
                 {/* content right */}
                 <div className='p-6'>
                  <div className='px-4 space-y-4 py-6 bg-green-50'>

                    {
                      SpecializeProgram.map((item:any)=>(
                        <>
                        
                     
                           <div onClick={()=>setSelectedItem(item.slug)} key={item.header} className='flex items-center cursor-pointer hover:font-bold '>
                                <div className='flex-shrink-0  w-24'>
                                   <div className='w-20 h-16'> <Image src={item.image} alt={item.header} className='h-20 w-32 object-cover rounded-md'/>
                                   </div>
                                </div>
                               <div className=' mx-3 w-48'>
                           <h4 className='font-semibold text-teal-700'>Specialized Programe</h4>
                             <h3 className='font-bold text-md'>{item.header}</h3>
                            </div>
                      
                        
                            </div>
                        </>                          
                        )
                      )
                      
                    }
                    
                   </div> 
                    
                  </div>
         </div>
          </div>
        
        </section>
    );
}

export default Body4;