import {createSlice} from '@reduxjs/toolkit';
import { removeItemInCart } from '../RealTimeDatabse/FirestoreDatabase';

const initialProductstate = {
    items: [],
    TotalArticle: 0,
    TotalPrice: 0,
    currentCurrency: {setvalue :"INR(₹)", symbol : "₹", upiprice : "mrpprice"}
}

const CartProdcutReducer = createSlice({
    name: "cartreducer",
    initialState : initialProductstate,
    reducers : {
        addproduct(state,action){
            const upiprice = state.currentCurrency.upiprice
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id && item.Size === newItem.Size);
            state.TotalPrice = state.TotalPrice + (newItem.Quantity * newItem.Price[upiprice])
            if (!existingItem) {
                state.items.push(newItem);
                state.TotalArticle++; 
            } else {
                existingItem.Quantity = existingItem.Quantity + newItem.Quantity
            }
        },
        removeproduct(state,action){
            const upiprice = state.currentCurrency.upiprice
            const newItem = action.payload
            state.items = state.items.filter((item)=> item.id !== newItem.id || item.Size !== newItem.Size)
            state.TotalArticle--;
            state.TotalPrice = state.TotalPrice - (newItem.Quantity * newItem.Price[upiprice])
        },
        changeQty(state,action){
            const upiprice = state.currentCurrency.upiprice
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
                state.TotalPrice = state.TotalPrice +  (updateArticle.Price[upiprice] * 1)
            }
        },
        currency(state,action){
            state.currentCurrency = action.payload
        },
        setData(state,action){
            state.items = action.payload.items
            state.TotalArticle = action.payload.TotalArticle
            state.TotalPrice = action.payload.TotalPrice
        }
    }
});

export const CartActions = CartProdcutReducer.actions;
export default CartProdcutReducer.reducer;