import { useState, useRef, useEffect } from 'react'
import { Bars3Icon, UserCircleIcon } from '@heroicons/react/20/solid'

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    function handleClickOutside(event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
            setIsOpen2(false);
        }
    }

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    function toggleDropdown2() {
        setIsOpen2(!isOpen2);
    }

    return (
        <>
            <div className='flex justify-between mx-5 md:justify-center lg:justify-center lg:gap-[150px] xl:gap-[300px] text-lg'>
                <div className='flex mt-6'>
                    <Bars3Icon onMouseEnter={toggleDropdown2} className="-ml-1 mr-2 h-5 w-5 mt-1 text-orange-600" aria-hidden="true" />
                    <a className='hidden sm:flex sm:whitespace-nowrap' href="#home" onMouseEnter={toggleDropdown2}>เมนูหลัก</a>
                </div>
                <div className='my-5 xl:ml-[50px] 2xl:ml-[200px]'>
                    <img src="https://fiber.3bb.co.th/wp-content/uploads/2020/11/3BB_logo_popupfooter.jpg"
                        alt="" width="100" height="40" />
                </div>
                <div className='mt-6 md:hidden'>
                    <UserCircleIcon className="h-10 w-10 text-orange-500" aria-hidden="true" />
                </div>
                <div className='md:hidden sm:hidden mt-6 hidden lg:flex'>
                    <a className='whitespace-nowrap' href="#contact">ช่องทางชำระค่าบริการ </a> &nbsp;
                    <a className='whitespace-nowrap' href="#contact">| ช่วยเหลือ</a>
                    <div className='ml-2'>
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-black bg-white px-4 font-medium text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 whitespace-nowrap"
                        >
                            <UserCircleIcon className="-ml-1 mr-2 h-5 w-5 text-orange-600" aria-hidden="true" />
                            เข้าสู่ระบบ
                        </button>
                    </div>
                    <div>
                        <div className="relative" ref={dropdownRef}>
                            <button
                                className="bg-white text-black border border-black px-4 ml-2 rounded"
                                onMouseEnter={toggleDropdown}
                            >
                                -
                            </button>
                            <div className={`absolute right-0 mt-2 w-48 ${isOpen ? 'block' : 'hidden'}`}>
                                <div className="bg-white rounded shadow-md">
                                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-orange-500 hover:text-white">
                                        thai
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`absolute z-10 bg-orange-500 w-full ${isOpen2 ? '' : 'hidden'}`} ref={dropdownRef}>
                <div className='grid lg:grid-cols-5 text-white mt-2 ml-4 lg:ml-20'>
                    <div>
                        เมนูหลัก
                        <div className='lg:grid text-lg mt-2 hidden'>
                            <a>ทีวีและความบันเทิง</a>
                            <a>โปรโมชั่น</a>
                            <a>ช้อปปิ้ง</a>
                            <a>พอยต์และสิทธิพิเศษ</a>
                            <a>ศูนย์บริการ</a>
                            <a>ข่าวสารและกิจกรรม</a>
                            <a>ความยั่งยืน</a>
                            <a>ช่วยเหลือ</a>
                            <a className='lg:mb-10'></a>
                        </div>
                    </div>
                    <div>
                        อินเทอร์เน็ตบ้าน
                        <div className='lg:grid text-lg mt-2 hidden'>
                            <a>3BB GIGA Fiber</a>
                            <a>3BB GIGA TV</a>
                        </div>
                    </div>
                    <div>
                        อินเทอร์เน็ตองค์กร
                        <div className='lg:grid text-lg mt-2 hidden'>
                            <a>Corporate Solution</a>
                            <a>3BB Dark Fiber</a>
                        </div>
                    </div>
                    <div>
                        VAS
                        <div className='lg:grid text-lg mt-2 hidden'>
                            <a>3BB WiFi</a>
                            <a>3BB Movie</a>
                            <a>3BB Voice</a>
                            <a>3BB Game Hub</a>
                        </div>
                    </div>
                    <div>อื่นๆ
                        <div className='lg:grid text-lg mt-2 hidden'>
                            <a>3BB Mail</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
