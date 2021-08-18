import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEntry } from '@utils/interfaces';

const entries = createSlice({
  name: 'entries',
  initialState: [] as IEntry[],
  reducers: {
    setEntries(state, { payload }: PayloadAction<IEntry[] | null>) {
      return (state = payload != null ? payload : []);
    },
    updateEntry(state, { payload }: PayloadAction<IEntry>) {
      const { id } = payload;
      const index = state.findIndex((e) => e.id === id);
      if (index !== -1) {
        state.splice(index, 1, payload);
      }
    },
  },
});

export const { setEntries, updateEntry } = entries.actions;
export default entries.reducer;
