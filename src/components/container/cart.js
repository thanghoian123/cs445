import React from 'react';
import Footer from '../footer/footer';
import ShoppingCart from '../content/cart/ShoppingCart';
import Header from '../header/header';


function Cart(props) {
    return (
        <div>
            <Header></Header>
            <ShoppingCart></ShoppingCart>
            <Footer></Footer>
        </div>
    );
}

export default Cart;