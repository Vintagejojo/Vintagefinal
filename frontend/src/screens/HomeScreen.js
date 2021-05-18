import React, {useState, useEffect} from 'react';
import './HomeScreen.css';
import Product from '../components/Product';
import ROUTES from '../constants/apiRoutes'

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

useEffect(() => {
async function getProducts() {
    try {
        let response = await fetch(ROUTES.getProducts);
        let data = await response.json();
        console.log(response)
        console.log(data)
        if (response.ok) {
            setProducts(data)
        }
    } catch (error) {
        console.log(error)
    }
}
getProducts()
}, []); 
    
    return (
        <div className="homescreen">
            <h2 className="homescreen_title">What We Have</h2>
            <div className="site_products">
                {products.map((item) => {
                    return <Product product={item} key={item.game_id}/>
                })}
                {/* <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product /> */}
            </div>
        </div>
    )
}

export default HomeScreen
