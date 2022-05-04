import { combineReducers } from "@reduxjs/toolkit";
import postsSlice from "./Posts/posts.slice";

export const rootReducer = combineReducers({
  posts: postsSlice,
});
