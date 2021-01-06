import {combineReducers} from 'redux';
import products from './products';
import typeP from './typeProducts';
import carts from './carts';

const myReducers = combineReducers({
    products:products,
    typeP : typeP,
    carts: carts
})

export default myReducers;