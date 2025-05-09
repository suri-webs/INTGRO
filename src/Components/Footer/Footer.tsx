"use client"
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = ["Home", "Services", "About Us", "Features", "Contacts"];

export default function Footer() {
    const [click, setclick] = useState(false)

    return (
        <footer className="w-full flex flex-col justify-center max-lg:h-full items-center h-[500px] bg-[#030308]">
            <div className="w-[90%] flex justify-center gap-16 max-sm:gap-5 items-start h-[70%] max-lg:flex-wrap pt-10">
                <Image className="max-md:w-[145px]" src="/images/Navbar-logo.png" alt="Logo" width={170} height={0} />
                <div className="w-full h-full  max-md:py-10  flex justify-evenly max-lg:flex-wrap">
                    <ul className="w-[25%] max-sm:w-[70%] flex flex-col gap-5 text-white">
                        <h3 className="bebas-neue text-xl font-medium">Office</h3>
                        <li className="text-[#ffffffa6]  max-sm:text-[15px] text-[17px] w-[70%]">
                            Germany — 785 15h Street, Office 478 Berlin, De 81566
                        </li>
                        <Link href="/" className="text-[17px] border-b-2 pb-2 w-fit text-[#ffffffa6]"> info@example.com</Link>
                        <li className="text-[17px] text-[#ffffffa6] max-sm:text-[16px]">+1 840 841 25 69</li>
                    </ul>

                    <ul className="w-[20%]  max-md:w-[25%]  flex flex-col gap-2 text-white">
                        <h3 className="bebas-neue text-xl font-medium">Links</h3>
                        {links.map((name, i) => (
                            <Link key={i} href="/" className="text-[#ffffffa6] max-sm:text-[15px]  text-[18px]"> {name} </Link>
                        ))}
                    </ul>

                    <div className="w-[25%] max-sm:mt-10  max-md:w-full  text-white">
                        <h3 className="bebas-neue text-xl font-medium mb-2">Newsletter</h3>
                        <div className="flex items-center gap-2 border-b-2 max-md:border-b-0 border-[#ffffffa6] pb-2 mb-2">
                            <Mail className="text-[#ffffffa6] max-sm:w-8" />
                            <input type="text" className="w-[75%] bg-transparent text-[18px] max-sm:text-[15px] h-[40px] text-white" placeholder="Enter Your Email Address" />
                            <ArrowRight className="text-[#ffffffa6] max-sm:w-8 hover:text-[#E156E6] transition duration-700" />
                        </div>
                        <p className="text-[17px] max-sm:text-[14px] flex items-center max-sm:pl-1 gap-2 text-[#ffffffa6]">
                            <span className="w-4 cursor-pointer h-4 border-2 flex justify-center items-center border-white" onClick={() => { return (setclick(!click)) }}>
                                {click && <span className="w-2 h-2 bg-white" />}
                            </span>
                            I agree to the <span className="text-white">Privacy Policy.</span>
                        </p>
                    </div>
                </div>
            </div>
            <hr className="border-white w-[90%]" />
            <p className="w-[90%] text-[#ffffffa4] h-[50px] max-sm:text-[14px] max-sm:justify-center items-center flex">AncoraThemes © 2025. All Rights Reserved .</p>
        </footer>
    );
}
