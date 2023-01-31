import { configureStore } from '@reduxjs/toolkit'
import products from '../components/pages/ProductPage/ProductsList/productsSlice'

const store = configureStore({
    reducer: { products },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;