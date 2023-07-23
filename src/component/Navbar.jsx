import React from "react";
import {Link} from 'react-router-dom'

function Navbar(){
    const logo='https://cdn-icons-png.flaticon.com/512/3698/3698776.png'
    return(
       <>
        <nav>
            
            <h2><img src={logo}/>Movie</h2> 
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Main'>Flims</Link></li>
                <li><Link to='/signup'>Contact</Link></li>
            </ul>
            <Link to='/login'><button>Login</button></Link>
        </nav>
        
        </>
    )
}

export default Navbar;