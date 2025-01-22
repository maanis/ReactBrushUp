import React from 'react'

const UserCard = () => {
    return (
        <div className='p-3 w-28 bg-zinc-800 flex flex-col items-center text-center rounded-md'>
            <img className='h-8 w-8 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h2 className='text-zinc-300 font-semibold'>Manish Jha</h2>
            <p className='text-zinc-600 text-[7px] '>max@max.com</p>
            <p className='text-[7px] leading-none text-zinc-400 opacity-45'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, repellendus. Eveniet ipsum sequi nesciunt!</p>
            <button className='px-1 py-[2px] bg-red-600 rounded-md text-[8px] font-semibold mt-2 whitespace-nowrap'>Explore Now</button>
        </div>
    )
}

export default UserCard