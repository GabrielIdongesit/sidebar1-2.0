import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { TbLineDotted } from 'react-icons/tb';
import { BiDotsHorizontal } from 'react-icons/bi';
import {  RxDotsHorizontal } from 'react-icons/rx';
import { AiOutlineLine } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';




const Selector9 = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>

            <div className='h-screen font-medium  text-white bg-[#212121 relative flex flex-col items-center w-[250px]'>
                <button onClick={() => setIsOpen((prev) => !prev)} className='p-2 pl-2 w-full flex items-center bg-[#212121 cursor-pointer hover:bg-gray-600 border-1 border-transparent duration-300 font-bold text-lg tracking-wider'>
                    {!isOpen ? (
                        <AiOutlineCaretUp size={20} />

                    ) : (
                        <AiOutlineCaretDown size={20} />

                    )}
                    <h1 className='item-center pr-2'>Effects</h1>
                </button>
                {isOpen && (
                    <div className='bg-[#404040 w-full gap-x-8 fle'>
                        <div className='flex mx-auto bg-[#404040] p-2 my- items-center hover:bg-gray-600 cursor-pointer w-full text-center justify-evenly'>
                            <h1>Blending</h1>
                            <div className='flex items-center w-full w-[360px ml-[1.5rem] mx-auto  gap-3 justify-between'>
                                <select className='w-full border-black max-w-[400px] bg-[#5E5E5E] text-white rounded-md'>
                                    <option value="">Normal</option>
                                    <option value="">Normal</option>
                                    <option value="">Normal</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex mx-auto bg-[#404040] p-1 my-[1px] items-center hover:bg-gray-600 borde w-full text-center justify-evenly'>
                            <h1>Opacity</h1>
                            <input className='w-full max-w-[50px] text-black bg-black' type="range"/>
                            <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[80px] flex w-full rounded-md text-white' type="" placeholder="" required />
                           
                        </div>
                        <div className='bg-[#404040] w-full hover:bg-gray-600  my- flex'>
                            <h1 className='items-center cursor-pointer  p-2'>Outline</h1>
                            <div className='bg-[#212121 items-center ml-[1rem] border-1 border-black flex'>
                                <h5 className='p-2 text-sm border border-black border-1 bg-[#5E5E5E] px-3 hover:bg-[#212121] cursor-pointer hover:text-white'><FaTimes /></h5>
                                <h5 className='p-2 text-sm border border-black border-1 bg-[#5E5E5E] px-3 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineLine /></h5>
                                <h5 className='p-2 text-sm border border-black border-1 bg-[#5E5E5E] px-3 hover:bg-[#212121] cursor-pointer hover:text-white'><BiDotsHorizontal /></h5>
                                <h5 className='p-2 text-sm border border-black border-1 bg-[#5E5E5E] px-3 hover:bg-[#212121] cursor-pointer hover:text-white'><TbLineDotted /></h5>
                            </div>
                        </div>
                        <div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <h2 className='text-[13px]'>Box Shadows</h2>
                            <BiPlus className='text-gray-300'/>
                        </div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <h2 className='text-[13px]'>2D Transform & 3D Transform</h2>
                            <div className='flex gap-1'>
                            <RxDotsHorizontal className='text-gray-300'/>
                            <BiPlus className='text-gray-300'/>
                            </div>
                        </div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <h2 className='text-[13px]'>Transition</h2>
                            <BiPlus className='text-gray-300'/>
                        </div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <h2 className='text-[13px]'>Filters</h2>
                            <BiPlus className='text-gray-300'/>
                        </div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <div className='flex gap-x-2'>
                            <h2 className='text-[13px]'>Backdrop Filters</h2>
                            <h2 className='border rounded-md text-gray-500 border-gray-500 px-1'>BETA</h2>
                            </div>
                            <BiPlus className='text-gray-300'/>
                        </div>
                        <div className='bg-[#404040] w-full cursor-pointer hover:bg-gray-600 justify-between px-2 p-1 my-[1px] flex'>
                            <h2 className='text-[13px]'>Cursor</h2>
                            <select className='p-[1px] w-full my- bg-[#5E5E5E] text-white max-w-[170px] rounded-sm'>
                                    <option value="">auto</option>
                                    <option value="">auto</option>
                                    <option value="">auto</option>
                                </select>
                        </div>
                        </div>
                    </div>
                )}
                {/* <Selector2 /> */}
                {/* <Selector8 />
             */}
            </div>


        </>
    );
}

export default Selector9





