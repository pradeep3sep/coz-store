import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    isMobile : '',
    logName : '',
    logEmail: "",
    photoURL : '',
    cartVisibility : false,
}

const UiReducer = createSlice({
    name: "UiReducer",
    initialState : initialProductstate,
    reducers : {
        checkWidth(state,action){
            state.isMobile = action.payload
        },
        setname(state,action){
            state.logName = action.payload.displayName
            state.logEmail = action.payload.email
            state.photoURL = action.payload.photoURL
        },
        cartdisplay(state,action){
            state.cartVisibility = action.payload
        },
        
    }
});

export const UiActions = UiReducer.actions;
export default UiReducer.reducer;