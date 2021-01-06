import React, {Suspense } from 'react';
import './App.css';
import Loading from './components/Loading/Loading';

const RouterCusTom = React.lazy(()=> import ('./components/router/RouterCustom'))

function App(props) {


    return (
        <div>
            <Suspense fallback={<Loading/>}>
                <RouterCusTom/>
            </Suspense>
            
        </div>
    );
}

export default App;