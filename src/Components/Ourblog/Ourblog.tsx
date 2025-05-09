'use client'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { blogs } from '@/lib/SecHeaderData';

export default function Ourblog() {
    return (
        <section className="w-full h-full bg-[#0F0F1C] max-sm:px-0 px-10 max-sm:py-10 py-20">
            <div className="w-full flex h-[150px] mb-4 max-sm:h-[150px] justify-center max-sm:gap-2 items-center flex-col">
                <h3 className="bebas-neue text-2xl font-medium text-white">Our blog</h3>
                <h1 className="bebas-neue text-[55px] max-md:w-[90%] max-sm:text-center max-sm:text-3xl max-sm:leading-8 leading-[56px] text-white">
                    Latest News
                </h1>
            </div>
            <Swiper slidesPerView={3} spaceBetween={50} freeMode={true}
                loop={true} autoplay={{ delay: 5000 }} speed={800} pagination={{ clickable: true }}
                breakpoints={{
                    340: { slidesPerView: 1, spaceBetween: 20 }, 640: { slidesPerView: 1, spaceBetween: 20 },
                    700: { slidesPerView: 2, spaceBetween: 20 }, 924: { slidesPerView: 3, spaceBetween: 50 },
                }}
                modules={[FreeMode, Pagination, Autoplay]} className="mySwiper w-[90%] h-full"
            >
                {blogs.map((blog, index) => (
                    <SwiperSlide key={index} className="bg-[#0F0F1C] max-sm:px-2 text-white overflow-hidden shadow-lg transition-all duration-300">
                        <div className={`relative w-full max-sm:w-[100%] justify-center overflow-hidden rounded-t-2xl items-center ${[1, 3, 5, 7].includes(index) ? 'h-[470px] max-sm:h-[320px] max-lg:h-[300px]' : 'h-[370px] max-sm:h-[290px]'}`}>
                            <Image src={blog.image} alt={blog.title} fill className="object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
                        </div>
                        <div className="pt-5 pb-17 max-sm:pt-5">
                            <p className="text-sm text-gray-400">
                                <span className="font-bold uppercase">{blog.category}</span> • {blog.date}
                            </p>
                            <h3 className="mt-2 text-xl font-extrabold  max-sm:text-base">{blog.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
