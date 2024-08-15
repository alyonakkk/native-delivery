import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUser } from '@/types/user';

export interface IInitState {
  data: IUser | null;
}

const initialState: IInitState = {
  data: null
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (state, action: PayloadAction<IUser | null>) => {
      state.data = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
