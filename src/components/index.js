import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import  './style.css';
function Navbar() {
    return (
        <nav className="nav">
            <div className="left">
                <div className='logo ml-4' >
                    <Link to="/" >LOGO</Link>
                </div>
            <ul className='menu'>
                <li> <Link to="/products">Product</Link></li>
            </ul>
            </div>
            <div className='right'>
       
            <Link to="/signin"> <Button colorScheme='pink'>Giriş Yap</Button></Link>
            <Link to="/signup"> <Button colorScheme='pink'>Kayıt ol</Button></Link>
 
        
            </div>
        </nav>

    )
}

export default Navbar