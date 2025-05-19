import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import searchReducer from './searchSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
