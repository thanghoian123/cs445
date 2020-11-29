import React, { useState } from 'react';
import './listP.css';

function ListProducts(props) {
    const [listProducts, setListProducts] = useState([
        {
            imgUrl_hover:'https://ananas.vn/wp-content/uploads/pro_A61102_1-500x500.jpg',
            imgUrl: 'https://ananas.vn/wp-content/uploads/pro_A61102_2-500x500.jpg',
            nameProduct: 'Urbas Unsettling - High Top',
            productStatus: 'New Arrival',
            prices: '500.000',
            typeColor: 'Insignia/Sulphur'
        },
        {
            imgUrl_hover:'https://ananas.vn/wp-content/uploads/pro_A61102_1-500x500.jpg',
            imgUrl: 'https://ananas.vn/wp-content/uploads/pro_A61102_2-500x500.jpg',
            nameProduct: 'Urbas Unsettling - High Top',
            productStatus: 'New Arrival',
            prices: '500.000',
            typeColor: 'Insignia/Sulphur'
        },
        {
            imgUrl_hover:'https://ananas.vn/wp-content/uploads/pro_A61102_1-500x500.jpg',
            imgUrl: 'https://ananas.vn/wp-content/uploads/pro_A61102_2-500x500.jpg',
            nameProduct: 'Urbas Unsettling - High Top',
            productStatus: 'New Arrival',
            prices: '500.000',
            typeColor: 'Insignia/Sulphur'
        },
        {
            imgUrl_hover:'https://ananas.vn/wp-content/uploads/pro_A61102_1-500x500.jpg',
            imgUrl: 'https://ananas.vn/wp-content/uploads/pro_A61102_2-500x500.jpg',
            nameProduct: 'Urbas Unsettling - High Top',
            productStatus: 'New Arrival',
            prices: '500.000',
            typeColor: 'Insignia/Sulphur'
        }
    ]);

    return (
        <div>
            <div className="banner">
                <img src="https://ananas.vn/wp-content/uploads/desktop_productlist.jpg" alt="" />
            </div>
            <div className="list-products mb-4">

                <div className="row">
                    {listProducts.map((item, index) => {
                        return (
                            <div className="col-xs-6 col-sm-6 col-md-4 col-lg-4 item mt-3" key={index}>
                                <div className="thumbnail">
                                    <div className="cont-item">
                                        <a href="true">
                                            <img src={item.imgUrl} alt="" className="img-main"/>
                                            <img src={item.imgUrl_hover} alt="" className="img-hover"/>
                                        </a>
                                        <div className="button">
                                            <a href="true" className="btn-buy">Mua Hàng</a>
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

export default ListProducts;