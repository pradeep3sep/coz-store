import { configureStore } from "@reduxjs/toolkit";
import CartProdcutReducer from './CartProdcutReducer';
import UiReducer from './UiReducer';

const store = configureStore ({
    reducer : {
        Cart : CartProdcutReducer,
        UiThing : UiReducer,
    }
})

export default store