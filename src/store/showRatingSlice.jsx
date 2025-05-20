import {createSlice} from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('showRatings');
    if (serializedState === null) {
      return { ratings: {} };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading ratings from localStorage:', err);
    return { ratings: {} };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('showRatings', serializedState);
  } catch (err) {
    console.error('Error saving ratings to localStorage:', err);
  }
};

const initialState = loadState();

export const showRatingSlice = createSlice({
  name: 'showRating',
  initialState,
  reducers: {
    setRating: (state, action) => {
      const { showId, rating } = action.payload;
      state.ratings[showId] = Math.max(1, Math.min(10, rating));
      saveState(state);
    },
  },
});

export const { setRating } = showRatingSlice.actions;

export const selectShowRating = (state, showId) => state.showRating.ratings[showId] || null;

export default showRatingSlice.reducer; 