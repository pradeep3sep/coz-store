import {createSlice} from '@reduxjs/toolkit';

const initialProductstate = {
    isMobile : '',
    logName : '',
    logEmail: "",
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
        }
    }
});

export const UiActions = UiReducer.actions;
export default UiReducer.reducer;