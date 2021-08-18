import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '@store/features/auth/authSlice';
import userReducer from '@store/features/auth/userSlice';
import diariesReducer from '@store/features/diary/diariesSlice';
import entriesReducer from '@store/features/entry/entriesSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  diaries: diariesReducer,
  entries: entriesReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
