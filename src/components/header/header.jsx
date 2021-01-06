import React, { useEffect, useState } from 'react';
import './header.css';
import logo from './logo.png';
import * as actions from '../../redux/actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
    const { carts, amount } = props;
    const [user, setUser] = useState({});
    const [role, setRole] = useState("ROLE_USER");

    var amounts = 0;
    carts.forEach(element => {
        amounts = amounts + element.quantity;
    });
    useEffect(() => {
        amounts = amount;
    }, [amount]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = 'js/script.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        setUser(user);
        if (user) {
            const role = user.roles[0];
            setRole(role);
        }

    }, []);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('token'));
        if (user) {
            const role = user.roles[0];
            setRole(role);
        }
    }, [user]);

    const onLogout = () => {
        localStorage.removeItem('token');
        setUser({});
        setRole("ROLE_USER");
    }

    const viewAdmin = () => {
        return (

            <ul>
                <li><a href="true"><i className="fas fa-search-plus"></i><span>Tra cứu đơn hàng</span></a></li>
                <li><a href="true"><i className="fas fa-map-marker-alt"></i><span>Tìm cửa hàng</span></a></li>
                <li><a href="true"><i className="fas fa-heart"></i><span>Yêu thích</span></a></li>
                <li><Link to="/" onClick={onLogout}><i className="fas fa-user"></i><span>Đăng Xuat</span></Link></li>
                <li><Link to="/admin" ><i className="fas fa-user"></i><span>Adminpage</span></Link></li>
                <li><Link to='/cart'><i className="fas fa-shopping-cart"></i><span>Giỏ hàng(<span>{amounts}</span>)</span></Link></li>
            </ul>


        )
    }

    const viewUser = () => {
        return (
            <ul>
                <li><a href="true"><i className="fas fa-search-plus"></i><span>Tra cứu đơn hàng</span></a></li>
                <li><a href="true"><i className="fas fa-map-marker-alt"></i><span>Tìm cửa hàng</span></a></li>
                <li><a href="true"><i className="fas fa-heart"></i><span>Yêu thích</span></a></li>
                {user && user.username ? <li><Link to="/" onClick={onLogout}><i className="fas fa-user"></i><span>Đăng Xuat</span></Link></li> :  <li><Link to="/signin"><i className="fas fa-user"></i><span>Đăng Nhập</span></Link></li>}
                
                <li><Link to='/cart'><i className="fas fa-shopping-cart"></i><span>Giỏ hàng(<span>{amounts}</span>)</span></Link></li>
            </ul>
        )
    }

    return (
        <div className="container-fluid header">
            <div className="row header-option">
                <div className="col-sm-4 col-md-4 col-xs-0">
                </div>
                <div className="col-sm-8 col-md-8 col-xs-12">
                    {role== "ROLE_ADMIN" ? viewAdmin() : viewUser()}
                </div>
            </div>
            <div className="row pt-3">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>

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

const mapStateToProps = state => {
    return {
        carts: state.carts
    }
}

const mapDispatchToProps = (dispacth, props) => {
    return {

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);