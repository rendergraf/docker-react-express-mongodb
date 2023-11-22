import { configureStore } from '@reduxjs/toolkit'

// Slices
import counterReducer from './reducers/counterSlice'
import userReducer from './reducers/userSlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
		user: userReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
