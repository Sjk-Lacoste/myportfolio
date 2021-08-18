import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDiary } from '@utils/interfaces';

const diaries = createSlice({
  name: 'diaries',
  initialState: [] as IDiary[],
  reducers: {
    addDiary(state, { payload }: PayloadAction<IDiary[]>) {
      const diariesToSave = payload.filter((diary) => {
        return state.findIndex((item) => item.id === diary.id) === -1;
      });
      state.push(...diariesToSave);
    },
    updateDiary(state, { payload }: PayloadAction<IDiary>) {
      const { id } = payload;
      const diaryIndex = state.findIndex((diary) => diary.id === id);
      if (diaryIndex !== -1) {
        state.splice(diaryIndex, 1, payload);
      }
    },
  },
});

export const { addDiary, updateDiary } = diaries.actions;
export default diaries.reducer;
