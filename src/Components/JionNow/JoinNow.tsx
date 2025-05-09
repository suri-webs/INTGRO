import { ratings } from "@/lib/SecHeaderData";
import { ArrowRight, Heart, ShoppingCart, Star, StarHalf } from "lucide-react";
import Image from "next/image";

export default function JoinNow() {
  return (
    <section className="relative w-full h-[790px] max-md:h-full max-md:py-10 flex justify-center items-center overflow-hidden bg-[#030308] z-50">
      <Image src="/images/Sec_header_img.webp" alt="" width={450} height={0} className="absolute -left-60 z-40 max-md:hidden" />
      <Image src="/images/HeaderLeft_bg.webp" alt="Left BG" width={570} height={500} className="absolute top-0 left-0" />

      <div className="w-[85%] h-[70%] z-40 flex flex-col items-center justify-center gap-5">
        <h3 className="bebas-neue text-2xl font-medium text-white">Join now</h3>
        <h1 className="bebas-neue text-5xl text-white">Investor Tokens</h1>

        <div className="flex justify-center max-md:flex-col items-center w-full h-[80%] gap-10">
          {ratings.map((items, index) => (
            <div key={index} className="w-[23%] max-md:w-full max-md:h-[450px] h-full flex flex-col items-center">
              <div className="relative group w-full h-[70%] overflow-hidden flex justify-center items-center">
                <Image src={items.image} alt="" fill className="w-full h-full transition-transform duration-500 hover:scale-105" />
                <div className="absolute w-[90%] h-[50px] flex gap-5 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-50">
                  {[Heart, ShoppingCart, ArrowRight].map((Icon, i) => (
                    <div key={i} className="w-[17%] h-[95%] bg-white flex justify-center items-center transition-all duration-500 relative top-0 hover:text-[#F0067C] hover:-top-3">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="bebas-neue mt-7 text-[24px] font-medium text-white transition-colors duration-500 hover:text-[#F0067C]">
                {items.name}
              </h3>
              <p className="bebas-neue text-white">{items.price}</p>
              <div className="flex gap-1">
                {Array.from({ length: Math.floor(items.rating) }).map((_, i) => (
                  <Star key={i} className="w-[15px] text-yellow-500 fill-amber-500" />
                ))}
                {items.rating % 1 !== 0 && <StarHalf className="w-[15px] text-yellow-500 fill-amber-500" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
