import { useState } from 'react'

function App() {
  return (
    <>
      <ul className="hidden lg:flex justify-center text-lg bg-orange-500">
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">หน้าแรก</a>
        </li>
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">แพ็กเกจอินเตอร์เน็ต</a>
        </li>
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">ทีวีและความบันเทิง</a>
        </li>
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">โปรโมชั่น</a>
        </li>
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">พอยต์และสิทธิพิเศษ</a>
        </li>
        <li className="mr-6">
          <a className="py-3 px-3 block text-white text-center hover:text-orange-500 hover:bg-white" href="#">ศูนย์บริการ</a>
        </li>
      </ul>
    </>
  )
}

export default App
