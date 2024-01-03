import React from 'react';
import Link from "next/link"
function Body5() {
    return (
        <div>
            <div  className='md:flex justify-between px-[60px] py-[10px] text-center'>
         <div>
            <p className='font-semibold'>All Rights Reserved ©|<br className='md:hidden'/> <Link href="https://github.com/fatimakhalid11022?tab=repositories" target="_blank">Fatima Khalid </Link></p>
         </div>
         <div>
            <Link href="/">Legals</Link>|
            <Link href="/">Terms of Use</Link>|
            <Link href="/">Privacy Policy</Link>
         </div>
       </div>
        </div>
    );
}

export default Body5;