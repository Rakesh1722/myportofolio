import React from "react";
import logo from '../logo.svg';

export default function Navbar(){
    return(
        <nav>
            <img src={logo} className='nav-logo'/>
        </nav>
    );
}