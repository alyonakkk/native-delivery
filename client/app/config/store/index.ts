import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { userReducer } from '@/config/store/userSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer
    }
  });
};

export type TAppStore = ReturnType<typeof makeStore>;
export type TAppState = ReturnType<TAppStore['getState']>;
export type TAppDispatch = TAppStore['dispatch'];

export const useAppDispatch: () => TAppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
