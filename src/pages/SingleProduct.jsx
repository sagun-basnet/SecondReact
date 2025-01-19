import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = async () => {
    const id = useParams()
    console.log("ID: ", id);
    await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        setData(res.data);
    }).catch((err) => {
        console.log(err);
    })

    return (
        <div>ID: {id.id}</div>
    )
}

export default SingleProduct