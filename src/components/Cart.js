import React, { useState, useEffect } from "react";
import itemPic_1 from './images/item_1.jpg'
import itemPic_2 from './images/item_2.jpg'
import itemPic_3 from './images/item_3.png'
import itemPic_4 from './images/item_4.jpg'
import itemPic_5 from './images/item_5.jpg'
import itemPic_6 from './images/item_6.jpg'
import addSVG from './images/add.svg'
import minusSVG from './images/minus.svg'

const Cart = (props)=>{
   
    const [cart, setCart] = useState([]);

    useEffect(() => {
        formCartArray();
        
    }, [props.cartItem_1,props.cartItem_2,props.cartItem_3,props.cartItem_4,props.cartItem_5,props.cartItem_6]);


   
    
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
        //props.changeCart6(props.cartItem_6[0],props.cartItem_6[1],props.cartItem_6[2],props.cartItem_6[3],props.cartItem_6[4],)
        setCart(cartArr)
       
    }
    function remove(index){
      console.log("index is"+index)
      if(index===props.cartItem_1[0]){
        props.changeCart1([props.cartItem_1[0],0,props.cartItem_1[2],false])
      }
      if(index===props.cartItem_2[0]){
        props.changeCart2([props.cartItem_2[0],0,props.cartItem_2[2],false])
      }
      if(index===props.cartItem_3[0]){
        props.changeCart3([props.cartItem_3[0],0,props.cartItem_3[2],false])
      }
      if(index===props.cartItem_4[0]){
        props.changeCart4([props.cartItem_4[0],0,props.cartItem_4[2],false])
      }
      if(index===props.cartItem_5[0]){
        props.changeCart5([props.cartItem_5[0],0,props.cartItem_5[2],false])
      }
      if(index===props.cartItem_6[0]){
        props.changeCart6([props.cartItem_6[0],0,props.cartItem_6[2],false])
      } 
    }
    function minus(index){
      console.log("index is"+index)
      if(index===props.cartItem_1[0]){
        props.changeCart1([props.cartItem_1[0],props.cartItem_1[1]-1,props.cartItem_1[2],false])
      }
      if(index===props.cartItem_2[0]){
        props.changeCart2([props.cartItem_2[0],props.cartItem_2[1]-1,props.cartItem_2[2],false])
      }
      if(index===props.cartItem_3[0]){
        props.changeCart3([props.cartItem_3[0],props.cartItem_3[1]-1,props.cartItem_3[2],false])
      }
      if(index===props.cartItem_4[0]){
        props.changeCart4([props.cartItem_4[0],props.cartItem_4[1]-1,props.cartItem_4[2],false])
      }
      if(index===props.cartItem_5[0]){
        props.changeCart5([props.cartItem_5[0],props.cartItem_5[1]-1,props.cartItem_5[2],false])
      }
      if(index===props.cartItem_6[0]){
        props.changeCart6([props.cartItem_6[0],props.cartItem_6[1]-1,props.cartItem_6[2],false])
      } 
    }
    function add(index){
      console.log("index is"+index)
      if(index===props.cartItem_1[0]){
        props.changeCart1([props.cartItem_1[0],props.cartItem_1[1]+1,props.cartItem_1[2],false])
      }
      if(index===props.cartItem_2[0]){
        props.changeCart2([props.cartItem_2[0],props.cartItem_2[1]+1,props.cartItem_2[2],false])
      }
      if(index===props.cartItem_3[0]){
        props.changeCart3([props.cartItem_3[0],props.cartItem_3[1]+1,props.cartItem_3[2],false])
      }
      if(index===props.cartItem_4[0]){
        props.changeCart4([props.cartItem_4[0],props.cartItem_4[1]+1,props.cartItem_4[2],false])
      }
      if(index===props.cartItem_5[0]){
        props.changeCart5([props.cartItem_5[0],props.cartItem_5[1]+1,props.cartItem_5[2],false])
      }
      if(index===props.cartItem_6[0]){
        props.changeCart6([props.cartItem_6[0],props.cartItem_6[1]+1,props.cartItem_6[2],false])
      } 
    }
    function listItems(){
    let listItems = cart.map((number) =>
    <div className="cartItemList">
                            <div className="toCheckOut">
                                <div className="checkOutImage"><img src={number[4]} ></img></div>
                                
                                <div className="checkOutDetails">
                                    <div className="itemName">{number[0]}</div>
                                    <div className="itemNameDetails">Small</div>
                                    <button className="btnRemove" onClick={()=>remove(number[0])} >Remove</button>
                                </div>
                                <div className="checkOutQuantity">
                                <img src={minusSVG} className="minus" onClick={()=>minus(number[0])}></img>
                                    <div className="qnty">{number[1]}</div>
                                    <img src={addSVG} className="add" onClick={()=>add(number[0])}></img>
                                </div>
                                <div className="checkOutSubtotal">{"$"+
                                
                                Math.round(((number[2]*number[1]) + Number.EPSILON) * 100) / 100
                                }</div>
                            </div>                      
                        </div>                 
    );
      return listItems
    }
    function showCart(){
      if((props.cartItem_1[1]!==0)||(props.cartItem_2[1]!==0)||(props.cartItem_3[1]!==0)||(props.cartItem_4[1]!==0)
      ||(props.cartItem_5[1]!==0)||(props.cartItem_6[1]!==0)){
        return (
          <div className="cart">
          <div className="tableHead">
              <div className="thItems">Items</div>
              <div className="thQuantity">Quantity</div>
              <div className="thSubtotal">Subtotal</div>
              
          </div>
          <div className="cartItems">
          {listItems()}
          </div>
          <div className="totality">
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
            <div className="totalText">{"$"+summary()}</div>
          </div>
          <div className="totality">
          <div>
          </div>
          <div>
          </div>
          <div>
          </div>
            <button className="btnCheckOut">Check Out</button>
          </div>
          
          
      
      </div>
        )
        }else{
          return(
            <div className="empty">Your shopping cart is empty.</div>
          )
        }
        
    }
    function summary(){
        let total=0;
        cart.map((number)=>
        total+=number[1]*number[2]
        )
        return Math.round((total + Number.EPSILON) * 100) / 100
    }
    return (
        <div>
           
            <header>Cart</header>
            <div className="container">
               {showCart()}
            </div>
        </div>
    )
}
export default Cart