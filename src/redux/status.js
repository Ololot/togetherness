import { createSlice } from '@reduxjs/toolkit'

export const status = createSlice({
  name: 'counter',
  initialState: {
    name: "",
    fraction: null,
  },
  reducers: {
    setName: (state, action) => {
      console.log(action)
      state.name = action.payload
    },
    setFraction: (state, action) => {
      console.log(action.payload)
      state.fraction = action.payload;
    },
  },
})

export const { setName, setFraction } = status.actions

export default status.reducer