import { CheckData } from "@/lib/SecHeaderData";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
export default function OurBenefits() {
    return (
        <section className="w-full h-[600px] max-lg:h-full max-lg:py-[50px] max-lg:flex-col bg-[#030308] flex justify-center items-center">
            <div className="w-[45%] max-lg:w-[90%] h-full  flex justify-center items-center  ">
                <Image src={"/images/OurB-Image.jpg"} alt={""} width={650} height={450}></Image>
            </div>
            <div className="w-[45%] max-lg:w-[90%] gap-6 max-lg:pl-[10px] pl-[60px] h-[90%] flex flex-col justify-center max-lg:py-[40px]">
                <h3 className="bebas-neue text-2xl text-white *: font-medium">OUR BENEFITS</h3>
                <h4 className="bebas-neue text-white text-[55px] w-[80%] max-lg:w-[90%] max-lg:leading-9 leading-13 max-md:text-start max-sm:text-4xl ">Experience the impact of winning ideas</h4>
                <p className="text-[17px] max-lg:w-[90%] max-sm:whitespace-wrap max-sm:h-[50px] max-sm:overflow-hidden w-[80%] text-[#b8b6b6]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor volupte cillum dolore eu nulla pariatur.</p>
                <div className="flex flex-col gap-1">
                    {CheckData.map((items, index) => {
                        return (
                            <span className="text-[15px] font-[480] flex gap-2 text-white" key={index} >
                                <Check className="w-5 text-[#DF50E4]" />{items.title}
                            </span>
                        )
                    })}
                </div>
                <button className="px-10 py-2 text-[19px] cursor-pointer text-white bg-[#DF50E4] hover:bg-white hover:text-black bebas-neue flex w-fit transition-all duration-300 justify-center items-center gap-2">
                    ABOUT US <ArrowRight className="w-5" />
                </button>
            </div>

        </section>
    )
}