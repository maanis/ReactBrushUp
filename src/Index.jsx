import React from 'react'
import UserCards from './components/UserCards'
import UserForm from './components/UserForm'
import { useState } from 'react'

const Index = () => {
    const [data, setdata] = useState([])
    return (
        <>
            <div className='h-screen w-full bg-zinc-950 flex flex-col justify-center items-center'>
                <UserCards />
                <UserForm />
            </div>
        </>
    )
}

export default Index