import React, { useState } from 'react';

import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';




import Selector6 from './Selector6';

import { MdArrowRight } from 'react-icons/md';




const Selector5 = () => {
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
                    <h1 className='item-center pr-2 w-[340px'>Position</h1>
                </button>
                {isOpen && (
                    <div className='bg-[#404040] w-full'>
                        <div className='bg-[#404040] w-full hover:bg-slate-600 cursor-pointer py-2 gap-x-2 flex p-2'>
                            <h2>Position</h2>
                            <div className='flex borde justify-between mx-auto max-w-[200px] w-full items-center'>
                                <select className='p- w-full my- bg-[#5E5E5E] text-white rounded-md'>
                                    <option value="">X Static</option>
                                    <option value="">X Static</option>
                                    <option value="">X Static</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex mx-auto items-center bg-[#4D4D4D] hover:bg-gray-600 cursor-pointer w-full max-w-[235px] borde text-center justify-center'>
                            <MdArrowRight />
                            <h2>Float and clear</h2>
                        </div>
                    </div>
                )}

                <Selector6 />
            </div>


        </>
    );
}

export default Selector5





