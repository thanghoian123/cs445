import * as types from '../constances/constances';
var data = JSON.parse(localStorage.getItem('cart_shoes'));
var cart = data ? data : [];

const onFindIndex = (cart,id)=>{
    var index = -1;
    cart.forEach((item,i)=>{
        
        if(item.product.id == id){
            index = i;
            return index;
        }
    })   
    return index;
}

const myReducers = (state = cart,action)=>{
    switch(action.type){
      
        case types.ADD_CART:{
            const newItem = {
                quantity: action.quantity,
                product: action.product
            }
            let i = onFindIndex(state,newItem.product.id);
            if(i==-1){
                state.push(newItem);
            }else{
                state[i].quantity++;
            }
            localStorage.setItem('cart_shoes',JSON.stringify(state));
            return state;
        }
        case types.DEL_CART:{
            let i = onFindIndex(state,action.id);
            if(i==-1){

            }else{
                state.splice(i,1);
            }
            localStorage.setItem('cart_shoes',JSON.stringify([...state]));
            return [...state];
        }
        default : return state;
    }
}

export default myReducers;