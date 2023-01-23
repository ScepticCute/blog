import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IPosts {
  value: number;
}

const initialState: IPosts = {
  value: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = postsSlice.actions;

export default postsSlice.reducer;
