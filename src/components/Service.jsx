import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

const Service = () => {
    const button = useRef(null)
    const [data, setdata] = useState([]);
    const url = 'https://fakestoreapi.com/products'
    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [button])
    return (

        <>
            <button className='px-3 py-1 bg-orange-600 rounded-md mt-3 text-white font-semibold'>Api</button>
            <div className='mt-4'>
                {data.length > 0 ? data.map((item) => {
                    return (
                        <div key={item.id} className='flex flex-col items-center'>
                            <h2 className='text-xl bg-orange-600 w-full p-4 text-white mt-3 rounded-lg font-semibold'>{item.title}</h2>
                        </div>)
                }) : <h1>Loading...</h1>}
            </div>
        </>
    )
}

export default Service