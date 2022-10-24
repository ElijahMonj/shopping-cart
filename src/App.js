import React from 'react'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import About from './components/About.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/cart" element={<Cart />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
