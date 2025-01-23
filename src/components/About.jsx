import React, { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        console.log('About Component Mounted')
        return () => {
            console.log('About Component Unmounted')
        }
    }, [])
    return (
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-semibold'>About</h2>
            <p className='text-xs w-[50%] mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde quo! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magnam quae pariatur illo in, aut repellat sint minus numquam veritatis dolore ratione dolores soluta voluptas dolorum eos magni. Sed, dolores?</p>
            <button className='px-3 py-1 bg-orange-600 rounded-md mt-3 text-white font-semibold'>Explore Now</button>
        </div>
    )
}

export default About