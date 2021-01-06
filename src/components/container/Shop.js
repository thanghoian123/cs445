import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import Content from '../content/content';
import Footer from '../footer/footer';
import Header from '../header/header';

function Shop(props) {
    const [amount, setAmount] = useState(0);
    const UpdateCart = (data) =>{
        setAmount(data);    
    }
    var type ='';
    if(props.match){
        type = props.match.params.type;
    }
    
    return (
        <div>
            <Header amount={amount}/>
            <Content UpdateCart={UpdateCart} type={type}/>
            <Footer/>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        carts : state.carts
    }
}

export default connect(mapStateToProps,null)(Shop);