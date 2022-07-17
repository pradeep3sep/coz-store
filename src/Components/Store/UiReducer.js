import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    isMobile : '',
}

const UiReducer = createSlice({
    name: "UiReducer",
    initialState : initialProductstate,
    reducers : {
        checkWidth(state,action){
            state.isMobile = action.payload
        },
    }
});

export const UiActions = UiReducer.actions;
export default UiReducer.reducer;