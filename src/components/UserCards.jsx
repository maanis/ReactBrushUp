import React from 'react'
import UserCard from './userCard'

const UserCards = () => {
    return (
        <>
            <div className="flex p-2 gap-4 flex-wrap overflow-auto max-h-[60%]">
                <UserCard />
                <UserCard />
            </div>
        </>
    )
}

export default UserCards