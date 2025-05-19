import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import searchReducer from './searchSlice';
import watchedEpisodesReducer from './episodeWatchedSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    watchedEpisodes: watchedEpisodesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
