import React from 'react';
import { Link } from 'react-router-dom';

function ShoppingCart({ cart }){
    return(
        <div>
            <h2>ShoppingCart</h2>
            {/* Display shopping cart items here */}
            <u1>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} - Quantity: {item.quantity}
                </li>
              ))}
            </u1>
            <Link to="/luxury-wine-store/ProductList">
                <button>Continue shopping</button>
            </Link>
        </div>
    );
}

export default ShoppingCart;