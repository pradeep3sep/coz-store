import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    image : '',
    size : '',
    color : '',
    qty: 0,
    id: '',
    productName : '',
    price: '',
}

const CartProdcutReducer = createSlice({
    name: "cartreducer",
    initialState : initialProductstate,
    reducers : {
        addproduct(state,action){
            state.qty = action.payload.Quantity
        },
        removeproduct(state){

        },
    }
});

export const CartActions = CartProdcutReducer.actions;
export default CartProdcutReducer.reducer;