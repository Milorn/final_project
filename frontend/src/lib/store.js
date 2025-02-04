import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { cartSlice } from './cartSlice'

export default () => {
  return configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice.reducer
    }
  })
}