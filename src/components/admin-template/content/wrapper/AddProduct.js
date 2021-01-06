import React from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import ProductForm from '../form/ProductForm';

function ShowTable(props) {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <ProductForm/>
            <Footer/>
        </div>
    );
}

export default ShowTable;