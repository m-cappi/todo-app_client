import apiService from "./server";

export const getTasksApi = async () => apiService.get("/tasks");

export const addTaskApi = async (task) => apiService.post("/tasks", task);
