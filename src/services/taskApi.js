import authHeader from "../utils/authHeaders";
import apiService from "./server";

export const getTasksApi = async () =>
  apiService.get("/tasks", { headers: authHeader() });

export const addTaskApi = async (task) =>
  apiService.post("/tasks", task, { headers: authHeader() });

export const updateTaskApi = async ({ taskId, payload }) =>
  apiService.put(`/tasks/${taskId}`, payload, { headers: authHeader() });

export const deleteTaskApi = async (taskId) =>
  apiService.delete(`/tasks/${taskId}`, { headers: authHeader() });
