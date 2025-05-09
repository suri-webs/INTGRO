'use client';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Play, Quote } from 'lucide-react';
import { SwiperData } from '@/lib/SecHeaderData';

export default function Testimonials() {
    return (
        <section className="w-full h-[670px] max-lg:flex-col max-md:py-[70px] max-md:gap-7 max-lg:bg-[#0F0F1C] max-lg:h-full flex justify-center items-center bg-black">
            <Swiper spaceBetween={50} pagination={{ clickable: true }} loop={true} modules={[Pagination]} autoplay={{ delay: 2000 }} speed={800} className="w-[48%] h-[100%] max-lg:w-full max-lg:h-[500px]">
                <div>
                    {SwiperData.map((item, i) => (
                        <SwiperSlide key={i} className="w-full flex justify-center items-center text-white bg-[#0F0F1C]">
                            <div className="w-full h-[90%] max-sm:gap-3 flex flex-col items-center justify-center gap-5 text-white bg-[#0F0F1C]">
                                <h3 className="bebas-neue text-2xl font-medium">{item.title}</h3>
                                <h1 className="bebas-neue text-5xl">{item.about}</h1>
                                <Quote className="w-6 h-6 text-white" />
                                <p className="w-[75%] max-lg:w-[95%] max-md:text-[17px] text-center text-[19px] text-[#ffffffa5]">{item.para}</p>
                                <div className="flex flex-col items-center gap-1 max-sm:2px">
                                    <div className="relative w-[110px] h-[110px] max-sm:w-[80px] max-sm:h-[80px] rounded-full overflow-hidden">
                                        <Image src={item.image} alt="" fill />
                                    </div>
                                    <h3 className="bebas-neue pt-4 max-sm:pt-1 text-2xl font-medium">{item.name}</h3>
                                    <h3 className="text-[17px] text-[#ffffffa5]">{item.work}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <div className='w-[52%] max-lg:h-[300px] max-lg:w-[90%] relative h-full flex justify-center items-center'>
                <div className='w-[100px] h-[100px] max-md:w-[80px] max-md:h-[80px] flex justify-center items-center  bg-white absolute  max-sm:animate-pulse rounded-full z-49'>
                    <Play className='fill-black' />
                </div>
                <Image className='absolute' src={'/images/Testmonilas_girl.jpg'} alt={''} fill></Image>
            </div>


        </section>
    );
}
