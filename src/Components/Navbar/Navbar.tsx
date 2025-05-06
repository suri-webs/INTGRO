import { Grip, Search, ShoppingBag } from 'lucide-react';
import { NavbarData } from "@/lib/NavbarData";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full h-[105px] px-[50px]  max-sm:px-[20px] bg-[#030308] flex items-center justify-between">
            <div className="flex items-center space-x-8  ">
                <Image className='max-md:w-[145px]' src="/images/Navbar-logo.png" alt="Navbar Logo" width={170} height={0} />
                <div className="flex space-x-4 text-white text-lg max-lg:hidden">
                    {NavbarData.map((item, index) => (<div key={index} className="relative group py-[10px] transition-all ease-in duration-700">
                        <Link href="#"
                            className={`${item.styles}group px-[10px] font-medium transition-all duration-150 rounded-[7px] pb-1 text-[17px] border-b-0 hover:border-b-3 hover:border-white`}>
                            {item.anker}
                        </Link>
                        {item.anker !== "HOME" && item.anker !== "CONTACT US" && (
                            <div className="scale-0 group-hover:scale-100  flex  flex-col gap-2 py-5 absolute top-[77px] transition-all z-99 ease-in duration-600 left-0 w-[300px] px-10 h-fit bg-[#19132C]   ">
                                {item.links?.map((item, idx) => {
                                    return (
                                        <Link className="" key={idx} href={"#"}>{item.anker}</Link>
                                    )
                                })
                                }
                            </div>
                        )}
                    </div>
                    ))}
                </div>
            </div>
            <div className=" w-[10%] max-lg:w-[30%] max-sm:w-[35%] flex justify-center gap-6 items-center">
                <ShoppingBag className='w-[31px] h-[38px]  text-white' />
                <Search className='w-[31px] h-[38px] text-white' />
                <Grip className='w-[34px] h-[38px] text-white' />
            </div>
        </nav>
    );
}
