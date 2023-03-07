import { useState } from 'react'

function App() {
    return (
        <>
            <div className='bg-slate-800 text-white h-[1100px] lg:h-[380px]'>
                <div className='grid lg:grid-cols-5 gap-5 ml-5 lg:mx-[200px]'>
                <div className='mt-10'>
                    <div className='text-orange-400 text-2xl'>เกี่ยวกับเรา</div>
                    <div className='grid text-lg mt-2'>
                        <a>เกี่ยวกับเรา</a>
                        <a>สิทธิพิเศษ</a>
                        <a>เงื่อนไขและข้อกำหนด</a>
                        <a>ร่วมงานกับเรา</a>
                        <a>ติดต่อเรา</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-orange-400 text-2xl'>แพ็กเกจแนะนำ</div>
                    <div className='grid text-lg mt-2'>
                        <a>3BB Broadband</a>
                        <a>3BB Corporate</a>
                        <a>3BB WiFi</a>
                        <a>Other Service</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-orange-400 text-2xl'>ความยั่งยืน</div>
                    <div className='grid text-lg mt-2'>
                        <a>โครงการบรอดแบนด์อินเทอร์เน็ตฟรี เพื่อการศึกษา</a>
                        <a>การจัดการความยั่งยืนในมิติสิ่งแวดล้อม</a>
                        <a>การจัดการด้านความยั่งยืนในมิติสังคม</a>
                        <a>News@Acitivities</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='text-orange-400 text-2xl'>ช่วยเหลือและบริการ</div>
                    <div className='grid text-lg mt-2'>
                        <a>3BB Speed Test</a>
                        <a>ศูนย์บริการ 3BB</a>
                        <a>ช่องทางการแจ้งเว็บที่ผิดกฎหมาย</a>
                        <a>ช่องทางการแจ้งสายเคเบิ้ลตกหรือหย่อน</a>
                        <a>ศูนย์รับเรื่องร้องเรียน Complaint Center</a>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='grid mt-2'>
                        <a className='text-white font-bold text-2xl'>3BB Call Centert</a>
                        <a className='text-orange-400 font-bold text-5xl'>1530</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default App
