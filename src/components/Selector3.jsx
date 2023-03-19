import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import Selector4 from './Selector4';




const Selector3 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

        <div className='h-screen font-medium  text-white bg-[#212121] relative flex flex-col items-center w-[250px]'>
        <button onClick={() => setIsOpen((prev) => !prev)} className='p-2 pl-2 w-full flex items-center bg-[#212121 cursor-pointer hover:bg-gray-600 border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                {!isOpen ? (
                    <AiOutlineCaretUp size={20} />
                ) : (
                    <AiOutlineCaretDown size={20} />
                )}
                <h1 className='item-center pr-2 w-[340px'>Spacing</h1>
            </button>
            {isOpen && (
                <div className='bg-[#404040] w-full py-2 flex'>
                   
                </div>
            )}
            
            <Selector4 />
        </div>


        </>
    );
}

export default Selector3





