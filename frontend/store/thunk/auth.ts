import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

export const fetchMe = createAsyncThunk(
  "auth/fetchMe",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/user/me");
      return res.data.user;
    } catch (err) {
      return rejectWithValue(null);
    }
  }
);