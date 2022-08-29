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
            state.items = action.payload.items
            state.TotalArticle = action.payload.TotalArticle;
            // const status = action.payload.type
            // const newItem = action.payload.product;
            // const existingItem = state.items.find((item) => item.id === newItem.id);
            // if (!existingItem && status === "add") {
            //     state.items.push(newItem);
            //     state.TotalArticle++; 
            // } else {
            //     state.items = action.payload.items
            //     state.TotalArticle = action.payload.TotalArticle;
            // }
        }
    }
});

export const WishlistActions = WishlistReducer.actions;
export default WishlistReducer.reducer;