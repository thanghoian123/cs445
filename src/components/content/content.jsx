import React from 'react';
import ProductFilter from './productFilter/ProductFilter';
import ListProducts from './listproducts/listproducts';
import SideBar from './sidebar/SideBar';

function Content(props) {
    const {leftTree,onToggleItem,UpdateCart,type} = props;
    const onUpdateCart =(data)=>{
        UpdateCart(data);
    }
    return (
        <div>

            <div className="container">

                <div className="row mt-5">
                    <div className="col-sm-12 col-md-3">
                        <SideBar
                            leftTree = {leftTree}
                            onToggleItem = {onToggleItem}
                        />
                    </div>
                    <div className="col-md-9 ">
                        {type==''?<ListProducts onUpdateCart={onUpdateCart}/>:<ProductFilter onUpdateCart={onUpdateCart} type={type}/>}
                        
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Content; 