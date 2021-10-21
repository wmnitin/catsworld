import axios, { AxiosRequestConfig } from "axios";
import { API_KEY } from "../config/config";

axios.interceptors.request.use(
  (config) => {
    document.body.classList.add("spinner");
    const commonHeaders: any = config.headers?.common;
    if (commonHeaders) {
      commonHeaders["x-api-key"] = API_KEY;
    }
    return config as AxiosRequestConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    document.body.classList.remove("spinner");
    return response;
  },
  (error) => {
    document.body.classList.remove("spinner");
    return Promise.reject(error);
  }
);

export { axios };
