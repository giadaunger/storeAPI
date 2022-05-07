import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    product:  {}
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload;
        },
        setProduct: (state, { payload }) => {
            console.log(payload)
            state.product = payload;
        },
        resetProducts: () => initialState
    },
});

export const { setProducts, setProduct, resetProducts } = productSlice.actions;

export default productSlice.reducer;