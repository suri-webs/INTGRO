import { clientLogos } from "@/lib/SecHeaderData";
import Image from "next/image";
export default function FooterTop() {
    return (
        <section className="w-full relative max-sm:w-full max-sm:h-[450px] h-[700px] flex flex-col justify-center items-center bg-[#0F0F1C]">
            <div className="w-full h-[45%] max-sm:h-[170px] z-89 max-sm:mt-20 flex-wrap flex gap-10 justify-center items-end max-md:items-center pb-30 max-md:pb-0 max-sm:items-start max-sm:gap-0 absolute top-0">
                {clientLogos.map((src, index) => (
                    <Image key={index} src={src} alt="" className="max-sm:w-[100px] cursor-pointer opacity-35 hover:opacity-100 transition-all duration-500" width={170} height={0} />
                ))}
            </div>
            <Image src="/images/footer-bg-startup-copyright.png" alt="" fill />
        </section>
    );
}
