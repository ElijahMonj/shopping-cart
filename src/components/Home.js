import React, { useState, useEffect } from "react";
import Cart from './Cart'
import itemPic_1 from './images/item_1.jpg'
import itemPic_2 from './images/item_2.jpg'
import itemPic_3 from './images/item_3.png'
import itemPic_4 from './images/item_4.jpg'
import itemPic_5 from './images/item_5.jpg'
import itemPic_6 from './images/item_6.jpg'


const Home = (props)=>{
    const add1 = () => {
        props.addItem({
         item_1:{
           name:"Vestir Plain White Tee",
           quantity:props.items.item_1.quantity+1,
           price:9.95,
         },
         item_2:{
           name:"Vestir Plain Black Tee",
           quantity:props.items.item_2.quantity,
           price:9.95,
         },
         item_3:{
           name:"Vestir Gray Polo Men",
           quantity:props.items.item_3.quantity,
           price:19.95,
         },
         item_4:{
           name:"Vestir Black Blazer Men",
           quantity:props.items.item_4.quantity,
           price:49.95,
         },
         item_5:{
           name:"Vestir Black Blazer Women",
           quantity:props.items.item_5.quantity,
           price:45.95,
         },
         item_6:{
           name:"Vestir Black Skirt Women",
           quantity:props.items.item_6.quantity,
           price:29.95,
         }, 
       });
     };
    const add2 = () => {
       props.addItem({
        item_1:{
          name:"Vestir Plain White Tee",
          quantity:props.items.item_1.quantity,
          price:9.95,
        },
        item_2:{
          name:"Vestir Plain Black Tee",
          quantity:props.items.item_2.quantity+1,
          price:9.95,
        },
        item_3:{
          name:"Vestir Gray Polo Men",
          quantity:props.items.item_3.quantity,
          price:19.95,
        },
        item_4:{
          name:"Vestir Black Blazer Men",
          quantity:props.items.item_4.quantity,
          price:49.95,
        },
        item_5:{
          name:"Vestir Black Blazer Women",
          quantity:props.items.item_5.quantity,
          price:45.95,
        },
        item_6:{
          name:"Vestir Black Skirt Women",
          quantity:props.items.item_6.quantity,
          price:29.95,
        }, 
      });
    };
    const add3 = () => {
        props.addItem({
         item_1:{
           name:"Vestir Plain White Tee",
           quantity:props.items.item_1.quantity,
           price:9.95,
         },
         item_2:{
           name:"Vestir Plain Black Tee",
           quantity:props.items.item_2.quantity,
           price:9.95,
         },
         item_3:{
           name:"Vestir Gray Polo Men",
           quantity:props.items.item_3.quantity+1,
           price:19.95,
         },
         item_4:{
           name:"Vestir Black Blazer Men",
           quantity:props.items.item_4.quantity,
           price:49.95,
         },
         item_5:{
           name:"Vestir Black Blazer Women",
           quantity:props.items.item_5.quantity,
           price:45.95,
         },
         item_6:{
           name:"Vestir Black Skirt Women",
           quantity:props.items.item_6.quantity,
           price:29.95,
         }, 
       });
     };
     const add4 = () => {
        props.addItem({
         item_1:{
           name:"Vestir Plain White Tee",
           quantity:props.items.item_1.quantity,
           price:9.95,
         },
         item_2:{
           name:"Vestir Plain Black Tee",
           quantity:props.items.item_2.quantity,
           price:9.95,
         },
         item_3:{
           name:"Vestir Gray Polo Men",
           quantity:props.items.item_3.quantity,
           price:19.95,
         },
         item_4:{
           name:"Vestir Black Blazer Men",
           quantity:props.items.item_4.quantity+1,
           price:49.95,
         },
         item_5:{
           name:"Vestir Black Blazer Women",
           quantity:props.items.item_5.quantity,
           price:45.95,
         },
         item_6:{
           name:"Vestir Black Skirt Women",
           quantity:props.items.item_6.quantity,
           price:29.95,
         }, 
       });
     };
     const add5 = () => {
        props.addItem({
         item_1:{
           name:"Vestir Plain White Tee",
           quantity:props.items.item_1.quantity,
           price:9.95,
         },
         item_2:{
           name:"Vestir Plain Black Tee",
           quantity:props.items.item_2.quantity,
           price:9.95,
         },
         item_3:{
           name:"Vestir Gray Polo Men",
           quantity:props.items.item_3.quantity,
           price:19.95,
         },
         item_4:{
           name:"Vestir Black Blazer Men",
           quantity:props.items.item_4.quantity,
           price:49.95,
         },
         item_5:{
           name:"Vestir Black Blazer Women",
           quantity:props.items.item_5.quantity+1,
           price:45.95,
         },
         item_6:{
           name:"Vestir Black Skirt Women",
           quantity:props.items.item_6.quantity,
           price:29.95,
         }, 
       });
     };
     const add6 = () => {
        props.addItem({
         item_1:{
           name:"Vestir Plain White Tee",
           quantity:props.items.item_1.quantity,
           price:9.95,
         },
         item_2:{
           name:"Vestir Plain Black Tee",
           quantity:props.items.item_2.quantity,
           price:9.95,
         },
         item_3:{
           name:"Vestir Gray Polo Men",
           quantity:props.items.item_3.quantity,
           price:19.95,
         },
         item_4:{
           name:"Vestir Black Blazer Men",
           quantity:props.items.item_4.quantity,
           price:49.95,
         },
         item_5:{
           name:"Vestir Black Blazer Women",
           quantity:props.items.item_5.quantity,
           price:45.95,
         },
         item_6:{
           name:"Vestir Black Skirt Women",
           quantity:props.items.item_6.quantity+1,
           price:29.95,
         }, 
       });
     };
    
    return (
        <div>
           
            <div className="container">

                <div className="item">
                    <img src={itemPic_1}></img>
                    <div className="itemName">{props.items.item_1.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_1.price}</div>
                    <button onClick={add1}>Add To Cart</button>
                    <div>{props.items.item_1.quantity}</div>
                </div>
                <div className="item">
                    <img src={itemPic_2}></img>
                    <div className="itemName">{props.items.item_2.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_2.price}</div>
                    <button onClick={add2}>Add To Cart</button>
                    <div>{props.items.item_2.quantity}</div>
                </div>
                <div className="item">
                    <img src={itemPic_3}></img>
                    <div className="itemName">{props.items.item_3.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_3.price}</div>
                    <button onClick={add3}>Add To Cart</button>
                    <div>{props.items.item_3.quantity}</div>
                </div>
                <div className="item">
                    <img src={itemPic_4}></img>
                    <div className="itemName">{props.items.item_4.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_4.price}</div>
                    <button onClick={add4}>Add To Cart</button>
                    <div>{props.items.item_4.quantity}</div>
                </div>
                <div className="item">
                    <img src={itemPic_5}></img>
                    <div className="itemName">{props.items.item_5.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_5.price}</div>
                    <button onClick={add5}>Add To Cart</button>
                    <div>{props.items.item_5.quantity}</div>
                </div>
                <div className="item">
                    <img src={itemPic_6}></img>
                    <div className="itemName">{props.items.item_6.name}</div>
                    <div className="itemPrice">{"$"+props.items.item_6.price}</div>
                    <button onClick={add6}>Add To Cart</button>
                    <div>{props.items.item_6.quantity}</div>
                </div>

                
            
            </div>

        </div>
    )
}
export default Home