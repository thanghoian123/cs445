import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import ShowTable from '../admin-template/content/wrapper/ShowTable';
import Cart from '../container/cart';
import PayMent from '../container/payMent';
import ProductDetail from '../container/productDetail';
import Shop from '../container/Shop';
import ProductFilter from '../container/productFilter';
import Singin from '../singin-singup/signin/Signin';
import Signup from '../singin-singup/singup/Signup';
import AddProduct from '../../components/admin-template/content/wrapper/AddProduct';


function RouterCustom(props) {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Shop />
                    </Route>
                    <Route path="/product-detail/:id"  exact component={ProductDetail}/>
                    <Route path="/cart" exact component={Cart}/> 
                    <Route path="/payment" exact component={PayMent}/>     

                    <Route path="/signin" exact component={Singin}/> 
                    <Route path="/signup" exact component={Signup}/>

                    <Route path="/admin" exact component={ShowTable}/>   
                    {/* <Route path="/signup" exact component={Signup}/>                 */}

                    <Route path="/type/:type" exact component={Shop}/>

                    <Route path="/addproduct" exact component={AddProduct}/>
                </Switch>
            </Router>
        </div>
    );
}

export default RouterCustom;