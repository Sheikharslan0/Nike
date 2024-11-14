import { configureStore } from '@reduxjs/toolkit';
import porductReducers from './features/ProductSlice';


const store = configureStore({
    reducer: {
        products: porductReducers
    }
})

export default store;