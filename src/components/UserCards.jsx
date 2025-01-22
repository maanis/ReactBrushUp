import React from 'react'
import UserCard from './userCard'

const UserCards = ({ data, removeUser }) => {
    return (
        <>
            <div className="flex p-2 gap-4 flex-wrap overflow-auto max-h-[60%]">
                {data.map((item, index) => (
                    <UserCard removeUser={removeUser} data={item} key={index} index={index} />
                ))}
            </div>
        </>
    )
}

export default UserCards