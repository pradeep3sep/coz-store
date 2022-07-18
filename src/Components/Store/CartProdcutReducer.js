import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    items: [],
    TotalArticle: 0,
    TotalPrice: 0,
}

const CartProdcutReducer = createSlice({
    name: "cartreducer",
    initialState : initialProductstate,
    reducers : {
        addproduct(state,action){
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push(newItem);
                state.TotalArticle++;
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            } else {
                existingItem.Quantity = existingItem.Quantity + newItem.Quantity
                state.TotalArticle = state.TotalArticle + 0; 
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            }
        },
        removeproduct(state){

        },
    }
});

export const CartActions = CartProdcutReducer.actions;
export default CartProdcutReducer.reducer;