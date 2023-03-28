
import React, { Component,useState,useEffect } from "react";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import About from './components/About.js'
import Credits from './components/Credits.js'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from '@testing-library/react'
import { HashRouter } from "react-router-dom";
//images


const App = () => {
 
  const [cartItem_1, setCartItem_1] = useState(["Vestir Plain White Tee",0,9.95,false]);
  useEffect(() => {
    document.title = 'Vestir';
    if(cartItem_1[1]!==0){
      setCartItem_1([cartItem_1[0],cartItem_1[1],cartItem_1[2],true])    
    }else{
      setCartItem_1([cartItem_1[0],cartItem_1[1],cartItem_1[2],false])
    }
    console.log()
  },[cartItem_1[1]]);

  const [cartItem_2, setCartItem_2] = useState(["Vestir Plain Black Tee",0,9.95,false]);
  useEffect(() => {
    if(cartItem_2[1]!==0){
      setCartItem_2([cartItem_2[0],cartItem_2[1],cartItem_2[2],true])    
    }else{
      setCartItem_2([cartItem_2[0],cartItem_2[1],cartItem_2[2],false])
    }
  },[cartItem_2[1]]);

  const [cartItem_3, setCartItem_3] = useState(["Vestir Gray Polo Men",0,19.95,false]);
  useEffect(() => {
    if(cartItem_3[1]!==0){
      setCartItem_3([cartItem_3[0],cartItem_3[1],cartItem_3[2],true])    
    }else{
      setCartItem_3([cartItem_3[0],cartItem_3[1],cartItem_3[2],false])
    }
  },[cartItem_3[1]]);
  const [cartItem_4, setCartItem_4] = useState(["Vestir Black Blazer Men",0,49.95,false]);
  useEffect(() => {
    if(cartItem_4[1]!==0){
      setCartItem_4([cartItem_4[0],cartItem_4[1],cartItem_4[2],true])    
    }else{
      setCartItem_4([cartItem_4[0],cartItem_4[1],cartItem_4[2],false])
    }
  },[cartItem_4[1]]);

  const [cartItem_5, setCartItem_5] = useState(["Vestir Black Blazer Women",0,45.95,false]);
  useEffect(() => {
    if(cartItem_5[1]!==0){
      setCartItem_5([cartItem_5[0],cartItem_5[1],cartItem_5[2],true])    
    }else{
      setCartItem_5([cartItem_5[0],cartItem_5[1],cartItem_5[2],false])
    }
    console.log()
  },[cartItem_5[1]]);

  const [cartItem_6, setCartItem_6] = useState(["Vestir Black Skirt Women",0,29.95,false]);
  useEffect(() => {
    if(cartItem_6[1]!==0){
      setCartItem_6([cartItem_6[0],cartItem_6[1],cartItem_6[2],true])    
    }else{
      setCartItem_6([cartItem_6[0],cartItem_6[1],cartItem_6[2],false])
    }
  },[cartItem_6[1]]);
  
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home 
        cartItem_1={cartItem_1} changeCart1={cartItem_1=>setCartItem_1(cartItem_1)}
        cartItem_2={cartItem_2} changeCart2={cartItem_2=>setCartItem_2(cartItem_2)}
        cartItem_3={cartItem_3} changeCart3={cartItem_3=>setCartItem_3(cartItem_3)}
        cartItem_4={cartItem_4} changeCart4={cartItem_4=>setCartItem_4(cartItem_4)}
        cartItem_5={cartItem_5} changeCart5={cartItem_5=>setCartItem_5(cartItem_5)}
        cartItem_6={cartItem_6} changeCart6={cartItem_6=>setCartItem_6(cartItem_6)}
        />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/cart" element={<Cart 
        cartItem_1={cartItem_1} changeCart1={cartItem_1=>setCartItem_1(cartItem_1)}
        cartItem_2={cartItem_2} changeCart2={cartItem_2=>setCartItem_2(cartItem_2)}
        cartItem_3={cartItem_3} changeCart3={cartItem_3=>setCartItem_3(cartItem_3)}
        cartItem_4={cartItem_4} changeCart4={cartItem_4=>setCartItem_4(cartItem_4)}
        cartItem_5={cartItem_5} changeCart5={cartItem_5=>setCartItem_5(cartItem_5)}
        cartItem_6={cartItem_6} changeCart6={cartItem_6=>setCartItem_6(cartItem_6)}
        />}>
        </Route>
      </Routes>
      <Credits />
      
    </HashRouter>
  );
  
}

export default App;

