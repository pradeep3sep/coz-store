import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const ModalVisible = createSlice({
  name: 'ModalVisible',
  initialState,
  reducers: {
    clicked: (state) => {
      state.value = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { clicked } = ModalVisible.actions

export default ModalVisible.reducer