import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            state.products.push(action.payload)
        },
        removeFromCart(state, action) {
            state.products = state.products.filter(product => product.id != action.payload)
        },
        emptyCart(state) {
            state.products = []
        }
    },
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer