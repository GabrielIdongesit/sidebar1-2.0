import React, { useState } from 'react';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import Selector8 from './Selector8';




const Selector7 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

        <div className='h-screen font-medium  text-white bg-[#212121] relative flex flex-col items-center w-[250px]'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='p-2 pl-2 w-full flex items-center bg-[#212121 cursor-pointer hover:bg-gray-600 border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                {!isOpen ? (
                    <MdArrowRight size={20} />
                ) : (
                    <MdArrowLeft size={20} />
                )}
            <h1 className='item-center  pr-2 w-[340px'>Backgrounds</h1>
            </button>
            {isOpen && (
                <div className='bg-[#404040] w-full py-2 flex'>
                   
                </div>
            )}
            
            <Selector8 />
        </div>


        </>
    );
}

export default Selector7





