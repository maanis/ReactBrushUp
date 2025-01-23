import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const UserContext = React.createContext()

const Context = (props) => {
    console.log(props)
    const [data, setdata] = useState([]);
    const url = 'https://fakestoreapi.com/products'

    const handleApiReq = () => {
        axios.get(url)
            .then((res) => {
                setdata(res.data)
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    };
    return (
        <UserContext.Provider value={{ data, setdata, handleApiReq, useEffect }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default Context