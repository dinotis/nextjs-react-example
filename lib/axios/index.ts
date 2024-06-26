import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Basic ${btoa(
      process.env.NEXT_PUBLIC_BASIC_AUTH_USERNAME +
        ":" +
        process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
    )}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error);
  }
);

export const setHeaderToken = (token: string) => {
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const removeHeaderToken = () => {
  delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;
