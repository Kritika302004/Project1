import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // no hardcoded localhost:5000!
  withCredentials: true,
});

export default axiosInstance;
