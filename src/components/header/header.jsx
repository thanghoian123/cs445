import React, { useEffect } from 'react';
import './header.css';
import logo from './logo.png';

function Header(props) {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = 'js/script.js';
        script.async = true;

        document.body.appendChild(script);
    }, []);
    return (
        <div className="container-fluid header">
            <div className="row header-option">
                <div className="col-sm-4 col-md-4 col-xs-0">
                </div>
                <div className="col-sm-8 col-md-8 col-xs-12">
                    <ul>
                        <li><a href="true"><i className="fas fa-search-plus"></i><span>Tra cứu đơn hàng</span></a></li>
                        <li><a href="true"><i className="fas fa-map-marker-alt"></i><span>Tìm cửa hàng</span></a></li>
                        <li><a href="true"><i className="fas fa-heart"></i><span>Yêu thích</span></a></li>
                        <li><a href="true"><i className="fas fa-user"></i><span>Đăng nhập</span></a></li>
                        <li><a href="true"><i className="fas fa-shopping-cart"></i><span>Giỏ hàng(<span>0</span>)</span></a></li>
                    </ul>
                </div>
            </div>
            <div className="row pt-3">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-menu">
                    <ul>
                        <li className="close">Close</li>
                        <li><a href="true">Sản phẩm</a></li>
                        <li><a href="true">nam</a></li>
                        <li><a href="true">nữ</a></li>
                        <li><a href="true">sale off</a></li>
                    </ul>
                    <div className="bar">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="search">
                    <div className="">
                        <div className="form-group">
                            <i className="fas fa-search"></i>
                            <input type="text" className="form-control" id="" placeholder="Input field" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="row bg-grey hot-slide">
                <div className="text-slide">
                    <div className="text-content">
                        <ul>
                            <li>Free ship với hóa đơn trên 800k!</li>
                            <li>hàng 2 tuần nhận đổi - 1 năm bảo hành</li>
                            <li>buy more pay less - áp dụng khi mua phụ kiện</li>
                            <li>happy shopping</li>
                        </ul>
                    </div>
                    <div className="arrow">
                        <ul>
                            <li><i className="fas fa-chevron-left" /></li>
                            <li><i className="fas fa-chevron-right" /></li>
                        </ul>

                    </div>
                </div>

            </div>


        </div>

    );
}

export default Header;