import { API_URL } from "@/config";
import storage from "@/utils/storage";
import { axiosProvider, Zodios } from "@zodios/axios";
import { endpoints } from "./schemas";

export const api = new Zodios(API_URL, endpoints);

axiosProvider.instance.interceptors.request.use(
  function (config: any) {
    const authInfo = storage.getAuthInfo();
    if (authInfo != null && authInfo.access_token) {
      config.headers["Authorization"] = `Bearer ${authInfo.access_token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
