import { configureStore } from "@reduxjs/toolkit";
import CartProdcutReducer from './CartProdcutReducer';
import WishlistReducer from './WishlistReducer';
import UiReducer from './UiReducer';

const store = configureStore ({
    reducer : {
        Cart : CartProdcutReducer,
        Wishlist : WishlistReducer,
        UiThing : UiReducer,
    }
})

export default store