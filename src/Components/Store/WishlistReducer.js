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
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (!existingItem) {
                state.items.push(newItem);
                state.TotalArticle++; 
            } else {
                state.items = state.items.filter((item)=> item.id !== newItem.id)
                state.TotalArticle--;
            }
        }
    }
});

export const WishlistActions = WishlistReducer.actions;
export default WishlistReducer.reducer;