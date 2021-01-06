import * as types from '../constances/constances';
// products
export const getAllProducts = (products) =>{
    return{
        type : types.GET_PRODUCTS,
        products : products
    }
}

export const filterProduct = (typePro) =>{
    return {
        type: types.FILTER_ITEM,
        typePro : typePro
    }
}
// type
export const getType = (typeP) =>{
    return{
        type : types.GET_TYPE,
        typeP : typeP
    }
}
// cart
export const addToCart=(quantity, product)=>{
    return{
        type: types.ADD_CART,
        quantity: quantity,
        product:product
    }
}

export const delCart=(id)=>{
    return{
        type: types.DEL_CART,
        id:id
    }
}


