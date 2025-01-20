import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='border-2 border-red-500 h-[5rem] flex justify-between items-center px-4'>
            <h1 className='h-full'>Logo</h1>
            <div className="flex gap-16 h-full">
                <ul className='list-none text-xl flex gap-4 h-full items-center justify-center'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/service'>Service</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className="flex items-center gap-2">
                    <button className="bg-red-500 text-white py-2 px-4 rounded-md">
                        <Link to='/Login'>Login</Link>
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Signup</button>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;