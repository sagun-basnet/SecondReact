import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [data, setData] = useState([]);
    console.log("My Data: ", data);

    const handleData = (myData) => {
        setData((prev) => [...prev, myData])
    }
    return (
        <div>
            <Child setChildData={handleData} />
        </div>
    )
}

export default Parent