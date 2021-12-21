/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTaskApi, getTasksApi } from "../../services/taskApi";

const initialStateValue = [];

export const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (data, thunkAPI) => {
    const response = await getTasksApi();
    return response.data;
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, thunkAPI) => {
    const response = await addTaskApi(task);
    return response.data;
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: initialStateValue },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.value.unshift(action.payload);
      });
  }
});

export default tasksSlice.reducer;

export const selectTasks = (state) => state.tasks.value;
