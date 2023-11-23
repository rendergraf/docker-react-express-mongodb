import { useAppDispatch, useAppSelector } from '@hooks';
import { Box, Button, TextField, Typography } from '@mui/material';
import { decrement, increment } from '@reducers/counterSlice';
import { addUser, removeUser } from '@reducers/userSlice';
import { CounterControlsProps, UserType } from '@types';
import React, { FC, useCallback, useState } from 'react';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const user = useAppSelector((state) => state.user) as UserType;
  const dispatch = useAppDispatch();

  const initialState: UserType = {
    name: '',
    last_name: '',
    email: '',
  };

  const [userForm, setUserForm] = useState<UserType>(initialState);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddUser = () => {
		const newUser: UserType = {
			name: userForm.name,
			last_name: userForm.last_name,
			email: userForm.email,
		};
		dispatch(addUser(newUser));
		setUserForm(initialState);
  };

  const handleRemoveUser = () => {
    dispatch(removeUser());
  };

  return (
    <div>
      <CounterControls count={count} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <UserInfo user={user} />
      <UserActions
        onAddUser={handleAddUser}
        onRemoveUser={handleRemoveUser}
        {...userForm}
        setUserForm={setUserForm}
      />
    </div>
  );
};

const CounterControls: FC<CounterControlsProps> = ({ count, onIncrement, onDecrement }) => {
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
  );
};

const UserInfo: FC<{ user: UserType }> = ({ user }) => {
  return (
    <Box my={2}>
      <Typography variant="h6">
        Name: {user.name} <br />
        Last Name: {user.last_name} <br />
        Email: {user.email}
      </Typography>
    </Box>
  );
};


const UserActions: FC<UserType & { onAddUser: () => void; onRemoveUser: () => void; setUserForm: React.Dispatch<React.SetStateAction<UserType>> }> = ({
  name,
  last_name,
  email,
  onAddUser,
  onRemoveUser,
  setUserForm,
}) => {
  const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  }, [setUserForm]);

  const handleLastNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prevState) => ({
      ...prevState,
      last_name: e.target.value,
    }));
  }, [setUserForm]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm((prevState) => ({
      ...prevState,
      email: e.target.value,
    }));
  }, [setUserForm]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <TextField label="Name" value={name || ''} onChange={handleNameChange} />
      <TextField label="Last Name" value={last_name || ''} onChange={handleLastNameChange} />
      <TextField label="Email" value={email || ''} onChange={handleEmailChange} />
      <Box mt={2}>
        <Button variant="contained" onClick={onAddUser}>
          Add User
        </Button>
        <Button variant="contained" onClick={onRemoveUser}>
          Remove User
        </Button>
      </Box>
    </Box>
  );
};



export default Counter;
