import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  isConnected: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction(state, action) {
        state.user = action.payload
        state.isConnected = true
    },
    logoutAction(state) {
        state.user = {}
        state.isConnected = false
    }
  },
})

export const { loginAction, logoutAction } = userSlice.actions

export default userSlice.reducer