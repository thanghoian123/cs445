import React from 'react';
import Filter from '../content/productFilter/ProductFilter';
import Footer from '../footer/footer';
import Header from '../header/header';


function ProductFilter(props) {
    // var type = props.match.params.type;
    return (
        <div>
            <Header/>
            <Filter/>
            <Footer/>
        </div>
    );
}

export default ProductFilter;