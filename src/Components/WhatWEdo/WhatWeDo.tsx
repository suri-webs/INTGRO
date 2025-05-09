"use client"	
import { WhatWEdoData } from "@/lib/SecHeaderData";
import { Plus } from "lucide-react";
import Image from "next/image";
export default function WhatWeDo() {
    return (
        <section className="w-full relative z-89 h-[700px] max-lg:h-full " >
            <Image src={"/images/Sec_header_img.webp"} className="absolute -left-50 max-md:hidden" alt={""} width={450} height={0}></Image>
            <div className="w-full h-full flex flex-col gap-5 max-md:gap-10 justify-center items-center text-white">
                <div className="flex flex-col justify-center items-center h-fit max-md:gap-1 gap-5">
                    <h3 className="bebas-neue text-2xl font-medium">WHAT WE DO</h3>
                    <h4 className="bebas-neue  text-6xl max-md:text-center max-sm:text-4xl">SERVICES FOR STARTUPS</h4>
                </div>
                <div className="w-full h-[600px] cursor-pointer max-md:h-full max-md:gap-10 max-md:flex-col flex justify-center items-center">
                    {WhatWEdoData.map((items, index) => {
                        return (
                            <div key={index} className="flex group flex-col w-[27%] max-md:w-[90%] max-md:gap-3  gap-3 justify-center items-center">
                                <div className={`w-[120px] h-[120px] max-md:w-[100px] max-md:h-[100px] flex justify-center items-center bg-[#2E2D2D] transition-all duration-500 group-hover:bg-[#0054D6] ${items.cssStyle}`} >
                                    <Image src={items.image} className="max-md:w-[80px]" alt={""} width={100} height={50}></Image>
                                </div>
                                <h2 className="text-[27px] max-md:text-2xl font-medium bebas-neue">{items.title}</h2>
                                <h3 className="w-[90%] max-md:text-[15px] text-[#8d8585d5] max-md:w-[95%] text-[18px] text-center">{items.subtitle}</h3>
                                <span className="group flex  w-[50%] items-center  justify-center h-[50px] relative">
                                    <h4 className="overflow-x-hidden whitespace-nowrap w-0 opacity-0 transition-all duration-500 group-hover:w-[90px] group-hover:opacity-100 ">READ MORE</h4><Plus />
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Image className="absolute -right-40 -bottom-210 max-lg:hidden z-7" src={"/images/OUr_bg.png"} alt={""} width={450} height={450}></Image>
        </section>
    )
}