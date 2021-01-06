import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as actions from '../../../redux/actions/actions';
import './sidebar.css';

function SideBar(props) {
    const { typeP, onToggleItem } = props;
    const [leftTree, setLeftTree] = useState(typeP);
    console.log(typeP);

    useEffect(() => {
       axios.get("https://api-doan.herokuapp.com/api/v1/category/categories").
            then(resp=> {

            })
            .catch(err=> console.error(err))

    }, []);

    const onToggle = (index) => {
        const cloneTree = [...leftTree];
        cloneTree[index].isToggle = !cloneTree[index].isToggle;
        setLeftTree(cloneTree);
    }
    const styleLabel = {
        "color": "black"
    }

    return (
        <div>

            <div className="side-bar">
                <div className="nav-tab">
                    <ul>
                        <li><a href="true">Tất cả</a></li>
                        <li><a href="true" className="active">Nam</a></li>
                        <li><a href="true">Nữ</a></li>
                    </ul>
                </div>
                <div className="divide"></div>
                <div className="sidebar-resp">
                    <p>Tùy chọn</p>
                    <div className="left-tree">
                        <ul className="nav">
                            {leftTree.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <label onClick={() => onToggle(index)} className="label" style={item.isToggle ? styleLabel : {}}>{item.label} {item.isToggle ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>} </label>
                                        <ul className={item.isToggle ? 'active' : ''} id="leaf">
                                            {item.leaf.map((l, index) => {
                                                return (
                                                    <li key={index}><Link to={`/type/${l.code}`}>{l.name}</Link></li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        typeP: state.typeP
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);