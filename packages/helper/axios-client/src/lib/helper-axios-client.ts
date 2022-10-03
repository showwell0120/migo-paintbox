/** Specify Error Cases in HTTP API responses.
 * @Reference Problem Details for HTTP APIs (RFC 7807)
 * @see https://www.rfc-editor.org/rfc/rfc7807
 * @example
 *  HTTP/1.1 403 Forbidden
    Content-Type: application/problem+json
    Content-Language: en

    {
        "type": "https://example.com/probs/out-of-credit",
        "title": "You do not have enough credit.",
        "detail": "Your current balance is 30, but that costs 50.",
        "instance": "/account/12345/msgs/abc",
        "status": 403
        "balance": 30,
        "accounts": ["/account/12345","/account/67890"],
        
    }
 */

/**
 * @see also https://stackoverflow.com/questions/12806386/is-there-any-standard-for-json-api-response-format
 */

import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

export interface SuccessJSONResponse<D = unknown> {
  data: D;
  status: number;
}

export interface ErrorJSONResponse extends Record<string, unknown> {
  status: number; // HTTP Status Code.
  type: string; // URI that identifies the problem detail type.
  title: string; // A short human-readable summary about the problem.
  detail: string; // A human-readable explanation about the problem.
  instance?: string; // A URI reference that identifies the specific occurrence of the problem.
}

export type EventResponse<D> = ErrorJSONResponse | SuccessJSONResponse;

export type EventType = {
  success: string;
  badRequest: string;
  needAuth: string;
  forbidden: string;
  notFound: string;
  conflict: string;
  fatalError: string;
  disconnect: string;
};
export interface ProgressData {
  loaded: number;
  total: number;
  percentCompleted?: string;
}

export interface AxiosClientProps<D> {
  config?: AxiosRequestConfig;
  events?: {
    [K in keyof EventType as `on${Capitalize<K>}`]?: (
      resp?: EventResponse<D>
    ) => void;
  };
  progressCallback?: (progressData: ProgressData) => void;
}

export const contentTypeMap = {
  json: 'application/json',
  problemJson: 'application/problem+json',
  formData: 'multipart/form-data',
};

const handleProgress = (
  progressEvent: ProgressData,
  callback?: (progressData: ProgressData) => void
) => {
  const percentCompleted = `${Math.round(
    (progressEvent.loaded / progressEvent.total) * 100
  )}%`;

  callback && callback({ ...progressEvent, percentCompleted });
};

export class AxiosClient<ResponseData = unknown, RequestData = unknown> {
  public axiosInstance;
  public events;

  constructor({
    config = {},
    progressCallback,
    events,
  }: AxiosClientProps<ResponseData>) {
    this.events = events;

    this.axiosInstance = axios.create({
      headers: {
        'Content-Type': contentTypeMap.json,
      },
      transformResponse: [this.transformResponse],
      timeout: 3000,
      ...(progressCallback && {
        onUploadProgress: (progressEvent) =>
          handleProgress(progressEvent, progressCallback),
        onDownloadProgress: (progressEvent) =>
          handleProgress(progressEvent, progressCallback),
      }),
      ...config,
    });

    this.axiosInstance.interceptors.request.use(
      this.requestOnFufilled.bind(this),
      this.requestOnRejected.bind(this)
    );

    this.axiosInstance.interceptors.response.use(
      this.responseOnFufilled.bind(this),
      this.responseOnRejected.bind(this)
    );
  }

  // For Cancel Request
  static getCanceller() {
    return new AbortController();
  }

  // Read Data
  get(url: string, config?: AxiosRequestConfig<RequestData>) {
    return this.axiosInstance.get(url, config);
  }

  // Add New Data
  post(
    url: string,
    data?: RequestData,
    config?: AxiosRequestConfig<RequestData>
  ) {
    return this.axiosInstance.post(url, data, config);
  }

  // Replace data
  put(
    url: string,
    data?: RequestData,
    config?: AxiosRequestConfig<RequestData>
  ) {
    return this.axiosInstance.put(url, data, config);
  }

  // Partial Update Data
  patch(
    url: string,
    data?: RequestData,
    config?: AxiosRequestConfig<RequestData>
  ) {
    return this.axiosInstance.patch(url, data, config);
  }

  // Remove data
  delete(url: string, config?: AxiosRequestConfig<RequestData>) {
    return this.axiosInstance.delete(url, config);
  }

  requestOnFufilled(config: AxiosRequestConfig) {
    if (!window.navigator.onLine) {
      this?.events?.onDisconnect && this.events.onDisconnect();
      return;
    }

    // Do something before request is sent
    return config;
  }

  requestOnRejected(error: AxiosError) {
    if (!window.navigator.onLine) {
      this?.events?.onDisconnect && this.events.onDisconnect();
      return;
    }

    // Do something with request error
    return Promise.reject(error);
  }

  responseOnFufilled(response: AxiosResponse<ResponseData, RequestData>) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    if (!window.navigator.onLine) {
      this?.events?.onDisconnect && this.events.onDisconnect();
      return;
    }

    const { status, data } = response;
    this.handleSuccessEvent(status, data);

    return response.data;
  }

  responseOnRejected(error: AxiosError<ErrorJSONResponse, RequestData>) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (!window.navigator.onLine) {
      this?.events?.onDisconnect && this.events.onDisconnect();
      return;
    }

    error.response?.data && this.handleErrorEvent(error.response?.data);

    return Promise.reject(error.response?.data);
  }

  transformResponse(data: ResponseData) {
    // Do whatever you want to transform the data
    return data;
  }

  handleErrorEvent(resp: ErrorJSONResponse) {
    const { status } = resp;

    switch (status) {
      case 400: {
        this?.events?.onBadRequest && this.events.onBadRequest(resp);
        break;
      }
      case 401: {
        this?.events?.onNeedAuth && this.events.onNeedAuth(resp);
        break;
      }
      case 403: {
        this?.events?.onForbidden && this.events.onForbidden(resp);
        break;
      }
      case 404:
      case 410: {
        this?.events?.onNotFound && this.events.onNotFound(resp);
        break;
      }
      case 409: {
        this?.events?.onConflict && this.events.onConflict(resp);
        break;
      }
      // 5XX
      default:
        status >= 500 &&
          this?.events?.onFatalError &&
          this.events.onFatalError(resp);
        break;
    }
  }

  handleSuccessEvent(status: number, data: ResponseData) {
    this?.events?.onSuccess && this.events.onSuccess({ status, data });
  }
}
