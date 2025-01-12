import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='flex h-[100vh] w-full justify-center items-center flex-col gap-4'>
            <h1 className='text-6xl font-bold'>Page Not Found</h1>
            <button className='p-2 px-4 bg-green-500 rounded-md'><Link to='/'>Go to Home</Link></button>

        </div>
    )
}

export default PageNotFound