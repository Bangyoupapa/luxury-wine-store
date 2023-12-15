import React from 'react';
import {Link} from 'react-router-dom';


const ProductList = ({productlist,cart}) => {
    //Fetch and display luxury wine products here
    return(
        <div>
            <h2>Luxury Wine Collection </h2>
            {/* Display products*/}
            {productlist.map((product,index)=>{
                return (
                    <div key={index}>
                      <Link to= {`/luxury-wine-store/products/${index}`} className='product-list-link'>
                        {product.name}
                      </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;