import React, { FC, useState } from 'react'

// Material-UI components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// Import Types
import { CounterControlsProps, UserType } from '@types'

// Custom Hooks
import { useAppDispatch, useAppSelector } from '@hooks'

//Redux Reducers
import { decrement, increment } from '@reducers/counterSlice'
import { addUser, removeUser } from '@reducers/userSlice'

const Counter = () => {
	const count = useAppSelector((state) => state.counter.value)
	const user = useAppSelector((state) => state.user)
	const dispatch = useAppDispatch()
	//
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')

	const handleIncrement = () => {
		dispatch(increment())
	}

	const handleDecrement = () => {
		dispatch(decrement())
	}

	const handleAddUser = () => {
		const newUser = { name, last_name: lastName, email }
		dispatch(addUser(newUser))
		setName('')
		setLastName('')
		setEmail('')
	}

	const handleRemoveUser = () => {
		dispatch(removeUser())
	}

	return (
		<div>
			<CounterControls count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
			<UserInfo user={user} />
			<UserActions
				onAddUser={handleAddUser}
				onRemoveUser={handleRemoveUser}
				name={name}
				setName={setName}
				lastName={lastName}
				setLastName={setLastName}
				email={email}
				setEmail={setEmail}
			/>
		</div>
	)
}

const CounterControls:FC<CounterControlsProps> = ({ count, onIncrement, onDecrement }) => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" my={2}>
			<Button variant="contained" onClick={onDecrement}>
				Decrement
			</Button>
			<Typography variant="h4" component="span" mx={2}>
				{count}
			</Typography>
			<Button variant="contained" onClick={onIncrement}>
				Increment
			</Button>
		</Box>
	)
}

const UserInfo:FC<UserType> = ({ user }) => {
	console.log(user)
	return (
		<Box my={2}>
			<Typography variant="h6">
				Name: {user.user.name} <br />
				Last Name: {user.user.last_name} <br />
				Email: {user.user.email}
			</Typography>
		</Box>
	)
}

const UserActions = ({ onAddUser, onRemoveUser, name, setName, lastName, setLastName, email, setEmail }) => {
	return (
		<Box display="flex" flexDirection="column" alignItems="center">
			<TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
			<TextField label="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
			<TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
			<Box mt={2}>
				<Button variant="contained" onClick={onAddUser}>
					Add User
				</Button>
				<Button variant="contained" onClick={onRemoveUser}>
					Remove User
				</Button>
			</Box>
		</Box>
	)
}

export default Counter
