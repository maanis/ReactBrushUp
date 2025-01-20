import React, { useState } from 'react'
import Card2 from './components/Card2'

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
        // alert('hey')

    }
    return (
        <>
            <div className='h-screen w-full flex justify-center items-center gap-5'>
                {data.map((item, index) => (
                    <Card2 key={index} index={index} handleClick={handleClick} data={item} />
                ))}
            </div>
        </>
    )
}

export default App
