import React from 'react';
import CartItem from '../components/CartItem';
import './CartScreen.css';

export const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartdisplay_left">
                <h2>Shopping Cart</h2>
                <CartItem />
            </div>
            <div className="cartdisplay_right">
                <div className="cartdisplay_deets">
                    <p>Subtotal (0) items </p>
                    <p>$999.99 </p>
                </div>
                <div>
                    <button>Proceed To Checkout </button>
                </div>
            </div>
        </div>
        
    )
}

export default CartScreen;

