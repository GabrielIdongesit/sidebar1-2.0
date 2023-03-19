import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { TbPlayerPause } from 'react-icons/tb';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import Selector5 from './Selector5';
import { AiFillEye } from 'react-icons/ai';
import { HiDotsHorizontal } from 'react-icons/hi';

const Selector4 = () => {
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

                    <h1 className='item-center  pr-2 '>Size</h1>
                </button>
                {isOpen && (
                    <div className='bg-[#404040] w-full'>
                        <div className=' mt-2 fle p- items-center'>
                            <div className='flex hover:bg-gray-600 cursor-pointer'>
                                <h2 className='px-1 my-1'>Width</h2>
                                <div className='flex gap-1 mx-auto py-1 '>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px] flex w-full rounded-md text-white' type="" required />
                                </div>
                                <h2 className='px-2 my-1'>Height</h2>
                                <div className='flex  gap-1 mx-auto py-1'>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px] flex w-full rounded-md text-white' type="" placeholder="" required />
                                </div>
                            </div>
                            <div className='flex hover:bg-gray-600 cursor-pointer'>
                                <h2 className='px-2 my-1 mt-3'>Min W</h2>
                                <div className='flex gap-1 mx-auto py-3'>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px] flex w-full rounded-md text-white' type="" placeholder="" required />
                                </div>
                                <h2 className='px-1 my-1 mt-3 '>Min H</h2>
                                <div className='flex gap-1 mx-auto py-3'>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px]  flex w-full rounded-md text-white' type="" placeholder="" required />
                                </div>
                            </div>
                            <div className='flex hover:bg-gray-600 cursor-pointer'>
                                <h2 className='px-2 my-1 mt-3'>Max W</h2>
                                <div className='flex gap-1 mx-auto py-3 '>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px] flex w-full rounded-md text-white' type="" placeholder="" required />
                                </div>
                                <h2 className='px-1 mt-3 my- '>Min H</h2>
                                <div className='flex gap-1 mx-auto py-3'>
                                    <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[60px] flex w-full rounded-md text-white' type="" placeholder="" required />
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#404040] w-full'>
                            <div className=' mt-2 flex hover:bg-gray-600'>
                                <h1 className='items-center cursor-pointer p-2'>Overflow</h1>
                                <ul className='border- rounded-sm items-center border-black flex mx-auto pl-[0.5rem]'>
                                    <li className='p-2 px-3 border-black w-full text-sm border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiFillEye size={10} /></li>
                                    <li className='p-2 px-3 border-black w-full text-sm border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineEyeInvisible size={10} /></li>
                                    <li className='p-2 px-3 border-black w-full text-sm border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                    <li className='p-1 px-1 border-black text-[10px] w-full text-sm border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'>Auto</li>
                                </ul>
                            </div>
                            <div className='flex hover:bg-gray-600 items-center'>
                                <h4 className='mb-2 p-2'>Fit</h4>
                                <div className='flex max-w-[200px] w-full mx-auto justify-between'>
                                    <div className='flex px-1 pl-[3.5rem] p-1  mx-auto items-center max-w-[150px justify-between w-full'>
                            
                                        <select className='w-full border-black max-w-[130px] bg-[#5E5E5E] text-white rounded-md'>
                                            <option value="">Fill</option>
                                            <option value="">Fill</option>
                                            <option value="">Fill</option>
                                        </select>
                            
                                    </div>
                                    <HiDotsHorizontal size={10} className='pr- mt-3 items-center gap-2' />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Selector5 />

            </div>


        </>
    );
}

export default Selector4





