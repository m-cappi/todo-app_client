/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTaskApi, getTasksApi, updateTaskApi } from "../../services/taskApi";

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

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async ({ taskId, payload }, thunkAPI) => {
    const response = await updateTaskApi({ taskId, payload });
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
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.value
          .map((task) => task.taskId)
          .indexOf(action.payload.taskId);
        state.value[index] = action.payload;
      });
  }
});

export default tasksSlice.reducer;

export const selectTasks = (state) => state.tasks.value;
