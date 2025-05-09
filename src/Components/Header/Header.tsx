import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import WhatWeDo from "../WhatWEdo/WhatWeDo";

export default function Header() {
    return (
        <header className="relative h-full  w-full gap-30 max-md:gap-20 pt-[40px] flex flex-col justify-between bg-[#030308]">
            <Image className="absolute  top-0 right-0" src="/images/HeaderRight_bg.webp" alt="Right BG" width={570} height={500} />
            <Image className="absolute  top-0 left-0" src="/images/HeaderLeft_bg.webp" alt="Left BG" width={570} height={500} />

            <div className=" w-full h-[700px] max-sm:h-[100%] flex items-center justify-center gap-10 max-lg:w-full max-lg:flex-col z-79 ">
                {/* Left */}
                <div className="w-[40%]  h-[90%] max-sm:h-[280px] max-lg:w-full flex items-center justify-center">
                    <div className="w-[70%] max-lg:w-[80%] max-sm:h-fit max-md:gap-5 flex flex-col gap-10">
                        <h4 className="text-xl text-white tracking-wider bebas-neue">OPTIMIZE YOUR BUSINESS GROWTH</h4>
                        <h1 className="text-[75px] max-md:text-7xl max-sm:text-4xl max-sm:leading-10 text-white leading-17 w-[85%] bebas-neue font-medium ">LAUNCHING YOUR STARTOP JOURNEY</h1>
                        <div className="flex items-center gap-5 max-sm:flex-wrap">
                            <button className="px-10 py-2 text-[20px] cursor-pointer text-white bg-[#DF50E4] hover:bg-white hover:text-black bebas-neue flex transition-all duration-300 items-center gap-2">
                                SERVICES <ArrowRight className="w-5" />
                            </button>
                            <button className="w-[50px] h-full py-[10px] cursor-pointer border border-amber-50 flex items-center justify-center transition-all duration-100 hover:border-none ease-in hover:bg-[#DF50E4]">
                                <Play className="fill-white text-white" />
                            </button>
                            <span className="text-white bebas-neue">HOW IT WORKS</span>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="w-[46%] h-[98%] max-sm:w-[85%] cursor-pointer max-lg:w-[80%] bg-[url(/images/Header-img1.jpg)] bg-cover bg-center flex items-center max-sm:h-[250px] ">
                    <Image className="relative cursor-pointer -left-20 max-sm:w-[35%] max-lg:w-[35%] max-md:w-[40%] max-sm:-left-5 max-lg:-left-15" src="/images/Header-Img2.jpg" alt="Feature" width={300} height={0} />
                </div>
            </div>

            <WhatWeDo />
        </header>
    );
}
