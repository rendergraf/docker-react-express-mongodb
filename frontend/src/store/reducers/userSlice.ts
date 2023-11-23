import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserType } from '@types';

const initialState: UserType = {
  name: '',
  last_name: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserType>) => {
      const { name, last_name, email } = action.payload;
      return {
        ...state,
        name,
        last_name,
        email,
      };
    },
    removeUser: () => initialState,
  },
});

// Actions
export const { addUser, removeUser } = userSlice.actions;

// Reducer
export default userSlice.reducer;
