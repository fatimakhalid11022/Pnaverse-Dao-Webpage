import React from 'react';
import Image from 'next/image'
import footer from "../../../public/assets/footer.jpeg"
function Footer() {
    return (
        <header className=' flex-row sm:flex max-w-screen-2xl mx-auto bg-green-50'>
           
            {/* right side */}
            <div className=' p-5'>
                <h1 className='text-4xl font-bold my-6'>
                Outcome for Participants of Programe
                </h1>
                <p className='text-md '>At the end of this programe , you will have your own products such as App Templates ,AR and VR Experiences and APIs that are marketed globally by panaverse dao
                    . you will have opportunity to offer you service at the rate of $50 per hour,
                    providing a path to financial stabality while contributing to th growth of Pakistan software exports
                </p>
                <ul className='mt-5 text-xl font-semibold '>
                    <div className=''>
                    <div> 1* Product Ownership</div>
                    <div>2* Freelancing</div>
                    
                    <div>3* Global Marketing by Dao</div>
                    <div>4* Boosting Economy</div>
                    </div>
                </ul>
                </div>
        </header>
    );
}

export default Footer;