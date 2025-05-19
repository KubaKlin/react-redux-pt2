import { createSlice } from '@reduxjs/toolkit';

const loadWatchedEpisodesFromStorage = () => {
  try {
    const storedWatched = localStorage.getItem('watchedEpisodes');
    return storedWatched ? JSON.parse(storedWatched) : [];
  } catch (error) {
    console.error('Error loading watched episodes from localStorage:', error);
    return [];
  }
};

const initialState = {
  watchedEpisodes: loadWatchedEpisodesFromStorage(),
};

export const watchedSlice = createSlice({
  name: 'watchedEpisodes',
  initialState,
  reducers: {
    toggleWatched: (state, action) => {
      const { showId, episodeId } = action.payload;
      const episodeKey = `${showId}-${episodeId}`;
      const index = state.watchedEpisodes.indexOf(episodeKey);
      
      if (index === -1) {
        state.watchedEpisodes.push(episodeKey);
      } else {
        state.watchedEpisodes.splice(index, 1);
      }
      
      localStorage.setItem('watchedEpisodes', JSON.stringify(state.watchedEpisodes));
    },
  },
});

export const { toggleWatched } = watchedSlice.actions;

export default watchedSlice.reducer;