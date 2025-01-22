import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserDets = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center mt-4'>
            <h2 className='text-3xl'>Heyyy!! <span className='capitalize font-semibold text-orange-600'>{name}</span></h2>
            <button onClick={() => navigate(-1)} className='px-3 py-1 bg-orange-600 rounded-md mt-3 text-white font-semibold'>Go back</button>
        </div>
    )
}

export default UserDets