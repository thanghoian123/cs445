import * as types from '../constances/constances';
import * as actions from '../actions/actions';

var products = []

var productFilter = [];

const myReducers = (state={products,productFilter},action)=>{
    switch(action.type){
        case types.GET_PRODUCTS: {
            state={...state , products : action.products};
            return state;
        }
        case types.FILTER_ITEM: {
            const filterS = (state.products || []).filter(ele=>{
                if(ele.typeCategory == action.typePro){
                    return ele;
                }
            });
            return { ...state, productFilter: filterS }
        }
        default: return state;
    }
}

export default myReducers;