import React, { useState, useEffect } from "react";
import Cart from './Cart'

const Home = (props)=>{
    
    return (
        <div>
           
            <header>HOME</header>
            <div className="container">

            <div className="item"></div>
            
            </div>
            <div>{props.items.item_1.name}</div>
            <div>{props.items.item_2.name}</div>
            
        </div>
    )
}
export default Home