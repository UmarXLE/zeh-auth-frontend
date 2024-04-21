import axios from "axios";
// import { changetoken } from "./EndSession";
export const Base_URL = "http://localhost:5002/"; 

export const ImageUploadingFetch = axios.create({
  baseURL: Base_URL + "",
});
export const ImageUploadingChatFetch = axios.create({
  baseURL: Base_URL + "",
});

const axiosInstance = axios.create({
  baseURL: Base_URL + "",
});

axiosInstance.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401 && localStorage.getItem("token")) {
      // changetoken();
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "application/json",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

ImageUploadingFetch.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401) {
      // endSession();
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

ImageUploadingFetch.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

ImageUploadingChatFetch.interceptors.response.use(
  (response) => response,
  ({ response }) => {
    if (response?.status === 401) {
      // endSession();
    }
    return Promise.reject(
      (response && response.data) || "При запросе произошла ошибка"
    );
  }
);

ImageUploadingChatFetch.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    return {
      ...config,
      headers: {
        ...config.headers,
        "Content-Type": "multipart/form-data",
        ...(!accessToken ? {} : { Authorization: `Bearer ${accessToken}` }),
      },
    };
  },
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);
export default axiosInstance;