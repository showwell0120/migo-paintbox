import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

interface CoreAPIProps {
  baseURL: string;
  config?: AxiosRequestConfig;
  handlers?: {
    onBadRequest?: (param: unknown) => void; // 400
    onNeedAuth?: (param: unknown) => void; // 401
    onForbidden?: (param: unknown) => void; // 403
    onNotFound?: (param: unknown) => void; // 404 & 410
    onConflict?: (param: unknown) => void; // 409
    onFatalError?: (param: unknown) => void; // 5xx
    onDisconnect?: () => void; // no network
  };
}

export class CoreAPI {
  constructor({ baseURL, config = {}, handlers }: CoreAPIProps) {
    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
      transformResponse: [this.transformResponse],
      timeout: 3000,
      signal: undefined, // for cancel request
      baseURL,
      ...config,
    });

    this.axiosInstance.interceptors.request.use(
      this.requestOnFufilled,
      this.requestOnRejected
    );

    this.axiosInstance.interceptors.response.use(
      this.responseOnFufilled,
      this.responseOnRejected
    );

    this.handlers = handlers;
  }

  public axiosInstance;
  public handlers;

  static getCanceller() {
    return new AbortController();
  }

  requestOnFufilled(config: AxiosRequestConfig) {
    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    // Do something before request is sent
    return config;
  }

  requestOnRejected(error: AxiosError) {
    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    // Do something with request error
    return Promise.reject(error);
  }

  responseOnFufilled(response: AxiosResponse) {
    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }

  responseOnRejected(error: AxiosError) {
    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const statusCode = error.response?.status ?? 500;
    const param = { statusCode, responseData: error.response?.data ?? {} };

    let callHandler = false;

    switch (statusCode) {
      case 400: {
        this?.handlers?.onBadRequest &&
          (callHandler = true) &&
          this.handlers.onBadRequest(param);
        break;
      }
      case 401: {
        this?.handlers?.onNeedAuth &&
          (callHandler = true) &&
          this.handlers.onNeedAuth(param);
        break;
      }
      case 403: {
        this?.handlers?.onForbidden &&
          (callHandler = true) &&
          this.handlers.onForbidden(param);
        break;
      }
      case 404:
      case 410: {
        this?.handlers?.onNotFound &&
          (callHandler = true) &&
          this.handlers.onNotFound(param);
        break;
      }
      case 409: {
        this?.handlers?.onConflict &&
          (callHandler = true) &&
          this.handlers.onConflict(param);
        break;
      }
      default:
        this?.handlers?.onFatalError &&
          (callHandler = true) &&
          this.handlers.onFatalError(param);
        break;
    }

    if (callHandler) {
      return;
    } else {
      // default behavior
      return Promise.reject(error);
    }
  }

  transformResponse(data: unknown) {
    // Do whatever you want to transform the data
    return data;
  }
}
