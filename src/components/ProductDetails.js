import React, {useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// wine1
const ProductDetails = ({ addToCart, cart, productlist }) => {
    let {id} = useParams();
    const [product, setProuduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!id)return;
        if(!productlist)return;
        setProuduct(showProduct());
    },[productlist,id]);

    function addCart(){
      if (quantity > 0){
        addToCart(product.name, quantity);
        setQuantity(0);
        navigate('/luxury-wine-store/cart')
      }
    }

    function showProduct(){
        if(!id)return{}
        let index = parseInt(id);
        let product = productlist[index]
        return product
    }

    return (
        <div>
            <p className='product-details-link'>{product.name}</p>
            <h2>Product Details</h2>
            <img src = {product.img} width="400" height="600"/>
            <p>price:{product.price} </p>
            <div className="quantity-form">
                <button
                    onClick={() => setQuantity(Math.max(0, quantity - 1))}
                    disabled={quantity === 0}
                >-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            {/*Display product details */}
            <button onClick={addCart} disabled={quantity === 0}>
                addToCart
            </button>
        </div>
    );
};

export default ProductDetails;