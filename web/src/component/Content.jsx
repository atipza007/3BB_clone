import { useState } from 'react'

function App() {
    return (
        <>
            <div className='hidden lg:flex flex-col text-3xl bg-slate-800 h-[250px]'>
                <div className='flex justify-center mt-10'>
                    <div className='text-orange-400'>พิเศษ!</div>&nbsp;
                    <div className='text-white'>เมื่อติดตั้งอินเทอร์เน็ตบ้านวันนี้</div>
                </div>
                <div className='flex justify-center mt-[50px]'>
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2021/01/5_Router-WiFi-6_%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B9%80%E0%B8%A5%E0%B8%A2%E0%B9%80%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C_1680x350.jpg" alt="" width="1200" height="350" />
                </div>
            </div>
            <div className='flex flex-col text-4xl bg-orange-500 h-[2300px] lg:h-[800px]'>
                <div className='text-white mt-8 lg:mt-[150px] ml-8 font-semibold'>แพ็กเกจแนะนำ</div>
                <div className='grid grid-cols-1 lg:grid-cols-4 justify-items-center mx-[100px] mt-8'>
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2022/02/Product-page_GIGATV_24_590-1.jpg" alt="" width="280" height="350" />
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2022/10/Product-page_AIS-package_Pre789.jpg" alt="" width="280" height="350" />
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2022/10/Product-page_AIS-package_Fam799.jpg" alt="" width="280" height="350" />
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2021/09/GIGAFiber_590freeHBO-1-Copy.jpg" alt="" width="280" height="350" />
                </div>
            </div>
            <div className='flex flex-col text-3xl bg-slate-800 h-[660px] lg:h-[620px]'>
                <div className='flex justify-center mt-10'>
                    <div className='mt-[-8px]'>
                        <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/download-3bb.png" alt="" width="280" height="350" />
                    </div>
                    <div className='text-white'>อินเทอร์เน็ตบ้านพร้อมความบันเทิง</div>
                </div>
                <div className='flex lg:hidden justify-center mt-[30px]'>
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/01/GIGA-TV_banner_500x500_vMobile-1.png" alt="" width="400" height="350" />
                </div>
                <div className='hidden lg:flex justify-center mt-[30px]'>
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2023/01/GIGA-TV_banner_1680x550_v4-no-bg-1.png" alt="" width="1200" height="350" />
                </div>
                <div className='flex justify-center mt-7'>
                    <button
                        type="button"
                        className="rounded-md bg-orange-400 py-4 px-8 text-xl text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        ดูรายละเอียด
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
