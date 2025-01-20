import React from 'react'

const Card = () => {
    const data = [
        { img: 'https://images.unsplash.com/photo-1737229940875-293ed0c4e8af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.', inStock: false },
        { img: 'https://images.unsplash.com/photo-1737233347389-24bc3f3fe3a1?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.', inStock: true },
        { img: 'https://images.unsplash.com/photo-1737233504527-c5033f0f1430?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit.', inStock: false },
    ]
    return (
        <div className='h-screen w-full bg-zinc-300 flex gap-4 justify-center items-center'>
            {data.map((e, key) => (
                <div key={key} className='w-32 h-56 p-1 rounded bg-zinc-100'>
                    <img src={e.img} className='h-[40%] w-full object-cover rounded' alt="" />
                    <p className='text-[10px] mt-2 text-zinc-600'>{e.desc}</p>
                    <button onClick={() => alert('bol bro')} className={`px-2 py-[2px] text-white ${e.inStock ? 'bg-blue-500' : 'bg-red-500'} rounded-full mt-2 text-[8px] font-semibold`}>Click here</button>
                </div>
            ))}
        </div>
    )
}

export default Card
