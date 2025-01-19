import React from 'react'

const Card = ({ img, name, price, des }) => {

    return (
        <div className='w-[20rem] border-2 border-black rounded-lg flex flex-col'>
            <div className='h-[40%] w-full'>
                <img className='h-full w-full' src={img} alt="" />
            </div>
            <div className='p-4 flex flex-col gap-2'>
                <h2 className='text-4xl font-bold'>{name}</h2>
                <h2 className='font-bold text-green-400'>Price: {price}</h2>
                <p className='text-justify'>{ des.slice(0, 130) + "..."}</p>
                <div className="flex justify-end w-full">
                    <button className="p-2 px-4 bg-green-400 rounded-md">More</button>
                </div>
            </div>

        </div>
    )
}

export default Card

