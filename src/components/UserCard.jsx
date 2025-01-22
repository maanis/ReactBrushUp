import React from 'react'

const UserCard = ({ data, index, removeUser }) => {
    const { name, image, email } = data
    return (
        <div className='p-3 w-28 bg-zinc-800 flex flex-col items-center text-center rounded-md'>
            <img className='h-8 w-8 rounded-full object-cover' src={image} alt="" />
            <h2 className='text-zinc-300 font-semibold'>{name}</h2>
            <p className='text-zinc-600 text-[7px] '>{email}</p>
            <p className='text-[7px] leading-none text-zinc-400 opacity-45'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repellendus. Eveniet ipsum sequi nesciunt!</p>
            <button onClick={() => removeUser(index)} className='px-1 py-[2px] bg-red-600 rounded-md text-[8px] font-semibold mt-2 whitespace-nowrap'>Remove User</button>
        </div>
    )
}

export default UserCard