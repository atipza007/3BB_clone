import { useState } from 'react'

function App() {
    return (
        <>
            <div className='bg-white h-[320px]'>
                <div className='grid lg:grid-cols-3 gap-5 ml-5 lg:mx-[200px]'>
                    <div className='mt-10'>
                        <div className='text-orange-400 text-2xl'>บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน)</div>
                        <div className='grid text-lg mt-2'>
                            <a>200 หมู่ 4 ถนนแจ้งวัฒนะ ตำบลปากเกร็ด อำเภอปากเกร็ด
                                จังหวัดนนทบุรี 11120
                            </a>
                            <a>โทรศัพท์ : 66-2-100-2100 แฟกซ์ : 66-2-100-2121</a>
                            <a className='mb-10'>สำหรับร้องเรียน : 66-2-100-1100</a>
                        </div>
                    </div>
                    <div className='flex justify-center lg:mt-10'>
                        <div>
                            <img className='w-[170px]' src="https://fiber.3bb.co.th/wp-content/uploads/2021/01/3BB_logo_popup-1-300x128-1.png" alt="" />
                        </div>
                    </div>
                    <div className='lg:mt-10'>
                        <div className='flex justify-center'>
                            <div className='text-lg'>รองรับโดย</div>
                            <img className='w-[100px]' src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/bns_registered.png" alt="" />
                        </div>
                        <div className='flex justify-center gap-4 mt-2'>
                            <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/665209.png" alt="" />
                            <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/Socialmedia_icons_Play_Youtube-512.png" alt="" />
                            <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/Line_%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B9%83%E0%B8%9A%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94.png" alt="" />
                            <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/5639255371566470606-512.png" alt="" />
                            <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/12/socialtweettwittericon-1320192248146512175.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='grid lg:flex lg:justify-between border-t border-slate-300 mt-4 ml-5 lg:mx-[200px]'>
                    <p className='mt-4'>@2020 บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) All rights reserved</p>
                    <p className='mt-4'>นโยบายการคุ้มครองข้อมูลส่วนบุคคล | ช่วยเหลือ</p>
                </div>
            </div>
        </>
    )
}

export default App
