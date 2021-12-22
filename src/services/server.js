import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3002/"
});

export default apiService;
