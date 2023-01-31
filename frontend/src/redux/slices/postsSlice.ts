import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getPosts } from '../../http/axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const {posts} = await getPosts()
  return posts
})

export interface IPost {
  _id: string,
  title: string,
  body: string,
}

export interface IPosts {
  posts: {
    items: [] | IPost[],
    status: 'loading' | 'fulfilled' | 'rejected'
  }
}

const initialState: IPosts = {
  posts: {
    items: [],
    status: 'loading'
  }
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.posts.status = 'loading'
    }),
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
      state.posts.items = action.payload
      state.posts.status = 'fulfilled'
    })
  },
});

// Action creators are generated for each case reducer function
export const {  } = postsSlice.actions;

export default postsSlice.reducer;
