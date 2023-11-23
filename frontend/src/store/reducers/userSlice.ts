import { createSlice } from '@reduxjs/toolkit'
import { UserType } from '@types'

const initialState:UserType = {
	user: {
		name: '',
		last_name: '',
		email: '',
	}
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			const { name, last_name, email } = action.payload
			return {
				...state,
				user: {
					name,
					last_name,
					email
				}
			}
		},
		removeUser: (state) => {
			return {
				user: {
					name: '',
					last_name: '',
					email: ''
				}
			}
		},
	},
})

// Actions
export const { addUser, removeUser } = userSlice.actions

// Reducer
export default userSlice.reducer
