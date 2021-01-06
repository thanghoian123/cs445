import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../redux/actions/actions';
import './detail.css'

function ProductDetail(props) {
    const {products,id ,onAddToCart,carts} = props;
    const ele = (products||[]).filter(item=>{
        return item.id == id;
    });

    const addToCart = (quantity, product) => {
        onAddToCart(quantity, product);
        // var amount = 0;
        // carts.forEach(element => {
        //     amount = amount + element.quantity;
        // });

        // onUpdateCart(amount);
    }
    
    return (
        <div className="mb-4">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="slide-img">
                            <div className="main-img text-center">
                                <img src={ele[0].imgUrl} alt="" />
                            </div>
                            <div className="thumb-img">
                                <ul>
                                    {ele[0].img_Thumb.map((item,index)=>{
                                        return(
                                            <li key={index}><img src={item} alt=""/></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <div className="product-detail">
                                <h2 className="name-product">{ele[0].nameProduct}  {ele[0].typeColor}</h2>
                            <div className="product-code">
                                <p className="pull-left">Mã sản phẩm: <span>{ele[0].id}</span></p>
                                <p className="pull-right">Tình trạng <span>{ele[0].productStatus}</span></p>
                            </div>
                            <p className="prices">{ele[0].prices} VND</p>
                            <p className="description">
                                {ele[0].description}
                            </p>
                            <div className="color-picker">
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>

                            <div className="size-quantity">

                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h5>SIZE</h5>
                                        <select name="size" id="input" className="form-control" required="required">
                                            <option value="">1</option>
                                        </select>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                        <h5>SỐ LƯỢNG</h5>
                                        <select name="quantity" id="input" className="form-control" required="required">
                                            <option value="">1</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <a onClick={()=>addToCart(1,ele[0])} className="add-cart">THÊM VÀO GIỎ HÀNG</a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <Link to='/cart' className="buy">THANH TOÁN</Link>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return {
        onGetAllProducts:(products)=>{
            dispatch(actions.getAllProducts(products));
        },
        onAddToCart: (quantity, product) => {
            dispatch(actions.addToCart(quantity, product));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductDetail);