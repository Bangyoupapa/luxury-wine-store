//Home.js

import React from 'react';
import { Link } from 'react-router-dom';

import '../index.css'; //Import index.css if needed
import '../App'; //Import app.css if needed

function Home(){
    return(
      <div className='home-container'>
        {/* Navigation Links */}
         <div className='top-left-links'>
            <Link to="/luxury-wine-store/about-us">About Us</Link>
            <Link to="/luxury-wine-store/productlist">View Products</Link>
            <Link to="/luxury-wine-store/cart">ShoppingCart</Link>
      </div>

        {/*Centered Content */}
        <div className='center-content'>
          <h2>Welcome to the Luxury Wine Store!</h2>
          <p>Explore our collection of exquisite wines.</p>
        </div>
      </div>        
    );
}

export default Home;