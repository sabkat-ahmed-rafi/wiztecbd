import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

const Technologies = () => {
    return (
        <div className=" md:py-100 py-12">
            <div className=" md:mb-12 mb-6">
                <h1 className=" text-center text-H1 font-bold mb-2">Technology We Use</h1>
            </div>
            <Swiper
                spaceBetween={0}
                slidesPerView={6}
                // responsive break point
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 0,
                    },
                }}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={4000}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center w-full  justify-center flex-shrink-0 h-54">
                        <Image src="/assets/images/unisef.webp" alt="Slide 1" height={54} width={223} className="w-auto  h-auto" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Technologies;
