import React from 'react';
import './HomeScreen.css';
import Product from '../components/Product';

const HomeScreen = () => {
    return (
        <div className="homescreen">
            <h2 className="homescreen_title">What We Have</h2>
            <div className="site_products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
