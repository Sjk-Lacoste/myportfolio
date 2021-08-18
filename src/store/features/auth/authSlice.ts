import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthState } from '../../../utils/interfaces';

const initialState: IAuthState = {
  token: null,
  isAuthenticated: false,
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveToken(state, { payload }: PayloadAction) {
      if (payload != null) {
        state.token = payload;
      }
    },
    clearToken(state) {
      state.token = null;
    },
    setAuthState(state, { payload }: PayloadAction) {
      if (payload != null) {
        state.isAuthenticated = payload;
      }
    },
  },
});

export const { saveToken, clearToken, setAuthState } = auth.actions;
export default auth.reducer;
