import React from 'react'
import './form.css'

const Form = ({ type }) => {

    return (
        <div>
            <h1>{type}</h1>
            <form action="">
                {
                    type === 'Register' &&
                    <>
                        <input style={{ color: "red", border: "2px solid red", borderRadius: "2rem" }} type="text" name="name" id="" placeholder='Name' />
                        <input type="text" name="address" id="" placeholder='address' />
                        <input type="number" name="phone" id="" placeholder='phone' />
                    </>

                }
                <input type="email" name="email" id="" placeholder='email' />
                <input type='password' name='password' id="" placeholder='password' />
            </form>
        </div>
    )
}

export default Form