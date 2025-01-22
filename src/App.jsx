import React, { useState } from 'react'
import Card2 from './components/Card2'
import Navbar from './components/Navbar';

const App = () => {
    const raw = [
        { name: 'Manish Jha', profession: 'Software Developer', friends: false },
        { name: 'Raunak Jha', profession: 'Front-End Developer', friends: false },
        { name: 'Anurag Mishra', profession: 'Gymnastic', friends: false },
        { name: 'Annu', profession: 'HR', friends: false },
    ]
    const [data, setdata] = useState(raw);
    const handleClick = (index) => {
        setdata(prev => {
            return prev.map((e, i) => {
                if (i === index) return { ...e, friends: !e.friends }
                return e
            })
        })
    }
    return (
        <>
            <div className='h-screen w-full'>
                <Navbar data={data} />
                <div className="flex justify-center items-center gap-6 h-[90%]">
                    {data.map((item, index) => (
                        <Card2 key={index} index={index} handleClick={handleClick} data={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
