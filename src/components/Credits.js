import React, { useState,useEffect } from "react";
import {Link, NavLink} from 'react-router-dom'
import itemPic_1 from './images/item_1.jpg'
const Credits = () => {


    return (
        <footer>
            <div className="ftext">Copyrights 2022 @ElijahMonj</div>
            <img src={itemPic_1} id="gh"></img>
        </footer>
    )
}

export default Credits