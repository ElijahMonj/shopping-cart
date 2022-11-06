import React, { useState,useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'
import itemPic_1 from './images/item_1.jpg'
import gh from './images/gh.png'
const Credits = () => {


    return (
        <footer>
            <div className="ftext">Copyrights 2022 @ElijahMonj</div>
            <a href="https://github.com/ElijahMonj/shopping-cart"><img src={gh} id="gh"></img></a>
            
        </footer>
    )
}

export default Credits