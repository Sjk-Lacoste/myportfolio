import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@utils/interfaces';

const user = createSlice({
  name: 'user',
  initialState: null as IUser | null,
  reducers: {
    setUser(state, { payload }: PayloadAction<IUser | null>) {
      return (state = payload != null ? payload : null);
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
