import { useEffect, useState } from 'react'

function App(props) {
    const [data, setData] = useState(props.data);
    return (
        <>
            <div className='grid lg:grid-cols-2 mt-2 lg:mx-[200px]'>
                {data.map(data => (
                    <div key={data.id}>
                        <a href="#" className="flex flex-col items-center mb-5 bg-white md:flex-row md:max-w-2xl">
                            <img className="w-full h-[220px]" src={data.url} alt="" />
                            <div className="flex flex-col -mt-[70px] justify-between ml-4">
                                <h5 className="mt-20 mb-2 text-lg text-gray-900">{data.desc}</h5>
                                <p className="mb-1 text-sm text-orange-400">27 February 2023 13:30</p>
                                <p className="text-sm text-gray-700">บริษัท ทริปเปิลที บรอดแบนด์ จำกัด (มหาชน) หรือ ...</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
