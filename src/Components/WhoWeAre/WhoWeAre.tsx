import { WhoWeAreData } from "@/lib/SecHeaderData";
import Image from "next/image";
export default function WhoWeAre() {
    return (
        <section className="w-full py-[120px] flex flex-col gap-15 relative h-full bg-[#030308]">
            <Image className="absolute -top-150 right-0 z-7 max-lg:hidden" src="/images/HeaderRight_bg.webp" alt="Right BG" width={470} height={500} />
            <div className="flex flex-col justify-center items-center text-white">
                <div className="flex flex-col justify-center max-sm:items-start pl-[30px] items-center h-fit max-md:gap-4 gap-2">
                    <h3 className="bebas-neue text-xl max-sm:text-[17px] font-medium">WHO WE ARE </h3>
                    <h4 className="bebas-neue w-[55%] max-lg:w-[90%] max-sm:text-start  text-center text-5xl max-md:text-center max-sm:text-2xl max-sm:leading-7">WE’VE HELPED HUNDREDS OF PARTNERS, RANGING FROM STARTUPS TO MEDIUM-SIZED BUSINESSES WITH THEIR GROWTH</h4>
                    <h3 className="bebas-neue text-xl max-sm:text-[20px]  font-medium">PITER BOWMAN</h3>
                    <h3 className="text-[16px] text-[#ffffffc0]">Business CEO</h3>
                </div>
            </div>
            <div className="w-full h-[410px] max-lg:h-full flex max-lg:flex-col justify-center items-center gap-10">
                {WhoWeAreData.map((items, index) => {
                    return (
                        <div key={index} className={`w-[20%] h-[95%] max-lg:h-[300px] max-lg:w-[90%] flex justify-start pl-[30px] items-end relative overflow-hidden group rounded-xl bg-center bg-no-repeat ${items.bgClass}`}>
                            <div className="absolute inset-0 bg-[#9c58e4c1] opacity-0 group-hover:opacity-100 transition-all duration-600 z-10" />
                            <h2 className="absolute left-5 top-[-5rem] group-hover:top-5 text-white text-2xl font-bold transition-all duration-600 z-20">{items.num}</h2>
                            <h2 className="absolute bottom-7 group-hover:bottom-[4.25rem] max-sm:group-hover:bottom-9 text-white text-[24px] font-medium bebas-neue transition-all duration-600 z-20 max-sm:bottom-2">{items.title}</h2>
                            <h2 className="absolute bottom-[-6rem] max-sm:group-hover:bottom-5    group-hover:bottom-12 text-white text-[15px] font-medium transition-all duration-600 z-20">{items.subtitle}</h2>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}