import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    name:'Mustapha belkassem'
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    changename: (state, ref) => {
        console.log(ref);
        console.log('was called succeslgfu ');
        state.name = ref.payload.name
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount , changename } = counterSlice.actions

export default counterSlice.reducer