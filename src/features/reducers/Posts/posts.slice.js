import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./posts.actions";

const initialState = {
  posts: [],
  isLoading: false,
  isError: null,
};

const postsSlice = createSlice({
  name: "@@posts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default postsSlice.reducer;
