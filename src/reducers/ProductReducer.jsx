
const initialState = {
    products:[
        {
            id:1,
            name:"product 1",
            price:100
        },
        {
            id:2,
            name:"product 2",
            price:200
        }
    ]
}



const ProductReducer = (state=initialState,action) => {

    switch (action.type) {
        
        case 'ADD_PRODUCT':
            // eslint-disable-next-line no-case-declarations
            const id = state.products.length+1
            
            return {
                ...state,
                products:[...state.products,{...action.payload,id:id}]
            } ;



        case 'UPDATE_PRODUCT':
            // eslint-disable-next-line no-case-declarations
            const product = state.products.find((product)=>product.id==action.payload.id);
            product.name = action.payload.name;
            product.price = parseInt(action.payload.price);
            return state ;
        
        case 'DELETE_PRODUCT':
            // eslint-disable-next-line no-case-declarations
            const products = state.products.filter((product)=>product.id!=action.payload);
            return {...state,products:products};
        
        default:
            return state
    }

}

export default ProductReducer

