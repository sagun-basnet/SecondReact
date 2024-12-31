import React from 'react'
import Form from './Form'
import Button from '../global/Button'
import Myimage from '../../images/background.jpg'

const Register = () => {
    return (
        <div>
            <Form type="Register" />
            <Button text="Register" bgColor="green" />
            <img src={Myimage} alt="" />
        </div>
    )
}

export default Register