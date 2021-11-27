import { configureStore } from '@reduxjs/toolkit'
import message_state from '../features/message_state'


export default configureStore({
  reducer: {
    message_state,
  },
})