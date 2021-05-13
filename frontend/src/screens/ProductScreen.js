import React from 'react'
import "./ProductScreen.css"
import commodore from '../assets/commodore64.jpg';

export const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="p_screenleft">
                <div className="left_pic">
                    <img src={commodore} alt="commodore 64 console" />
                </div>

                <div className="left_deets">
                    <p className="item_name">Product 1</p>
                    <p className="item_description">Lorem ipsum dolor, 
                    sit amet consectetur adipisicing elit. Voluptatem.</p>
                </div>
            </div>
            <div className="p_screenright">
                <div className="right_deets">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select name="" id="">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button">Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;