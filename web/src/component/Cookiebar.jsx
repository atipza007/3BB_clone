import { useState } from 'react'

function App() {
    const [show, setShow] = useState(true);
    const handleDismiss = () => {
        setShow(false);
    };
    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <>
            {show && (
                <div className="bg-gray-700 text-white text-center p-2 fixed bottom-0 left-0 right-0 z-10 opacity-75">
                    เว็บไซต์นี้ใช้คุกกี้เพื่อประสบการณ์การใช้งานที่ดีของคุณ อ่านรายละเอียดการใช้คุกกี้ของเว็บไซต์เพิ่มเติมได้ที่นโยบายความเป็นส่วนตัว
                    <button className="ml-4 text-white font-medium bg-orange-500 p-2" onClick={handleDismiss}>
                        รับทราบ
                    </button>
                    <button className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-700 text-white" onClick={handleGoToTop}>
                        ^
                    </button>
                </div>
            )}
        </>
    )
}

export default App
