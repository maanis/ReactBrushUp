import React from 'react'
import { useForm } from 'react-hook-form'

const UserForm = ({ insertData }) => {
    const { register, reset, handleSubmit } = useForm()
    const handleFormData = (data) => {
        insertData(data)
        reset()
    }

    return (
        <div className="flex mt-3 mx-auto w-[80%] justify-center items-center">
            <form action="" className='flex flex-wrap justify-center gap-4 items-center' onSubmit={handleSubmit(handleFormData)}>
                <input {...register('name')} required className='px-2 text-white h-[20px] w-[120px] text-[10px]  py-1 rounded-md outline-none bg-zinc-700' placeholder='Name' type="text" />
                <input {...register('email')} required className='px-2 text-white h-[20px] w-[120px] text-[10px] py-1 rounded-md outline-none bg-zinc-700' placeholder='Email' type="email" />
                <input {...register('image')} required className='px-2 text-white h-[20px] w-[120px] text-[10px] py-1 rounded-md outline-none bg-zinc-700' placeholder='Image URL' type="text" />
                <input className='bg-blue-600 cursor-pointer rounded-md text-xs font-semibold px-2 py-[2px]' type="submit" />
            </form>
        </div>
    )
}

export default UserForm