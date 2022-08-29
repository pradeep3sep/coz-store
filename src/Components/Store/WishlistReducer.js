import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    items: [],
    TotalArticle: 0,
}

const WishlistReducer = createSlice({
    name: "wishlistreducer",
    initialState : initialProductstate,
    reducers : {
        activeproduct(state,action){
            const status = action.payload.type
            const newItem = action.payload.product;
            // if (!existingItem && status === "add") {
                //     state.items.push(newItem);
                //     state.TotalArticle++; 
            if (status === "add") {
                state.items.push(newItem);
                state.TotalArticle++; 
            } else if (status === "remove"){
                const existingItem = state.items.filter((item) => item.id !== newItem.id);
                state.items = existingItem
                state.TotalArticle--; 
            } else {
                state.items = action.payload.items
                state.TotalArticle = action.payload.TotalArticle;

            }
        }
    }
});

export const WishlistActions = WishlistReducer.actions;
export default WishlistReducer.reducer;