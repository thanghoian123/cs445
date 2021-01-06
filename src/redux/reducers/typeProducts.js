import * as types from '../constances/constances';
const typeP = [
    {
        label: 'Trạng thái',
        code:'trang-thai',
        isToggle: false,
        leaf: [
            {name:'Urbas',code:'urbas'}, 
            {name:'Online Only',code:'online-only'}, 
            {name:'Sale Off',code:'sale-off'}, 
            {name:'Best Seller',code:'best-seller'}, 
        ]
    },
    {
        label: 'Trạng thái',
        code:'trang-thai',
        isToggle: false,
        leaf: [
            {name:'Limited Edition',code:'limited-edition'}, 
            {name:'Online Only',code:'online-only'}, 
            {name:'Sale Off',code:'sale-off'}, 
            {name:'Best Seller',code:'best-seller'}, 
        ]
    },
    {
        label: 'Trạng thái',
        code:'trang-thai',
        isToggle: false,
        leaf: [
            {name:'Urbas',code:'urbas'}, 
            {name:'Online Only',code:'online-only'}, 
            {name:'Sale Off',code:'sale-off'}, 
            {name:'Best Seller',code:'best-seller'}, 
        ]
    }
]
const myReducers = (state=typeP,action)=>{
    switch(action.type){
        default: return state;
    }
}

export default myReducers;