import React, {useState, useEffect} from 'react'
import './Product.css';
import {Link} from 'react-router-dom';
// import commodore from '../assets/commodore64.jpg';

const Product = ({product, ...rest}) => {
    return (
        <div className="product">
            <img src={product.console_image} alt="commodore 64 console" />
            <div className="product_deets">
                <p className="info">{product.console_name}</p>
                <p className="description">
                {/* description */}
                {product.console_info}
                </p>
                <p className="product_color">
                 Color: {product.console_color}
                </p>
                <p className="rarity_level">
                    Rarity Level: {product.rarity_level}
                    {/* description */}
                </p>
                <p className="product_price">
                {product.console_price}
                </p>
                <Link to={`/product/${product.game_id}`} className="info_button">
                    view
                </Link>
            </div>
        </div>
    )
}

export default Product



// // [
//     {
//         "game_id": 1,
//         "console_name": "Commodore 64",
//         "console_color": "white",
//         "year_released": "Aug 1982",
//         "manufacturer": "commodore international",
//         "price": 995,
//         "storage": "170kb",
//         "cpu_used": "VIC-11",
//         "cpu_speed": "n/a"
//     },
//     {
//         "game_id": 2,
//         "console_name": "Sega Genesis",
//         "console_color": "black",
//         "year_released": "Oct 1988",
//         "manufacturer": "Sega",
//         "price": 399,
//         "storage": "Disc",
//         "cpu_used": "Motorola 68000",
//         "cpu_speed": "7.6 mghz"
//     }