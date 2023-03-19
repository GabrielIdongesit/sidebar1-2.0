import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { TbPlayerPause } from 'react-icons/tb';
import { CgDisplayGrid } from 'react-icons/cg';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Selector3 from './Selector3';
import { BsBoxArrowUpLeft } from 'react-icons/bs';




const Selector2 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div className='h-screen font-medium  text-white bg-[#212121] relative flex flex-col items-center w-[250px]'>
            <button onClick={() => setIsOpen((prev) => !prev)} className='p-2 pl-2 w-full justify-between flex items-center bg-[#212121 cursor-pointer hover:bg-gray-600 border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                <div className='justify-between flex'>
                    {!isOpen ? (
                        <AiOutlineCaretUp size={20} />
                    ) : (
                        <AiOutlineCaretDown size={20} />
                    )}

                        <h1 className='item-center'>Flex</h1>
                    </div>
                    <BsBoxArrowUpLeft />
                </button>
                {isOpen && (
                    <div className='bg-[#404040] w-full'>
                        <div className=' mt- hover:bg-gray-600 flex'>
                            <h1 className='items-center cursor-pointer p-2'>Sizing</h1>
                            <ul className='border-1 items-center ml-3 border-black flex'>
                                <li className='p-2 text-sm border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                <li className='p-2 text-sm border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                <li className='p-2 text-sm border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><CgDisplayGrid size={10} /></li>
                                <li className='p-2 text-sm bg-black border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                <li className='p-2 text-sm border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><CgDisplayGrid size={10} /></li>
                                <li className='p-2 text-sm border-black border border-1 brder-spacing-6 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineEyeInvisible size={10} /></li>

                            </ul>
                        </div>
                        <h4 className='mb-1 hover:bg-gray-600 cursor-pointer px-2'>2 on this page</h4>
                    </div>
                )}

                <Selector3 />

            </div>


        </>
    );
}

export default Selector2





