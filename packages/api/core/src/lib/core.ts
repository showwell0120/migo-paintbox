// TODO:
// Intercept request and response
// Transform request and response data
// Cancel requests
// Automatic transforms for JSON data

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

interface CoreAPIProps {
  baseURL: string;
  config?: AxiosRequestConfig;
}

export class CoreAPI {
  constructor({ baseURL, config = {} }: CoreAPIProps) {
    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
      transformResponse: [CoreAPI.transformResponse],
      timeout: 3000,
      signal: undefined, // for cancel request
      baseURL,
      ...config,
    });

    this.axiosInstance.interceptors.request.use(
      CoreAPI.requestOnFufilled,
      CoreAPI.requestOnRejected
    );

    this.axiosInstance.interceptors.response.use(
      CoreAPI.responseOnFufilled,
      CoreAPI.responseOnRejected
    );
  }

  public axiosInstance;

  static getCanceller() {
    return new AbortController();
  }

  static requestOnFufilled(config: AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  }

  static requestOnRejected(error: AxiosError) {
    // Do something with request error
    return Promise.reject(error);
  }

  static responseOnFufilled(response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }

  static responseOnRejected(error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }

  static transformResponse(data: unknown) {
    // Do whatever you want to transform the data
    return data;
  }
}
