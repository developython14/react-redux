import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './provider'
import commentReducer from './comment_provider'

export const mystore =  configureStore({
  reducer: {
    counter: counterReducer,
    comment:commentReducer
  },
})