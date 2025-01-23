import axios from 'axios'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from '../context/Context'

const Service = () => {
    // useEffect(() => {
    //     axios.get(url)
    //         .then((res) => {
    //             setdata(res.data)
    //             console.log(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])
    useEffect(() => {
        alert('Service component mounted')
    })
    const { handleApiReq, data } = useContext(UserContext)
    return (

        <>
            <button onClick={handleApiReq} className='px-3 py-1 bg-orange-600 rounded-md mt-3 text-white font-semibold'>Api</button>
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