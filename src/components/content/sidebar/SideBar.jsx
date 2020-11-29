import React, { useEffect } from 'react';
import './sidebar.css';

function SideBar(props) {
    const {leftTree,onToggleItem} = props;
    
    useEffect(() => {
        console.log('rerender');
    }, [leftTree]);

    const onToggle = (index) => {       
        onToggleItem(index);
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
                                        <label onClick={()=>onToggle(index)} className="label" style={item.isToggle ? styleLabel : {}}>{item.label} {item.isToggle ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>} </label>
                                        <ul className={item.isToggle ? 'active' : ''} id="leaf">
                                            {item.leaf.map((l, index)=>{
                                                return(
                                                <li key={index}><a href="true">{l}</a></li>
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

export default SideBar;