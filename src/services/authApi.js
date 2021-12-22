import { removeToken, setToken } from "../helpers/localToken";
import authHeader from "../utils/authHeaders";
import apiService from "./server";

export const loginApi = async (user) =>
  apiService.post("/auth/login", user).then((res) => {
    if (res.status === 200) {
      setToken(res.data.token);
    }
    return res;
  });

export const registerApi = async (user) =>
  apiService.post("/auth/register", user).then((res) => {
    if (res.status === 201) {
      setToken(res.data.token);
    }
    return res;
  });

export const reauthenticateApi = async () =>
  apiService.get("/auth/me", { headers: authHeader() }).catch((err) => {
    removeToken();
    // throw error, otherwise reducer doesn't get rejected and crashes without value
    throw new Error(err);
  });
