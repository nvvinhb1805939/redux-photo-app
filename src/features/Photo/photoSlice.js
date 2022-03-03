import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const photoSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPhoto } = photoSlice.actions;
export default photoSlice.reducer;
