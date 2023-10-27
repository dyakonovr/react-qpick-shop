import axios from "axios";

const customAxios = axios.create({
  baseURL: "http://localhost:5000/api"
});

customAxios.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token") || "";
  return config;
});

export default customAxios;