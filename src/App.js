
import React, { Component,useState,useEffect } from "react";
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import About from './components/About.js'
import itemPic_1 from './images/item_1.png'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { render } from '@testing-library/react'
const App = () => {
  const [items, setItems] = useState({
    item_1:{
      name:"Vestir Plain White Tee",
      quantity:0,
      code:itemPic_1,
    },
    item_2:{
      name:"Vestir Plain Black Tee",
      quantity:0,
    },
    item_3:{
      name:"Vestir Gray Polo Men",
      quantity:0,
    },
    item_4:{
      name:"Vestir Black Blazer Men",
      quantity:0,
    },
    item_5:{
      name:"Vestir Gray Blazer Women",
      quantity:0,
    },
    item_6:{
      name:"Vestir Black Skirt Women",
      quantity:0,
    },
    
  });
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home items={items}/>}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/cart" element={<Cart addItem={items=>setItems(items)} items={items} />}>
        </Route>
      </Routes>
      <img src={itemPic_1}></img>
      
    </BrowserRouter>
  );
  
}

export default App;

