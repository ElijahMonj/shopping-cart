import React, { useState, useEffect } from "react";
import Cart from './Cart'
import itemPic_1 from './images/item_1.jpg'
import itemPic_2 from './images/item_2.jpg'
import itemPic_3 from './images/item_3.png'
import itemPic_4 from './images/item_4.jpg'
import itemPic_5 from './images/item_5.jpg'
import itemPic_6 from './images/item_6.jpg'


const Home = (props)=>{
    function add1(){
       
      props.changeCart1([props.cartItem_1[0],props.cartItem_1[1]+1,props.cartItem_1[2],true]);
      
    }
    function add2(){
      props.changeCart2([props.cartItem_2[0],props.cartItem_2[1]+1,props.cartItem_2[2],true]);     
    }
    function add3(){
        props.changeCart3([props.cartItem_3[0],props.cartItem_3[1]+1,props.cartItem_3[2],true]);     
      }
      function add4(){
        props.changeCart4([props.cartItem_4[0],props.cartItem_4[1]+1,props.cartItem_4[2],true]);     
      }
      function add5(){
        props.changeCart5([props.cartItem_5[0],props.cartItem_5[1]+1,props.cartItem_5[2],true]);     
      }
      function add6(){
        props.changeCart6([props.cartItem_6[0],props.cartItem_6[1]+1,props.cartItem_6[2],true]);     
      }
    return (
        <div>
           
            <div className="container">

                <div className="item">
                    <img src={itemPic_1}></img>
                    <div className="itemName">{props.cartItem_1[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_1[2]}</div>
                    <button onClick={()=>add1()}>Add To Cart</button>
                    <div>{props.cartItem_1[1]}</div>
                </div>
                <div className="item">
                    <img src={itemPic_2}></img>
                    <div className="itemName">{props.cartItem_2[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_2[2]}</div>
                    <button onClick={()=>add2()}>Add To Cart</button>
                    <div>{props.cartItem_2[1]}</div>
                </div>
                <div className="item">
                    <img src={itemPic_3}></img>
                    <div className="itemName">{props.cartItem_3[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_3[2]}</div>
                    <button onClick={()=>add3()}>Add To Cart</button>
                    <div>{props.cartItem_3[1]}</div>
                </div>
                <div className="item">
                    <img src={itemPic_4}></img>
                    <div className="itemName">{props.cartItem_4[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_4[2]}</div>
                    <button onClick={()=>add4()}>Add To Cart</button>
                    <div>{props.cartItem_4[1]}</div>
                </div>
                <div className="item">
                    <img src={itemPic_5}></img>
                    <div className="itemName">{props.cartItem_5[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_5[2]}</div>
                    <button onClick={()=>add5()}>Add To Cart</button>
                    <div>{props.cartItem_5[1]}</div>
                </div>
                <div className="item">
                    <img src={itemPic_6}></img>
                    <div className="itemName">{props.cartItem_6[0]}</div>
                    <div className="itemPrice">{"$"+props.cartItem_6[2]}</div>
                    <button onClick={()=>add6()}>Add To Cart</button>
                    <div>{props.cartItem_6[1]}</div>
                </div>

                
            
            </div>

        </div>
    )
}
export default Home