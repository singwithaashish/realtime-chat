import { createSlice } from '@reduxjs/toolkit'

export const messageSlice = createSlice({
  name: 'all_messages',
  initialState: {
    value: [
        {
            id: 1,
            user_id: 1,
            message: 'Hello',
            created_at: '2020-06-01T00:00:00.000Z',
        },
        {
            id: 2,
            user_id: 2,
            message: 'Hello',
            created_at: '2020-06-01T00:00:00.000Z',
        },
    ],
  },
  reducers: {
    add_message: (state, action) => {
        state.value.push(action.payload)
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = messageSlice.actions

export default messageSlice.reducer