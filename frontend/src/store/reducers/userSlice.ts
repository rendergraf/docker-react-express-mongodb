import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '/src/types/'

const initialState: UserType = {
	name: '',
	last_name: '',
	email: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			const { name, last_name, email } = action.payload
			return {
				...state,
				name,
				last_name,
				email,
			}
		},
		removeUser: (state) => {
			return {
				name: '',
				last_name: '',
				email: '',
			}
		},
	},
})

// Actions
export const { addUser, removeUser } = userSlice.actions

// Reducer
export default userSlice.reducer
