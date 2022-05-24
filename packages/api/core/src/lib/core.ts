import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

interface HandlerParam {
  statusCode: number;
  responseData: ResponseDataProps;
}

interface CoreAPIProps {
  baseURL: string;
  config?: AxiosRequestConfig;
  handlers?: {
    onBadRequest?: (param: HandlerParam) => void; // 400
    onNeedAuth?: (param: HandlerParam) => void; // 401
    onForbidden?: (param: HandlerParam) => void; // 403
    onNotFound?: (param: HandlerParam) => void; // 404 & 410
    onConflict?: (param: HandlerParam) => void; // 409
    onFatalError?: (param: HandlerParam) => void; // 5xx
    onDisconnect?: () => void; // no network
  };
}

interface ResponseDataProps {
  code?: number;
  message?: string;
  data?: unknown;
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

  handleStatusHandler(statusCode: number, param: HandlerParam) {
    switch (statusCode) {
      case 400: {
        this?.handlers?.onBadRequest && this.handlers.onBadRequest(param);
        break;
      }
      case 401: {
        this?.handlers?.onNeedAuth && this.handlers.onNeedAuth(param);
        break;
      }
      case 403: {
        this?.handlers?.onForbidden && this.handlers.onForbidden(param);
        break;
      }
      case 404:
      case 410: {
        this?.handlers?.onNotFound && this.handlers.onNotFound(param);
        break;
      }
      case 409: {
        this?.handlers?.onConflict && this.handlers.onConflict(param);
        break;
      }
      default:
        this?.handlers?.onFatalError && this.handlers.onFatalError(param);
        break;
    }
  }

  responseOnFufilled(response: AxiosResponse<ResponseDataProps>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    const statusCode = response?.data?.code ?? 500;
    const param: HandlerParam = {
      statusCode,
      responseData: response?.data ?? {},
    };

    this.handleStatusHandler(statusCode, param);

    // default behavior
    return response.data;
  }

  responseOnRejected(error: AxiosError<ResponseDataProps>) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (!window.navigator.onLine) {
      this?.handlers?.onDisconnect && this.handlers.onDisconnect();
      return;
    }

    const statusCode = error.response?.status ?? 500;
    const param: HandlerParam = {
      statusCode,
      responseData: error.response?.data ?? {},
    };

    this.handleStatusHandler(statusCode, param);

    // default behavior
    return Promise.reject(error);
  }

  transformResponse(data: ResponseDataProps) {
    // Do whatever you want to transform the data
    return data;
  }
}
