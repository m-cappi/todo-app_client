import axios from "axios";

const apiService = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL
});

export default apiService;
