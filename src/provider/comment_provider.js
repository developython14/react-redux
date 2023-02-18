import { createSlice } from '@reduxjs/toolkit'



export const commentSlice = createSlice({
    name: 'comment',
    initialState: {
      comment:'',
      touched:false
    },
    reducers: {
      changename: (state, ref) => {
          state.comment = ref.payload.comment
          state.touched=true;
        },
    },
  })


// Action creators are generated for each case reducer function
export const { changename } = commentSlice.actions

export default commentSlice.reducer