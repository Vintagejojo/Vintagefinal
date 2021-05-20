import React, {useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import "./ProductScreen.css"
import commodore from '../assets/commodore64.jpg';
import ROUTES from '../constants/apiRoutes'
import {AppContext} from '../AppContext'

export const ProductScreen = () => {
    const [product, setProduct] = useState();
    const {cart, setCart} = useContext(AppContext);
    const {id} = useParams()

    useEffect(() => {
    async function getProduct() {
        try {
            let response = await fetch(ROUTES.getProductsById(id));
            let data = await response.json();
            console.log(response);
            console.log(data);
            if (response.ok) {
                setProduct(data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    getProduct()
    }, [id]); 


    // {
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

if (!product) {
    return <div> <p>Loading...</p> </div>
}
    return (
        <div className="productscreen">
            <div className="p_screenleft">
                <div className="left_pic">
                    <img src={product.console_image} alt="commodore 64 console" />
                </div>

                <div className="left_deets">
                    <p className="item_name">{product.console_name}</p>
                    <p className="item_description">{product.console_info}</p>
                </div>
            </div>
            <div className="p_screenright">
                <div className="right_deets">
                    <p>
                        Price: <span> {new Intl.NumberFormat('en-US', {style: 'currency', currency:"USD"}).format(product.price)}</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Qty
                        <select name="" id="" >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </p>
                    <p>
                        <button type="button" onClick={(e) => setCart((prev) => [...prev, product])}>Add To Cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;