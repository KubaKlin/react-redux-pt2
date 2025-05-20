import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import searchReducer from './searchSlice';
import watchedEpisodesReducer from './episodeWatchedSlice';
import showRatingReducer from './showRatingSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    search: searchReducer,
    watchedEpisodes: watchedEpisodesReducer,
    showRating: showRatingReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(api.middleware);
  },
});
