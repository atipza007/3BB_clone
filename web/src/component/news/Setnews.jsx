import { useState } from 'react'
import data1 from './mock1.json'
import data2 from './mock2.json'
import News from './News'

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <div className="flex justify-between text-2xl text-center text-gray-500 lg:mx-[200px]">
        <div>
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => handleTabClick(1)} className="mr-2">
              <a className={`inline-block pl-2 pb-3 text-orange-500 border-b-4 rounded-t-lg hover:text-gray-600 ${activeTab === 1 ? 'border-orange-500' : 'border-transparent'}`}>3BB</a>
              <a className={`inline-block p-3 border-b-4 rounded-t-lg hover:text-gray-600 ${activeTab === 1 ? 'border-orange-500' : 'border-transparent'}`}>ข่าวสารและกิจกรรม</a>
            </li>
            <li onClick={() => handleTabClick(2)} className="mr-2">
              <a className={`inline-block p-3 border-b-4 rounded-t-lg hover:text-gray-600 ${activeTab === 2 ? 'border-orange-500' : 'border-transparent'}`}>ความยั่งยืน</a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="rounded-full py-2.5 px-4 text-base font-semibold text-orange-500 shadow-sm ring-1 ring-inset ring-orange-600 hover:ring-orange-600 whitespace-nowrap"
          >
            ดูทั้งหมด
          </button>
        </div>
      </div>
      {activeTab === 1 && <News data={data1} />}
      {activeTab === 2 && <News data={data2} />}
    </>
  )
}

export default App
