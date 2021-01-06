import React from 'react';
import Footer from '../footer/footer';
import ShoppingCart from '../content/cart/ShoppingCart';
import Header from '../header/header';
import FormPayMent from '../content/formPayment/FormPayMent';

function PayMent(props) {
    return (
        <div>
            <Header/>
            <FormPayMent/>
            <Footer/>
        </div>
    );
}

export default PayMent;