import React from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import Table from '../table';
import Footer from '../footer';

function ShowTable(props) {
    return (
        <div>
            <Header/>
            <Sidebar/>
            <Table/>
            <Footer/>
        </div>
    );
}

export default ShowTable;