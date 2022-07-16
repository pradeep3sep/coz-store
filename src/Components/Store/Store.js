import { configureStore } from "@reduxjs/toolkit";
import CartProdcutReducer from './CartProdcutReducer'

const store = configureStore ({
    reducer : {
        Cart : CartProdcutReducer
    }
})

export default store