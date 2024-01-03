import { FC  } from 'react';

const Button : FC<{text:string}> = ({text}) =>{
    return (
        <div>
             <button className='border rounded-2xl p-3 bg-[#00616C] text-white text-lg font-semibold mb-5 mt-5
              hover:shadow-xl hover:bg-gray-700 duration-300 
              hover:scale-90'>{text} </button>
        </div>
    );
}

export default Button;