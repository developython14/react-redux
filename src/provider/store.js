import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './provider'

export const mystore =  configureStore({
  reducer: {
    counter: counterReducer,
  },
})