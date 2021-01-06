import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../redux/actions/actions';
import './cart.css';

function ShoppingCart(props) {
    const { carts ,onDelCart } = props;
    var total = 0;
    carts.forEach(element => {
        total += element.product.prices * element.quantity;
    });

    const onDelProduct=(id)=>{
        onDelCart(id);
    }

    return (
        <div>
            <div className="cart">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 col-lg-8">
                            <h2 className="cart-title">GIỎ HÀNG</h2>
                            {carts.map((item, index) => {
                                return (
                                    <div className="product-info" key={index}>
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <img src={item.product.imgUrl} alt="" />
                                                    </div>
                                                    <div className="media-body">
                                                        <h4 className="media-heading">{item.product.nameProduct}+{item.product.typeColor}</h4>
                                                        <h5 className="media-prices">Giá: {item.product.prices} VND</h5>
                                                        <div className="row bottom">
                                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                <h5>SIZE</h5>
                                                                <select className="browser-default custom-select custom-select-lg mb-3">
                                                                    <option selected>Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                                                <h5>SỐ LƯỢNG</h5>
                                                                <select className="browser-default custom-select custom-select-lg mb-3">
                                                                    <option >Open this select menu</option>
                                                                    <option value="1">One</option>
                                                                    <option value="2">Two</option>
                                                                    <option value="3">Three</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
                                                <div className="total">{item.product.prices * item.quantity} VND</div>
                                                <span className="product-status">Còn hàng</span>
                                                <p className="remove" onClick={()=>onDelProduct(item.product.id)}><i className="fas fa-trash-alt"></i></p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                            <div className="main-cart-right">
                                <h2>ĐƠN HÀNG</h2>
                                <div className="total-cast">

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <p className="pull-left">Đơn hàng</p>
                                            <p className="pull-right">{total} VND</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <p className="pull-left">Giảm</p>
                                            <p className="pull-right">0 VND</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="payment">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <p className="pull-left">Tạm Tính</p>
                                            <p className="pull-right">{total} VND</p>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/payment" className="btn-cart text-center">TIẾP TỤC THANH TOÁN</Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispacth, props) => {
    return {
        onDelCart:(id)=>{
            dispacth(actions.delCart(id));
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);