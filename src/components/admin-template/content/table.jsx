import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './custom.css';
import * as actions from '../../../redux/actions/actions';

function Table(props) {
    const {
        products,
        onGetProducts
    } = props;

    const token = JSON.parse(localStorage.getItem("token")).accessToken || "";
    useEffect(() => {
        const script = document.createElement("script");
        script.src = 'js/table.js';
        script.async = true;

        document.body.appendChild(script);

        axios.get('https://api-doan.herokuapp.com/api/v1/product/products').then(resp => {
            onGetProducts(resp.data);
        })

    }, []);


    return (
        <div>
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                            Data Tables
                        <small>advanced tables</small>
                        </h1>
                        <ol className="breadcrumb">
                            <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
                            <li><a href="#">Tables</a></li>
                            <li className="active">Data tables</li>
                        </ol>
                    </section>
                    {/* Main content */}
                    <section className="content">
                        <div className="row">
                            <div className="col-xs-12">

                                {/* /.box */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Table Product</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example" className="table table-bordered table-striped table-custom">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Prices</th>
                                                    <th>Status</th>
                                                    {/* <th>Option</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Trident</td>
                                                    <td>Internet
                                                    Explorer 4.0
                                                </td>
                                                    <td>Win 95+</td>
                                                    <td> 4</td>
                                                    <td>X</td>
                                                    {/* <td>X</td> */}
                                                </tr>
                                                {(products || []).map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.nameProduct}</td>
                                                        <td>{item.desciptions}</td>
                                                        <td>{item.prices}</td>
                                                        <td>X</td>
                                                        {/* <td>X</td> */}
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Rendering engine</th>
                                                    <th>Browser</th>
                                                    <th>Platform(s)</th>
                                                    <th>Engine version</th>
                                                    <th>CSS grade</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                                {/* /.box */}
                                
                                {/* box */}
                                <div className="box">
                                    <div className="box-header">
                                        <h3 className="box-title">Table Type</h3>
                                    </div>
                                    {/* /.box-header */}
                                    <div className="box-body">
                                        <table id="example2" className="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>List Type</th>

                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* {eleType} */}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name</th>
                                                    <th>List Type</th>

                                                    <th>Option</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    {/* /.box-body */}
                                </div>
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </section>
                    {/* /.content */}
                </div>

            </div>
        </div>
    );
}

var mapStateToProps = state => {
    return {
        products: state.products.products,
        // bills: state.bills
    }
}

var mapDispatchToProps = (dispatch, props) => {
    return {
        onGetProducts: (products) => {
            dispatch(actions.getAllProducts(products))
        },
        // onDelProducts: (id) => {
        //     dispatch(actions.delPro(id))
        // },
        // onGetBills: (bills) => {
        //     dispatch(actions.getBill(bills));
        // },
        // onDelBills: (id) => {
        //     dispatch(actions.delBill(id))
        // },
        // onUpdStt: (item) => {
        //     dispatch(actions.updStt(item))
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);