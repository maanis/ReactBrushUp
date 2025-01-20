import React from 'react'

const Card2 = ({ data, index, handleClick }) => {
    const { name, profession, friends } = data
    return (
        <div className='w-48 p-2 rounded-md overflow-hidden bg-zinc-200'>
            <div className='h-32 w-full bg-red-600 rounded'></div>
            <h2 className='text-xl mt-1 font-semibold'>{name}</h2>
            <p className='text-xs text-zinc-600'>{profession}</p>
            <button onClick={() => handleClick(index)} className={`px-2 my-2 text-white rounded-full py-1 text-xs font-semibold ${friends ? 'bg-green-500' : 'bg-blue-600'}`}>{friends ? 'Friends' : 'Add Friend'}</button>
        </div>
    )
}

export default Card2
