/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTaskApi,
  deleteTaskApi,
  getTasksApi,
  updateTaskApi
} from "../../services/taskApi";

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

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    const res = await deleteTaskApi(taskId);
    // self assign taskId because server returns "" on success due to 204 status
    if (res.data === "") {
      res.data = taskId;
    }
    return res.data;
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: { value: initialStateValue, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getTasks.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getTasks.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(addTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.unshift(action.payload);
      })
      .addCase(addTask.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(updateTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.value
          .map((task) => task.taskId)
          .indexOf(action.payload.taskId);
        state.value[index] = action.payload;
      })
      .addCase(updateTask.rejected, (state, action) => {
        state.status = "error";
      })
      .addCase(deleteTask.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.status = "idle";
        const newState = state.value.filter(
          (task) => task.taskId !== action.payload
        );
        state.value = newState !== "" ? newState : initialStateValue;
      })
      .addCase(deleteTask.rejected, (state, action) => {
        state.status = "error";
      });
  }
});

export default tasksSlice.reducer;

export const selectTasks = (state) => state.tasks.value;
export const selectTaskStatus = (state) => state.tasks.status;
