import React from 'react'

const Navbar = ({ data }) => {
    return (
        <div className="flex h-[10%] items-center justify-between px-16">
            <h2>Navbar</h2>
            <button className='px-3 relative py-1 bg-orange-200 font-semibold text-xl rounded-md'>
                Friends
                <span className='absolute right-[-10px] text-sm bottom-[-10px] h-6 flex justify-center items-center w-6 rounded-full bg-red-600'>{data.filter(e => e.friends).length}</span>

            </button>
        </div>
    )
}

export default Navbar