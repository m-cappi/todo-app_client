import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  loginApi,
  reauthenticateApi,
  registerApi
} from "../../services/authApi";

const initialStateValue = { token: null, email: null, userId: null };

export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  const response = await loginApi(user);
  return response.data;
});

export const reauthenticate = createAsyncThunk(
  "auth/reauthenticate",
  async (token, thunkAPI) => {
    const response = await reauthenticateApi(token);
    return response.data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    const response = await registerApi(user);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: { value: initialStateValue, status: "idle" },
  reducers: {
    logout: (state) => {
      state.value = initialStateValue;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "authenticated";
        state.value = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "unauthorized";
      })
      .addCase(reauthenticate.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(reauthenticate.fulfilled, (state, action) => {
        state.status = "authenticated";
        state.value = action.payload;
      })
      .addCase(reauthenticate.rejected, (state, action) => {
        state.status = "invalid token";
      })
      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = "authenticated";
        state.value = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "unauthorized";
      });
  }
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;

export const selectToken = (state) => state.auth.value.token;
export const selectEmail = (state) => state.auth.value.email;
export const selectUserId = (state) => state.auth.value.userId;
export const selectAuthStatus = (state) => state.auth.status;
