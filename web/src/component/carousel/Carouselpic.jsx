import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { Autoplay, Navigation, FreeMode } from "swiper";

function App(props) {
    const [data, setData] = useState(props.data);
    const [dataName, setDataName] = useState(props.dataName);
    return (
        <>
            <div className='flex justify-between text-4xl bg-gray-800 h-[180px]'>
                <div className='text-white mt-[80px] ml-10 font-semibold whitespace-nowrap'>{dataName}</div>
                <div className="mt-[80px] mr-10 lg:mr-[130px]">
                    <button
                        type="button"
                        className="rounded-full py-2.5 px-4 text-base font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-white whitespace-nowrap"
                    >
                        ดูทั้งหมด
                    </button>
                </div>
            </div>
            <div className='bg-gray-800 mt-[-200px] h-[420px] lg:h-[300px]'>
                <div className="lg:mx-[200px] mt-[180px]">
                <Swiper
                    style={{
                        'background': '#1e293b',
                        '--swiper-navigation-color': '#f97316',
                    }}
                    slidesPerView={1}
                    spaceBetween={1}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    breakpoints={{
                        640: {
                          slidesPerView: 4,
                          spaceBetween: 1,
                        },
                        768: {
                          slidesPerView: 4,
                          spaceBetween: 1,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 1,
                        },
                      }}
                    modules={[Autoplay, Navigation, FreeMode]}
                    className=""
                >
                    {data.map(data => (
                        <SwiperSlide key={data.id}>
                            <div className="lg:max-w-[260px] bg-white">
                                <a href="#">
                                    <img src={data.url} alt="" />
                                </a>
                                <div className="p-5">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg tracking-tight text-gray-900">{data.desc}</h5>
                                    </a>
                                    <p className="mb-3 font-normal text-gray-400">{data.descname}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                </div>       
            </div>
        </>
    )
}

export default App
