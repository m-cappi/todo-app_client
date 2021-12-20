import axios from "axios";
import { getToken } from "../helpers/localToken";

const token = getToken()

const apiService = axios.create({
  baseURL: "http://localhost:3002/"
});

if (token) {
  apiService.defaults.headers.common.authorization = token;
}

export default apiService;
