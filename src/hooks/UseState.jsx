import React, { useState } from 'react'

const UseState = () => {
    // const [val, setVal] = useState(100);
    // const [data, setdata] = useState({ name: 'manish', ban: true });
    // const [val, setval] = useState([1, 2, 3, 4, 5, 6]);
    const [data, setData] = useState([
        { name: 'manish', age: 22 },
        { name: 'raunak', age: 20 },
        { name: 'anurag', age: 19 },
    ]);
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            {/* basics
            <h2>{val}</h2>
            <button onClick={() => setVal(200)} className='bg-blue-600 px-2 py-1 text-zinc-200 rounded-full text-xs'>Click Me</button>
            <button onClick={() => setVal(prev => prev + 1)} className='bg-blue-600 px-2 py-1 text-zinc-200 rounded-full text-xs'>Click Me</button> */}

            {/* intermediate 1; UPDATING
            <h2>{data.name}</h2>
            <p>{data.ban.toString()}</p>
            <button onClick={() => setdata({ ...data, ban: !data.ban })} className={`${data.ban ? 'bg-blue-600' : 'bg-red-600'} px-2 py-1 text-zinc-200 rounded-full text-xs`}>Click Me</button> */}

            {/* intermediate 2; ADDING
            <h2>{data.name}</h2>
            <p>{data.ban.toString()}</p>
            {data.gender ? <h2>{data.gender}</h2> : ''}
            <button onClick={() => setdata({ ...data, gender: 'male' })} className={`${data.ban ? 'bg-blue-600' : 'bg-red-600'} px-2 py-1 text-zinc-200 rounded-full text-xs`}>Click Me</button> */}

            {/* removing items from array
            {val.map(e => (
                <div>
                    <h2>{e}</h2>
                </div>
            ))}
            <button onClick={() => setval(val.filter((e, index) => index != val.length - 1))} className='bg-blue-600 px-2 py-1 text-zinc-200 rounded-full text-xs'>Click Me</button> */}

            {/* updating any one item from an array of objects */}

            {data.map(e => (
                <div>
                    <h2>{e.name}</h2>
                    <h2>{e.age}</h2>
                </div>
            ))}
            <button onClick={() => setData(data.map(e => e.name === 'raunak' ? { name: 'raunak', age: 50 } : e))} className='bg-blue-600 px-2 py-1 text-zinc-200 rounded-full text-xs'>Click Me</button>

        </div>
    )
}

export default UseState
