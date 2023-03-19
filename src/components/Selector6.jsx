import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { TbPlayerPause } from 'react-icons/tb';
import { CgDisplayGrid } from 'react-icons/cg';
import { AiOutlineAlignCenter, AiOutlineAlignRight, AiOutlineAlignLeft } from 'react-icons/ai';
import Selector7 from './Selector7';
import { MdArrowRight } from 'react-icons/md';

const Selector6 = () => {
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
                    <h1 className='item-center pr-2 w-[340px'>Typography</h1>
                </button>
                {isOpen && (
                    <div className='bg-[#404040] w-full py-2 fle'>
                        <div className='bg-[#404040] w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex p-2'>
                            <h2 className='bg-[#725030] text-[#f09138]  px-1 rounded-sm gap-x-6'>Font</h2>
                            <div className='flex border ml-[2.5rem] border-black rounded-lg justify-between mx-auto max-w-[160px] w-full items-center'>
                                <select className='p- w-full my- bg-[#5E5E5E] text-white rounded-md'>
                                    <option value="">Arial</option>
                                    <option value="">Arial</option>
                                    <option value="">Arial</option>
                                </select>
                            </div>
                        </div>
                        <div className='bg-[#404040] w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex p-2'>
                            <h2 className='bg-[#725030] text-[#f09138] px-1 text-[14px] rounded-sm gap-x-6'>Weight</h2>
                            <div className='flex border ml-[1.5rem] border-black rounded-lg justify-between mx-auto max-w-[180px] w-full items-center'>
                                <select className='p- w-full my- bg-[#5E5E5E] text-white rounded-md'>
                                    <option value="">400-Normal</option>
                                    <option value="">400-Normal</option>
                                    <option value="">400-Normal</option>
                                </select>
                            </div>
                        </div>
                        <div className='bg-[#404040] w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex p-2'>
                            <h2 className='bg-[#725030] text-[#f09138] px-1 rounded-sm gap-x-6'>Size</h2>
                            <div className='flex justify-between mx-auto gap-x-2 max-w-[250px] ml-[2rem] w-full items-center'>
                                <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 flex w-full rounded-md text-white' type="" placeholder="" required />
                                <h2 className='bg-[#725030] text-[#f09138] px-1 rounded-sm gap-x-6'>Height</h2>
                                <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 flex w-full rounded-md text-white' type="" placeholder="" required />
                            </div>
                        </div>
                        <div className='bg-[#404040] w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex p-2'>
                            <h2 className='bg-[#725030] text-[#f09138] px-1 rounded-sm gap-x-6'>Color</h2>
                            <div className='justify-between flex mx-auto max-w-[220px] ml-[1.6rem] w-full items-center'>
                                <input type="color" />
                                <input className=' bg-[#212121] mx-auto md:mx-0 py- p-1 px- max-w-[110px] flex w-full rounded-md text-white' type="" placeholder="" required />
                            </div>
                        </div>

                        <div className='bg-[#404040] w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex'>
                            <h1 className='items-center cursor-pointer p-2'>Align</h1>
                            <ul className='bg-[#212121 border-1 items-center ml-[1rem] border-black flex'>
                                <li className='p-2 px-[15.5px] text-sm border-black border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignLeft size={10} /></li>
                                <li className='p-2 px-[15.5px] text-sm border-black border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignCenter size={10} /></li>
                                <li className='p-2 px-[15.5px] text-sm border-black border border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignRight size={10} /></li>
                                <li className='p-2 px-[15.5px] text-sm border-black border bg-black border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>

                            </ul>
                        </div>
                        <div className=' w-full py-2 hover:shadow-md cursor-pointer hover:bg-gray-600 flex gap-2 ml-[1rem'>
                            <h1 className='items-center cursor-pointer p-2'>Style</h1>
                            <div className='mt- text-center ml-[0.5rem]'>
                                <ul className='bg-[#212121 border-1 border-black  flex'>
                                    <li className='p-2 text-sm border border-black  hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                    <li className='p-2 text-sm border border-black  hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                </ul>
                                <p className='text-[11px]'>Italicize</p>
                            </div>
                            <div className='mt- text-center'>
                                <ul className='bg-[#212121 gap- border-1 border-black flex'>
                                    <li className='p-2 text-sm border border-black hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                    <li className='p-2 text-sm border bg-black border-black hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                    <li className='p-2 text-sm border border-black hover:bg-[#212121] cursor-pointer hover:text-white'><CgDisplayGrid size={10} /></li>
                                    <li className='p-2 text-sm border border-black hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></li>
                                </ul>
                                <p className='text-[11px]'>Decoration</p>
                            </div>
                        </div>
                        <div className='flex mx-auto items-center bg-[#4D4D4D] hover:bg-gray-600 cursor-pointer w-full max-w-[235px] borde text-center justify-center'>
                            <MdArrowRight />
                            <h2>More type options</h2>
                        </div>
                    </div>
                )}

                <Selector7 />
            </div>


        </>
    );
}

export default Selector6





