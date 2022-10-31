import React, { useState,useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {


    return (
        <nav>
            <div className="Navbar">
                <div className="title">Vestir</div>
                <ul>
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/cart">Cart</NavLink>
                    <NavLink to="/about">About</NavLink>
                </ul>
            </div>
            
        </nav>
    )
}

export default Navbar