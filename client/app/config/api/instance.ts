import axios from 'axios';

import { makeStore } from '@/config/store';
import { setUser } from '@/config/store/userSlice';
import { getAccessToken, getRefreshToken, logout, setTokens } from '@/services/auth';

export const BASE_URL = `${process.env.SERVER_HOST}/api`;

export const instance = axios.create({
  baseURL: BASE_URL
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;

    if (err.response) {
      if (err.response.status === 401 && originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        try {
          const refreshToken = await getRefreshToken();
          const { data } = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });

          await setTokens(data);

          return instance.request(originalRequest);
        } catch (e) {
          const store = makeStore();

          store.dispatch(setUser(null));
          await logout();

          return Promise.reject(e);
        }
      }

      return Promise.reject(err);
    }
  }
);
