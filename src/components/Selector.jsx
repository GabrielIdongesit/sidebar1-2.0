import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { TbPlayerPause } from 'react-icons/tb';
import { CgDisplayGrid } from 'react-icons/cg';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Selector2 from './Selector2';




const Selector = () => {
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
                <h1 className='item-center pr-2 w-[340px'>General</h1>
            </button>
            {isOpen && (
                <div className='bg-[#404040] hover:bg-gray-600 w-full py-2 flex'>
                    <h1 className='items-center cursor-pointer p-2'>Display</h1>
                    <ul className='bg-[#212121 items-center borde border-black flex'>
                        <li className='p-2 text-sm border-black bg-[#212121] border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                        <li className='p-2 text-sm border border-black border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                        <li className='p-2 text-sm border border-black border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><CgDisplayGrid size={10} /></li>
                        <li className='p-2 text-sm border border-black border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                        <li className='p-2 text-sm border border-black border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><CgDisplayGrid size={10} /></li>
                        <li className='p-2 text-sm border border-black border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineEyeInvisible size={10} /></li>

                    </ul>
                </div>
            )}
            <Selector2 />

        </div>


        </>
    );
}

export default Selector





