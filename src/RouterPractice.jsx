import React from 'react'
import NavRoute from './components/NavRoute'
import { Outlet, Route, Routes } from 'react-router-dom'
import User from './components/User'
import About from './components/About'
import Home from './components/Home'
import UserDets from './components/UserDets'
import Service from './components/Service'

const RouterPractice = () => {
    return (
        <>
            <div className='flex flex-col items-center w-[80%] mx-auto'>
                <NavRoute />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<User />}>
                        <Route path="/user/:name" element={<UserDets />} />
                    </Route>
                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service />} />
                </Routes>
                <hr />
            </div>
        </>
    )
}

export default RouterPractice