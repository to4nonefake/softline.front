import { configureStore } from '@reduxjs/toolkit';
import objectivesReducer from './objectivesReducer';

export const store = configureStore({
  reducer: {
    objectivesReducer: objectivesReducer
  },
});