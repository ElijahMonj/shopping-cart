import React, { useState,useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {

    return (
        <nav>
            <div className="Navbar">
                <a>Vestir</a>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/cart">Cart</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar