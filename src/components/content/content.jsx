import React from 'react';
import ListProducts from './listproducts/listproducts';
import SideBar from './sidebar/SideBar';

function Content(props) {
    const {leftTree,onToggleItem} = props;
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
                        <ListProducts/>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Content; 