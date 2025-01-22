import React from 'react'
import UserCards from './components/UserCards'
import UserForm from './components/UserForm'
import { useState } from 'react'

const Index = () => {
    const [data, setdata] = useState([])
    const insertData = (dets) => {
        setdata([...data, dets])
    }
    const removeUser = (index) => {
        setdata(() => {
            return data.filter((e, id) => id != index)
        })
        console.log(data)
    }


    return (
        <>
            <div className='h-screen w-full bg-zinc-950 flex flex-col justify-center items-center'>
                <UserCards removeUser={removeUser} data={data} />
                <UserForm insertData={insertData} />
            </div>
        </>
    )
}

export default Index