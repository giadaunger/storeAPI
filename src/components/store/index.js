import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import user from './user';
import cart from './cart';

export const store = configureStore({
    reducer: {
        products,
        user,
        cart
    },
});
