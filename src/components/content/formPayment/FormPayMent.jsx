import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

function FormPayMent(props) {
    const {carts} = props;
    const URL_API = "https://cors-anywhere.herokuapp.com/thongtindoanhnghiep.co/api/city";
    const [infBuyer, setInfBuyer] = useState({
        userName: '',
        email: '',
        address: '',
        city: '',
        phoneNumber: '',
        total: 0,
        billDetail: [],
        payment: 'thanh-toan-truc-tiep',
        status: null
    });
   
    const [city, setCity] = useState([]);
    const [cityDetail, setCityDetail] = useState([]);
    const [id, setid] = useState('');

    var total = 0;
    carts.forEach(element => {
        total += element.product.prices * element.quantity;
    });

    useEffect(() => {
        fetch(URL_API).then(resp => resp.json())
            .then(data => {
                const newCity = (data.LtsItem || []).map(item => {
                    return {
                        Title: item.Title,
                        ID: item.ID
                    }
                })
                setCity(newCity);
            });
            setInfBuyer({...infBuyer,billDetail:carts,total:total})
    }, []);

    useEffect(() => {
        const URL_DETAIL = `https://cors-anywhere.herokuapp.com/thongtindoanhnghiep.co/api/city/${id}/district`;
        fetch(URL_DETAIL).then(response => response.json())
            .then(data => {
                const detail = (data || []).map(item => {
                    return {
                        Title: item.Title,
                        ID: item.ID
                    }
                })
                setCityDetail(detail);
            });
    }, [id]);

    const onHandleChangeCity = (e) => {
        const target = e.target;
        const value = target.value;
        setid(value);

        const URL_CITYDETAIL = `https://cors-anywhere.herokuapp.com/https://thongtindoanhnghiep.co/api/city/${value}`;
        fetch(URL_CITYDETAIL).then(response => response.json())
            .then(data => {
                console.log(data);
                setInfBuyer({ ...infBuyer, city: data.Title })
            });

    }

    // form handle
    const onHandleSubmit=(e)=>{
        e.preventDefault();
    }

    const onHandleChange = (e) =>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setInfBuyer({...infBuyer,[name]:value})
    }

    const onBuy = () =>{
        console.log(infBuyer);
    }
    // 
    return (
        <div>
            <div className="container-fluid">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <h2 className="cart-title">THÔNG TIN GIAO HÀNG</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                        <form method="POST" role="form" onSubmit={onHandleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Họ và tên" name="userName" onChange={onHandleChange}/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Số điện thoại" name="phoneNumber" onChange={onHandleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="" placeholder="Email" name="email" onChange={onHandleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="" placeholder="Địa chỉ" name="address" onChange={onHandleChange} />
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <select className="custom-select" onChange={onHandleChangeCity}>
                                        {(city || []).map((item, index) => {
                                            return (
                                                <option value={item.ID} key={index}>{item.Title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                    <select className="custom-select">
                                        {(cityDetail || []).map((item, index) => {
                                            return (
                                                <option value={item.ID} key={index}>{item.Title}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </div>

                            <button type="submit" onClick={onBuy} className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>


            </div>
        </div>
    );
}

const mapStateToProps = state =>{
    return{
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch,props)=>{
    return{
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (FormPayMent);