import React, { useState } from 'react';
import './App.css';
import Content from './components/content/content';
import Footer from './components/footer/footer';
import Header from './components/header/header';

function App(props) {
    const [leftTree, setLeftTree] = useState([
        {
            label: 'Trạng thái',
            isToggle: false,
            leaf: ['Limited Edition', 'Online Only', 'Sale Off', 'Best Seller']
        },
        {
            label: 'Trạng thái',
            isToggle: true,
            leaf: ['Limited Edition', 'Online Only', 'Sale Off', 'Best Seller']
        },
        {
            label: 'Trạng thái',
            isToggle: false,
            leaf: ['Limited Edition', 'Online Only', 'Sale Off', 'Best Seller']
        }
    ]);

    const onToggleItem = (index) =>{       
        const cloneTree = [...leftTree];
        cloneTree[index].isToggle = !cloneTree[index].isToggle;
        setLeftTree(cloneTree);
    }
    return (
        <div>
            <Header/>
            <Content
                leftTree={leftTree}
                onToggleItem={onToggleItem}
            />
            <Footer/>
        </div>
    );
}

export default App;