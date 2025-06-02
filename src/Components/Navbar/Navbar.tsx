'use client'
import { Grip, Search, ShoppingBag, ShoppingCart, X } from 'lucide-react';
import { NavbarData } from "@/lib/NavbarData";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Navbar() {
    const [click2, setclick2] = useState(false)
    const [click1, setclick1] = useState(false)
    const [click, setclick] = useState(false)
    return (
        <nav className="w-full h-[105px] px-[50px] relative max-sm:px-[20px] bg-[#030308] flex items-center justify-between">
            <div className="flex items-center space-x-8">
                <Image className='max-md:w-[145px]' src="/images/Navbar-logo.png" alt="Navbar Logo" width={170} height={40} />
                <div className="flex space-x-4 text-white text-lg max-lg:hidden">
                    {NavbarData.map((item, index) => (
                        <div key={index} className="relative group py-[10px] transition-all ease-in duration-700">
                            <Link href="#" className={`${item.styles} group px-[10px] font-medium transition-all duration-150 rounded-[7px] pb-1 text-[17px] border-b-0 hover:border-b-3 hover:border-white`}> {item.anker}
                            </Link>
                            {item.anker !== "HOME" && item.anker !== "CONTACT US" && (
                                <div className="scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out flex flex-col gap-2 py-5 absolute top-[77px] left-0 w-[300px] px-10 h-fit bg-[#19132C] z-89">
                                    {item.links?.map((item, idx) => (<Link key={idx} href={"#"}>{item.anker}</Link>))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[10%] max-lg:w-[30%] max-sm:w-[35%] flex justify-center gap-6 items-center">

                <ShoppingBag className='w-[31px] h-[38px] cursor-pointer text-white' onClick={() => { setclick2(!click2) }} />
                <div className={`w-[350px] max-md:w-[90%] max-md:!h-[300px] flex justify-center max-sm:left-[5%] max-md:left-[20%] items-center flex-col gap-5 right-40 border-[#ffffff19] border-[1px] bg-[#0F0F1C] z-99 transition-all duration-900 !h-[350px] absolute
                     ${click2 ? "top-30" : "-top-[500px]"}`}>
                    <ShoppingCart className='w-[40px] h-[38px] cursor-pointer text-white' />
                    <h1 className='text-white text-2xl'>No products in the cart.</h1>
                </div>

                {/* first  */}

                <Search className={`w-[31px] h-[38px] cursor-pointer text-white `} onClick={() => setclick1(true)} />
                <div className={`w-full left-0 bg-[#0F0F1C] border-[#ffffff19] border-[1px] z-99 transition-all duration-900 
                !h-[400px] max-md:!h-[300px] absolute
                     ${click1 ? "top-0" : "-top-[500px]"}`}>
                    <X className='w-[40px] h-[38px] cursor-pointer text-white absolute right-11 top-11'
                        onClick={() => { setclick1(false) }} />
                </div>

                {/* second  */}

                <Grip className='w-[34px] h-[38px] cursor-pointer text-white' onClick={() => setclick(true)} />
                <div className={`w-[25%] max-md:w-[70%] top-0 bg-[#0F0F1C] border-[#ffffff19] border-[1px] z-99 transition-all duration-[900ms] h-screen absolute
                     ${click ? "right-0" : "-right-[500px]"}`}>
                    <X className='w-[40px] max-md:w-[30px] max-sm:right-4 h-[38px] cursor-pointer text-white absolute right-8 top-8'
                        onClick={() => { setclick(false) }} />
                </div>

                {/* third  */}
            </div>

        </nav>
    );
}
