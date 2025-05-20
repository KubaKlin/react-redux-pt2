import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  ratings: {},
};

export const showRatingSlice = createSlice({
  name: 'showRating',
  initialState,
  reducers: {
    setRating: (state, action) => {
      const { showId, rating } = action.payload;
      state.ratings[showId] = Math.max(1, Math.min(10, rating));
    },
    removeRating: (state, action) => {
      const { showId } = action.payload;
      delete state.ratings[showId];
    },
  },
});

export const { setRating, removeRating } = showRatingSlice.actions;

export const selectShowRating = (state, showId) => state.showRating.ratings[showId] || null;

export default showRatingSlice.reducer; 