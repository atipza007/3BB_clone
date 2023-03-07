import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper";

function App() {
    return (
        <>
            <div className='flex justify-between text-4xl bg-orange-500 h-[150px]'>
                <div className='text-white mt-[80px] ml-2 lg:ml-10 font-semibold whitespace-nowrap'>โปรโมชั่นแนะนำ</div>
                <div className="mt-[80px] mr-2 lg:mr-[130px]">
                    <button
                        type="button"
                        className="rounded-full py-2.5 px-4 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-white whitespace-nowrap"
                    >
                        ดูทั้งหมด
                    </button>
                </div>
            </div>
            <Swiper
                style={{
                    'background': '#f97316',
                    '--swiper-navigation-color': '#FFFFFF',
                    '--swiper-pagination-color': '#FFFFFF',
                }}
                spaceBetween={5}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center text-white text-xl font-semibold mx-[110px] mb-[20px]">
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/03/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9B%E0%B8%81%E0%B9%84%E0%B8%AE%E0%B9%84%E0%B8%A5%E0%B8%97%E0%B9%8C-March-2023_promotion-web_420x575.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">Highlight of The Month Mar 2023</a>
                        <a href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/3bbxmercular-summer-use-420x575-1.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">3BB X MERCULAR : SUMMER PARADISE</a>
                        <a href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/PROMO-Main-Campaign2-SOMJEED-Mini-Game-FINAL.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">SOMJEED MINI GAME ผ่าน 3BB LINE OA (@3BB.promotion)</a>
                        <a href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/Just%E0%B8%94%E0%B8%B9it_promotion-web_420x575.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">LIVE เม้ามอยหนังดีสปอยซีรีส์เด็ด ใน 3BB GIGATV กับกูรูหนัง จาก JUSTดูIT</a>
                        <a href="">...</a>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center text-white text-xl font-semibold mx-[110px] mb-[20px]">
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/Mercular_promotion-web_420x575.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">3BB X Mercular</a>
                        <a className="mt-2 mb-10" href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/Loveyouflower-420x575-1.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">3BB X LoveYouFlower.com</a>
                        <a className="mt-2 mb-10" href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/3bbx-Pahkahmah-420x575-1.png" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">3BB X Pahkahmah Thailand</a>
                        <a className="mt-2 mb-10" href="">...</a>
                    </div>
                    <div className="grid">
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/02/ANKER-PROMO.jpg" alt="" width="280" height="350" />
                        <a className="mt-4 w-[280px] h-[100px]" href="">3BB X ANKER Thailand</a>
                        <a className="mt-2 mb-10" href="">...</a>
                    </div>
                </div></SwiperSlide>
            </Swiper>
        </>
    )
}

export default App
