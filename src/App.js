import React, { useState } from 'react';
import Home from './components/Home'; //import the homw component
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import AboutUs from './components/AboutUs';


function APP(){
  const[productlist, setProductlist] = useState([{
    name: "Château Margaux",
    price: 100,
    img: "/luxury-wine-store/images/Ch%C3%A2teau_Margaux.png" 
  },{name: "Opus_one",
    price: 100,
    img: "/luxury-wine-store/images/Opus_one.png"},{name: "Domaine_Leflaive_Montrachet",
    price: 100,
    img: "/luxury-wine-store/images/Domaine_Leflaive_Montrachet.png"}])
  const[cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    // cart exist wine with name product
    const existingItem = cart.find((item) => item.name === product);

    if(existingItem){
      setCart((prevCart) =>
        Array.isArray(prevCart)
          ? prevCart.map((item) =>
              item.name === product ? 
                {...item, quantity: item.quantity+quantity}
                : item
            )
          : prevCart
      );
  } else {
    setCart((prevCart) => (Array.isArray(prevCart) ? [...prevCart, { name: product, quantity: quantity }] : prevCart));
    }
  };

  return(
  <Router>
    <div>
      {/* <h1>Luxury Wine Store</h1> */}
      <Routes>
        <Route path="/luxury-wine-store" element={<Home />} />
        <Route path="/luxury-wine-store/productList" element={<ProductList productlist={productlist} cart={cart}/>} />
        <Route 
          path="/luxury-wine-store/products/:id" 
          element={<ProductDetails productlist={productlist} addToCart={addToCart} cart={cart}/>} 
          />
        <Route path="/luxury-wine-store/cart" element={<ShoppingCart cart = {cart} />} />
        <Route path="/luxury-wine-store/about-us" element={<AboutUs /> } />
      </Routes>
    </div>
  </Router>
);
}


export default APP;