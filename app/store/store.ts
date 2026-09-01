import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, type TypedUseSelectorHook } from 'react-redux';
import counterReducer from '../slice/counterSlice';
import textoReducer from '../slice/textoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    texto: textoReducer,
  },
});

// Extract RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create pre-typed hooks for use throughout your app
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
