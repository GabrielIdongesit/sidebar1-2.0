import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import { BiSquareRounded } from 'react-icons/bi';
import Selector9 from './Selector9';
import { AiOutlineAlignCenter, AiOutlineAlignRight, AiOutlineAlignLeft } from 'react-icons/ai';
import { TbPlayerPause } from 'react-icons/tb';

const Selector8 = () => {
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
                    <h1 className='item-center pr-2 w-[340px'>Borders</h1>
                </button>
                {isOpen && (
                    <div className='bg-[#404040 w-full  py-[1px] fle'>
                        <div className='flex mx-auto hover:bg-gray-600 cursor-pointer bg-[#404040] py-[3px] items-center w-full text-center justify-evenly'>
                            <h1>Radius</h1>

                            <div className='flex'>
                                <BiSquareRounded />
                                <BiSquareRounded />
                            </div>
                            <input className='w-full max-w-[50px]' type="range" />
                            <input className=' bg-[#212121] mx-auto md:mx-0 py- px-2 max-w-[80px] flex w-full rounded-md text-white' type="" placeholder="" required />

                        </div>
                        <div className='bg-[#404040] mt-1 p-2 py-[1px]'>
                            <h2 className='hover:bg-gray-600 cursor-pointer'>Border</h2>
                            <div className=' flex gap-x-1 py-2'>
                                <div className='grid-cols-3 delay-1000 mt-[-5px] transition hover:bg-gray-600 duration-500  mx-auto lg:container'>
                                    <div className='ml-[1.5rem] my-[0.5rem]  cursor-pointer'>
                                        <BiSquareRounded size={20} />
                                    </div>
                                    <div className='flex gap-x-1 cursor-pointer'>
                                        <BiSquareRounded size={20} />
                                        <BiSquareRounded size={20} />
                                        <BiSquareRounded size={20} />
                                    </div>
                                    <div className='ml-[1.5rem] my-[0.5rem] cursor-pointer'>
                                        <BiSquareRounded size={20} />
                                    </div>
                                </div>
                                <div className='mt-[-1rem] ml-[rem'>
                                    <div className='bg-[#404040] hover:bg-gray-600 cursor-pointer w-full  py- flex'>
                                        <h1 className='items-center cursor-pointer  p-2'>Style</h1>
                                        <div className='bg-[#212121 items-center ml-[1rem border-1 border-black flex'>
                                            <h5 className='p-2 text-sm border border-black border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignLeft size={10} /></h5>
                                            <h5 className='p-2 text-sm border border-black border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignCenter size={10} /></h5>
                                            <h5 className='p-2 text-sm border border-black border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><AiOutlineAlignRight size={10} /></h5>
                                            <h5 className='p-2 text-sm border border-black border-1 hover:bg-[#212121] cursor-pointer hover:text-white'><TbPlayerPause size={10} /></h5>
                                        </div>
                                    </div>
                                    <div className='bg-[#404040] w-full hover:bg-gray-600 cursor-pointer px-1 flex '>
                                        <h2 className='p-2'>Width</h2>
                                        <div className='flex borde gap-1 mx-auto py-1'>
                                            <input className=' bg-[#212121] mx-auto md:mx-0 px-2 flex w-full rounded-md text-white' type="" placeholder="" required />
                                        </div>
                                    </div>
                                    <div className='bg-[#404040] w-full hover:bg-gray-600 cursor-pointer flex p-1'>
                                        <h2 className='p-1'>Color</h2>
                                        {/* <div className='flex items-cente  borde border-black w-full mx-auto gap-1'> */}
                                            <div className='justify-between mx-auto max-w-[220px] ml-[rem] w-full flex items-center'>
                                                <input type="color" />
                                                <input className=' bg-[#212121] mx-auto md:mx-0 py- px-3 p-1 max-w-[80px] flex w-full rounded-md text-white' type="" placeholder="" required />
                                            </div>
                                        {/* </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <Selector9 />
            </div>


        </>
    );
}

export default Selector8





