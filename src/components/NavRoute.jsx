import React from 'react'
import { NavLink } from 'react-router-dom'

const NavRoute = () => {
    return (
        <>
            <div className="flex">
                <NavLink to="/" className="p-4">Home</NavLink>
                <NavLink to="/user" className="p-4">User</NavLink>
                <NavLink to="/about" className="p-4">About</NavLink>
            </div>
        </>
    )
}

export default NavRoute