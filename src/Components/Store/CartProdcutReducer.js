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
                state.items.push(newItem);
                state.TotalArticle++; 
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            } else {
                existingItem.Quantity = existingItem.Quantity + newItem.Quantity
                state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price)
            }
        },
        removeproduct(state,action){
            const newItem = action.payload
            state.items = state.items.filter((item)=> item.id !== newItem.id || item.Size !== newItem.Size)
            state.TotalArticle--;
            state.TotalPrice = state.TotalPrice - (newItem.Quantity * newItem.Price)
        },
        changeQty(state,action){
            const changeArticle = action.payload
            const needAction = changeArticle.needAction
            if (needAction === 'decreaseQty') {
                const updateArticle = state.items.find((item)=> item.id === changeArticle.id && item.Size === changeArticle.Size)
                if (updateArticle.Quantity < 2) {
                    state.items = state.items.filter((item)=> item.id !== changeArticle.id || item.Size !== changeArticle.Size)
                    state.TotalArticle--;
                } else {
                    updateArticle.Quantity--;
                }
            } else {
                const updateArticle = state.items.find((item)=> item.id === changeArticle.id && item.Size === changeArticle.Size)
                updateArticle.Quantity++;
                //multiply by 1 is to convert string to number
                state.TotalPrice = state.TotalPrice +  (updateArticle.Price * 1)
            }
        }
    }
});

export const CartActions = CartProdcutReducer.actions;
export default CartProdcutReducer.reducer;