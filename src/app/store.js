import { configureStore } from '@reduxjs/toolkit';
import photoReducer from '../features/Photo/photoSlice';

const reducer = {
  photos: photoReducer,
};

const store = configureStore({
  reducer,
});

export default store;
