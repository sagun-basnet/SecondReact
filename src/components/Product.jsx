import React from 'react'
import Card from './Card'
import image1 from "../images/background.jpg"
import image2 from "../images/background.jpg"
import image3 from "../images/background.jpg"
import image4 from "../images/background.jpg"
import { MdOutlineCancel } from "react-icons/md";

const Product = () => {
    // const data2 = [1,2,46,6,78,8]

    const data = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image: image1,
            description: "This is product 1. daf asdfasdf asdfasdf lorem fasdfasdfa asdfasdf asdfadsf joijeijad kjalkdsjfoiejo oijlkjalkdsf jklasjdfklas kljioajoiefj joiajoifjsjdf ljoijoiajsf",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            image: image2,
            description: "This is product 1. daf asdfasdf asdfasdf lorem fasdfasdfa asdfasdf asdfadsf joijeijad kjalkdsjfoiejo oijlkjalkdsf jklasjdfklas kljioajoiefj joiajoifjsjdf ljoijoiajsf",
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            image: image3,
            description: "This is product 1. daf asdfasdf asdfasdf lorem fasdfasdfa asdfasdf asdfadsf joijeijad kjalkdsjfoiejo oijlkjalkdsf jklasjdfklas kljioajoiefj joiajoifjsjdf ljoijoiajsf",
        },
        {
            id: 4,
            name: "Product 4",
            price: 400,
            image: image4,
            description: "This is product 4. daf asdfasdf asdfasdf lorem fasdfasdfa asdfasdf asdfadsf joijeijad kjalkdsjfoiejo oijlkjalkdsf jklasjdfklas kljioajoiefj joiajoifjsjdf ljoijoiajsf Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat omnis perspiciatis necessitatibus ad voluptate incidunt provident cum. Officiis minus facere fugiat unde rerum, dolore vero. Nemo perspiciatis quibusdam at! Facilis?",
        },
    ]


    return (
        <div className='w-full p-8'>
            <MdOutlineCancel/>
            <div className="grid grid-cols-3 gap-2">
                {
                    data.map((item) => {
                        return (
                            <Card img={item.image} name={item.name} price={item.price} des={item.description} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product