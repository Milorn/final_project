import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'

export default () => {
  return configureStore({
    reducer: {
        user: userSlice.reducer
    }
  })
}