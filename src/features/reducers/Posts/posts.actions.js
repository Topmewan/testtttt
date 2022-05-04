import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk(
  "@@posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      return res.data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
