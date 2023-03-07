import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Autoplay, Navigation } from "swiper";

function App() {
    return (
        <>
            <div className='flex justify-center text-4xl bg-slate-800 h-[180px]'>
                <div className='text-white mt-[80px] ml-8'>สิทธิพิเศษสำหรับลูกค้า 3BB</div>
            </div>
            <Swiper
                style={{
                    'background': '#1e293b',
                    '--swiper-navigation-color': '#f27025',
                    '--swiper-pagination-color': '#f27025',
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                navigation={true}
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 1,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 1,
                    },
                  }}
                modules={[Autoplay, Navigation,EffectCoverflow]}
                className="mySwiper"
            >
                <SwiperSlide><img className="w-[1500px] h-[400px] mx-auto" src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/Yellow-Stone-%E0%B9%80%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%84%E0%B9%89%E0%B8%AD_1490x585.jpg" alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-[1500px] h-[400px] mx-auto" src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/SHINKANZEN_1490x585-1.jpg" alt=""/></SwiperSlide>
                <SwiperSlide><img className="w-[1500px] h-[400px] mx-auto" src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/McDoanalds-Banner-1.jpg" alt=""/></SwiperSlide>
            </Swiper>
        </>
    )
}

export default App
