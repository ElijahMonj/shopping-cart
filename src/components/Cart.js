import React, { useState, useEffect } from "react";


const Cart = (props)=>{
    const add=1;
    const minus=-1;
    return (
        <div>
           
            <header>Cart</header>
            <div className="container">
            
            </div>
            <div>{props.items.item_1.quantity}</div>
            <button onClick={()=>props.addItem(
                {   item_1:{
                    quantity:props.items.item_1.quantity+add
                    },
                    item_2:{
                    quantity:props.items.item_2.quantity
                },}
            )}>click me</button>

            <div>{props.items.item_2.quantity}</div>
            <button onClick={()=>props.addItem(
                {   item_1:{
                    quantity:props.items.item_1.quantity
                    },
                    item_2:{
                    quantity:props.items.item_2.quantity+add
                },}
            )}>click me</button>
            
        </div>
    )
}
export default Cart