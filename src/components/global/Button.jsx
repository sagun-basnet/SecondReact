import React from 'react'

const Button = ({ text, bgColor }) => {
    return (
        <button style={{backgroundColor: bgColor}} className={`p-2 px-4 rounded-md`}>{text}</button>
    )
}

export default Button