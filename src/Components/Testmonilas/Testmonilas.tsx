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
        <section className="w-full h-[670px]  flex justify-center items-center bg-black">
            <Swiper
                spaceBetween={50}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="w-[48%] h-[100%]"
            >
                <div>
                    {SwiperData.map((item, i) => (
                        <SwiperSlide key={i} className="w-full flex justify-center items-center text-white bg-[#0F0F1C]">
                            <div className="w-full h-[90%] flex flex-col items-center justify-center gap-5 text-white bg-[#0F0F1C]">
                                <h3 className="bebas-neue text-2xl font-medium">{item.title}</h3>
                                <h1 className="bebas-neue text-5xl">{item.about}</h1>
                                <Quote className="w-6 h-6 text-white" />
                                <p className="w-[75%] text-center text-[19px] text-[#ffffffa5]">{item.para}</p>
                                <div className="flex flex-col items-center gap-1">
                                    <div className="relative w-[110px] h-[110px] rounded-full overflow-hidden">
                                        <Image src={item.image} alt="" fill />
                                    </div>
                                    <h3 className="bebas-neue pt-4 text-2xl font-medium">{item.name}</h3>
                                    <h3 className="text-[17px] text-[#ffffffa5]">{item.work}</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <div className='w-[52%] relative h-full flex justify-center items-center'>
                <div className='w-[100px] h-[100px] flex justify-center items-center  bg-white absolute  rounded-full z-49'>
                    <Play className='fill-black' />
                </div>
                <Image className='absolute' src={'/images/Testmonilas_girl.jpg'} alt={''} fill></Image>
            </div>


        </section>
    );
}
