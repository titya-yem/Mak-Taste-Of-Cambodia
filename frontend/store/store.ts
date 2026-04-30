import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authslice'
import cartReducer from './slices/cartslice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch