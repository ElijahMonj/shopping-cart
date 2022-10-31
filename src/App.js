
import React, { Component,useState,useEffect } from "react";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import About from './components/About.js'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from '@testing-library/react'
//images


const App = () => {
  const [items, setItems] = useState({
    item_1:{
      name:"Vestir Plain White Tee",
      quantity:0,
      price:9.95,
      
    },
    item_2:{
      name:"Vestir Plain Black Tee",
      quantity:0,
      price:9.95,
      
    },
    item_3:{
      name:"Vestir Gray Polo Men",
      quantity:0,
      price:19.95,
      
    },
    item_4:{
      name:"Vestir Black Blazer Men",
      quantity:0,
      price:49.95,
      
    },
    item_5:{
      name:"Vestir Black Blazer Women",
      quantity:0,
      price:45.95,
      
    },
    item_6:{
      name:"Vestir Black Skirt Women",
      quantity:0,
      price:29.95,
    
    },
    
    
  });
  const [cartItem_1, setCartItem_1] = useState([items.item_1.name,items.item_1.quantity,items.item_1.price,false]);
  useEffect(() => {
    if(items.item_1.quantity!==0){
      setCartItem_1([items.item_1.name,items.item_1.quantity,items.item_1.price,true])
      
    }else{
      setCartItem_1([items.item_1.name,items.item_1.quantity,items.item_1.price,false])
    }
    console.log(cartItem_1)
  },[items]);

  const [cartItem_2, setCartItem_2] = useState([items.item_2.name,items.item_2.quantity,items.item_2.price,false]);
  useEffect(() => {
    if(items.item_2.quantity!==0){
      setCartItem_2([items.item_2.name,items.item_2.quantity,items.item_2.price,true])
      
    }else{
      setCartItem_2([items.item_2.name,items.item_2.quantity,items.item_2.price,false])
    }
    console.log(cartItem_2)
  },[items]);

  const [cartItem_3, setCartItem_3] = useState([items.item_3.name,items.item_3.quantity,items.item_3.price,false]);
  useEffect(() => {
    if(items.item_3.quantity!==0){
      setCartItem_3([items.item_3.name,items.item_3.quantity,items.item_3.price,true])
      
    }else{
      setCartItem_3([items.item_3.name,items.item_3.quantity,items.item_3.price,false])
    }
    console.log(cartItem_3)
  },[items]);

  const [cartItem_4, setCartItem_4] = useState([items.item_4.name,items.item_4.quantity,items.item_4.price,false]);
  useEffect(() => {
    if(items.item_4.quantity!==0){
      setCartItem_4([items.item_4.name,items.item_4.quantity,items.item_4.price,true])
      
    }else{
      setCartItem_4([items.item_4.name,items.item_4.quantity,items.item_4.price,false])
    }
    console.log(cartItem_4)
  },[items]);

  const [cartItem_5, setCartItem_5] = useState([items.item_5.name,items.item_5.quantity,items.item_5.price,false]);
  useEffect(() => {
    if(items.item_5.quantity!==0){
      setCartItem_5([items.item_5.name,items.item_5.quantity,items.item_5.price,true])
      
    }else{
      setCartItem_5([items.item_5.name,items.item_5.quantity,items.item_5.price,false])
    }
    console.log(cartItem_5)
  },[items]);

  const [cartItem_6, setCartItem_6] = useState([items.item_6.name,items.item_6.quantity,items.item_6.price,false]);
  useEffect(() => {
    if(items.item_6.quantity!==0){
      setCartItem_6([items.item_6.name,items.item_6.quantity,items.item_6.price,true])
      
    }else{
      setCartItem_6([items.item_6.name,items.item_6.quantity,items.item_6.price,false])
    }
    console.log(cartItem_6)
  },[items]);
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home addItem={items=>setItems(items)} items={items} />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/cart" element={<Cart addItem={items=>setItems(items)} items={items} 
        cartItem_1={cartItem_1}
        cartItem_2={cartItem_2}
        cartItem_3={cartItem_3}
        cartItem_4={cartItem_4}
        cartItem_5={cartItem_5}
        cartItem_6={cartItem_6}
        />}>
        </Route>
      </Routes>
      
      
    </BrowserRouter>
  );
  
}

export default App;

