import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
        <div className = 'navbar'>
            <h1>sow blog</h1>
        <div className = 'links'>
            <Link to = '/'>Home</Link>
            <Link to ='/create'>New Blog</Link>
        </div>
           
        </div>
        </>
    )
}

export default NavBar
