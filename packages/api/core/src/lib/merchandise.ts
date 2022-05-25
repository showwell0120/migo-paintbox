// for test
import { CoreAPI } from './core';

const baseConfig = {
  handlers: {
    onNeedAuth: () => alert('need auth'),
  },
};

export async function getTitles(keyword: string, canceller: AbortController) {
  const core = new CoreAPI(baseConfig);

  const url = `/api/v1/titles`;

  const result = await core.axiosInstance.get(url, {
    signal: canceller.signal,
    params: { keyword },
  });

  return result;
}

export async function getTitleUsage(
  titleID: string,
  canceller: AbortController
) {
  const core = new CoreAPI(baseConfig);

  const url = `/api/v1/titles/${titleID}/usage`;

  const result = await core.axiosInstance.get(url, {
    signal: canceller.signal,
  });

  return result;
}
