import { API_URL } from "./../site-settings/config";
import axios from "axios";

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
  return config;
});

api.interceptors.response.use(
  (value) => {
    return value;
  },
  (error) => {
    return error;
  }
);

export { api };
