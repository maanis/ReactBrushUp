import React from 'react'
import { NavLink } from 'react-router-dom'

const NavRoute = () => {
    return (
        <>
            <div className="flex">
                <NavLink style={(e) => e.isActive ? { color: 'red' } : {}} to="/" className="p-4">Home</NavLink>
                <NavLink style={(e) => e.isActive ? { color: 'red' } : {}} to="/user" className="p-4">User</NavLink>
                <NavLink style={(e) => e.isActive ? { color: 'red' } : {}} to="/about" className="p-4">About</NavLink>
            </div>
        </>
    )
}

export default NavRoute