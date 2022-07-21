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
            const existingItem = state.items.find((item) => item.id === newItem.id && item.Size === newItem.Size);
            if (!existingItem) {
                console.log("a, this is called when nothing");
                state.items.push(newItem);
                state.TotalArticle++; 
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            } else {
                console.log("b");
                existingItem.Quantity = existingItem.Quantity + newItem.Quantity
                state.TotalArticle = state.TotalArticle + 0; 
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            }
        },
        removeproduct(state,action){
            const newItem = action.payload
            state.items = state.items.filter((item)=> item.id !== newItem.id || item.Size !== newItem.Size)
            state.TotalArticle--;
            state.TotalPrice = state.TotalPrice - (newItem.Quantity * newItem.Price)
        },
    }
});

export const CartActions = CartProdcutReducer.actions;
export default CartProdcutReducer.reducer;