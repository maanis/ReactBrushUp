import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
    return (
        <>
            <div className='flex flex-col items-center'>
                <Link to='/user/john' className='h-[42px] my-2 w-[300px] flex justify-center items-center text-xl font-semibold text-white rounded-md bg-orange-700'>John</Link>
                <Link to='/user/dow' className='h-[42px] my-2 w-[300px] flex justify-center items-center text-xl font-semibold text-white rounded-md bg-orange-700'>Dow</Link>
                <Link to='/user/max' className='h-[42px] my-2 w-[300px] flex justify-center items-center text-xl font-semibold text-white rounded-md bg-orange-700'>Max</Link>
                <hr />
            </div>
            <Outlet />
        </>
    )
}

export default User