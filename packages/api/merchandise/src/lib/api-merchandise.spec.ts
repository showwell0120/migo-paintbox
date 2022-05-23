import { apiMerchandise } from './api-merchandise';

describe('apiMerchandise', () => {
  it('should work', () => {
    expect(apiMerchandise()).toEqual('api-merchandise');
  });
});
