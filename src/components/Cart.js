import React, { useState, useEffect } from "react";
import itemPic_1 from './images/item_1.jpg'
import itemPic_2 from './images/item_2.jpg'
import itemPic_3 from './images/item_3.png'
import itemPic_4 from './images/item_4.jpg'
import itemPic_5 from './images/item_5.jpg'
import itemPic_6 from './images/item_6.jpg'

const Cart = (props)=>{
   
    const [cart, setCart] = useState([]);

    useEffect(() => {
        formCartArray();
        
    }, [props.items]);


    function formCartArray(){
        let cartArr=[]
        if(props.cartItem_1[3]===true){      
                 
            cartArr.push(props.cartItem_1.concat(itemPic_1));
        }
        if(props.cartItem_2[3]===true){           
            cartArr.push(props.cartItem_2.concat(itemPic_2));
        }
        if(props.cartItem_3[3]===true){           
            cartArr.push(props.cartItem_3.concat(itemPic_3));
        }
        if(props.cartItem_4[3]===true){           
            cartArr.push(props.cartItem_4.concat(itemPic_4));
        }
        if(props.cartItem_5[3]===true){           
            cartArr.push(props.cartItem_5.concat(itemPic_5));
        }
        if(props.cartItem_6[3]===true){           
            cartArr.push(props.cartItem_6.concat(itemPic_6));
        }
        console.log(cartArr)
        
        setCart(cartArr)
       
    }
    
    let listItems = cart.map((number) =>
    <div className="cartItemList">
                            <div className="toCheckOut">
                                <div className="checkOutImage"><img src={number[4]} ></img></div>
                                
                                <div className="checkOutDetails">
                                    <div className="itemName">{number[0]}</div>
                                    <div className="itemNameDetails">Small</div>
                                    <button className="btnRemove">Remove</button>
                                </div>
                                <div className="checkOutQuantity">
                                    {number[1]}
                                </div>
                                <div className="checkOutSubtotal">{"$"+(number[2]*number[1])}</div>
                            </div>
                        </div>  
    );
    function summary(){
        let total=0;
        cart.map((number)=>
        total+=number[1]*number[2]
        )
        return Math.round((total + Number.EPSILON) * 100) / 100
    }
    return (
        <div>
           
            <header>{props.cartItem_1[1]}</header>
            <div className="container">
                <div className="cart">
                    <div className="tableHead">
                        <div className="thItems">Items</div>
                        <div className="thQuantity">Quantity</div>
                        <div className="thSubtotal">Subtotal</div>
                        
                    </div>
                    <div className="cartItems">
                    {listItems}
                    </div>
                    <div>{summary()}</div>
                    
                
                </div>
            </div>
        </div>
    )
}
export default Cart