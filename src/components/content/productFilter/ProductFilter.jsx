import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../../redux/actions/actions';

function ProductFilter(props) {
    const { productFilter, onAddToCart, carts, onUpdateCart, type, onFilter } = props;
    const [listProductsFilter, setListProductsFilter] = useState(productFilter);

    useEffect(() => {
        console.log('type', type);
        onFilter(type);
        setListProductsFilter(productFilter);
    }, [type]);

    useEffect(() => {
        // onFilter(type);
        // console.log(type,"type");
        // setListProductsFilter(productFilter);
        // console.log('render');
    }, [type]);
    useEffect(() => {
        //    console.log('change');
    }, [productFilter]);


    console.log(listProductsFilter, "listFilter");

    const addToCart = (quantity, product) => {
        onAddToCart(quantity, product);
        var amount = 0;
        carts.forEach(element => {
            amount = amount + element.quantity;
        });

        onUpdateCart(amount);
    }

    return (
        <div>
            <div className="banner">
                <img src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg" alt="" />
            </div>
            <div className="list-products mb-4">

                <div className="row">
                    {productFilter.map((item, index) => {
                        return (
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item mt-3" key={index}>
                                <div className="thumbnail">
                                    <div className="cont-item">
                                        <Link to={`/product-detail/${item.id}`}>
                                            <img src={item.imgUrl} alt="" className="img-main" />
                                            <img src={item.imgUrl_hover} alt="" className="img-hover" />
                                        </Link>
                                        <div className="button">
                                            <a className="btn-buy" onClick={() => addToCart(1, item)}>Mua Hàng</a>
                                        </div>
                                    </div>

                                    <div className="caption">
                                        <p className="status-item">{item.productStatus}</p>
                                        <h4 className="item-name">{item.nameProduct}</h4>
                                        <p className="type-color">{item.typeColor}</p>
                                        <p className="prices">{item.prices} VND</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}


                </div>


            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        productFilter: state.products.productFilter,
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProducts: (products) => {
            dispatch(actions.getAllProducts(products));
        },
        onAddToCart: (quantity, product) => {
            dispatch(actions.addToCart(quantity, product));
        },
        onFilter: (type) => {
            dispatch(actions.filterProduct(type));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);