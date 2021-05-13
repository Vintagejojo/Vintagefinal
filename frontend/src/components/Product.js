import React from 'react'
import './Product.css';
import {Link} from 'react-router-dom';
import commodore from '../assets/commodore64.jpg';

const Product = () => {
    return (
        <div className="product">
            <img src={commodore} alt="commodore 64 console" />
            <div className="product_deets">
                <p className="info">Cap Item</p>
                <p className="description">
                    lorem lorem lorem lorem lorem 
                </p>
                <p className="product_price">
                    $10,0000
                </p>
                <Link to={`/product/${1111}`} className="info_button">
                    view
                </Link>
            </div>
        </div>
    )
}

export default Product
