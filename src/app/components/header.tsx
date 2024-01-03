import React from 'react';
import Image from "next/image"
import logo from "../../../public/assets/logo.png"
import Link from 'next/link';
import Courses from "@/app/components/Courses"
import Wrapper from "@/app/components/Wrapper"

function Header() {
    return (
        <header className='sticky top-0 z-10'>
        <Wrapper>
        <header className="bg-green-50 flex justify-between py-4 px-6 items-center">
            <div>
                <Image src ={logo} alt="Panaverse Dao logo" height={100} width={100}></Image>
            </div>
           <ul className='flex font-semibold space-x-10 '>
                <li>
                    <Link href={"/"}> Home</Link>
                   </li>
                <li>
                    <Link href={"/blog"}>Blog</Link></li>
                <li> 
                    <Link href={"Courses"}>
                        <button>Courses</button></Link>
                     
                    </li>
            </ul>
        </header>
        </Wrapper>
        </header>
    );
}

export default Header;