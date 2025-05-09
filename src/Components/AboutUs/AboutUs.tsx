"use client"
import { stats } from "@/lib/SecHeaderData";
import Image from "next/image";
import CountUp from "react-countup";

export default function AboutUs() {
    return (
        <section className="w-full relative max-lg:py-15  max-md:gap-5 h-full py-20 flex flex-col justify-center items-center bg-[#0F0F1C]">
            <div className="px-[100px] max-sm:px-[20px] h-[250px] max-sm:h-full max-md:w-full flex justify-center items-start gap-5 flex-col">
                <h3 className="bebas-neue text-2xl font-medium text-white">about us</h3>
                <h1 className="bebas-neue w-[70%] text-[55px] max-md:w-[100%] max-sm:text-3xl max-sm:leading-8 leading-14 text-white">
                    Working with our team means boosting your business through unique solutions
                </h1>
            </div>
            <div className="w-[87%] relative max-lg:flex-col  gap-10 max-lg:h-full flex justify-start items-center h-[550px]">
                <Image src="/images/AboutImage.jpg" alt="About us image" width={700} height={0} />

                <div className="text-white w-[40%] max-lg:w-full h-[77%] flex flex-col justify-start items-start gap-7 max-sm:gap-3">
                    <p className="text-xl max-sm:text-[17px] font-serif text-[#e4dadac7]">
                        Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                    </p>
                    <p className="text-xl max-sm:text-[17px] font-serif text-[#e4dadac7]">
                        Wiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                    <a href="#" className="text-xl bebas-neue border-b-2 pb-1">
                        Read More
                    </a>
                </div>
            </div>
            <div className="absolute right-50 max-lg:relative max-lg:left-0 max-lg:-bottom-10 max-lg:w-[87%] bottom-10 w-[600px] max-sm:h-[200px] max-sm:px-5 h-[270px] flex justify-evenly bg-[#9752E5]">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col h-full justify-center gap-5">
                        <h3 className="bebas-neue text-2xl font-medium text-white">{stat.title}</h3>
                        <h3 className="bebas-neue text-7xl max-sm:text-4xl  font-medium text-white">
                            <CountUp end={parseInt(stat.value)} duration={2.5} suffix={stat.value.includes("+") ? "+" : ""} />
                        </h3>
                        <p className="text-[17px] text-gray-300 max-sm:whitespace-nowrap max-sm:w-[100px] max-sm:overflow-hidden">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
