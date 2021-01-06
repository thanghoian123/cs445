import React from 'react';
import Detail from '../content/productDetail/productDetail';
import Footer from '../footer/footer';
import Header from '../header/header';

function ProductDetail(props) {
    const id = props.match.params.id;
    
    
    return (
        <div>
            <Header/>
            <Detail id={id}/>
            <Footer/>
        </div>
    );
}

export default ProductDetail;