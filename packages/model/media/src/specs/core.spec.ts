import { Core, CoreProps } from '../lib/core';
import { EventCallbackParam } from '../declarations';

export const coreData: CoreProps = {
  distributed: true,
  size: 0,
  name: '',
  licensor: '',
  cpCode: '',
  runtime: 0,
  licenseStart: 0,
  licenseEnd: 0,
  publish: 0,
  deliverRate: 0,
};

describe('Core', () => {
  it('Get displayName as same as name', () => {
    const instance = new Core({ ...coreData, name: 'Titanic' });
    expect(instance.displayName).toEqual('Titanic');
  });
  it('Get displayName as <undefinedMark> if name is not provided', () => {
    const instance = new Core({ ...coreData });
    expect(instance.displayName).toEqual(Core.undefinedMark);
  });
  it('Get dpcp as licensor/cpCode', () => {
    const instance = new Core({
      ...coreData,
      licensor: 'IDGEN',
      cpCode: 'IDGEN',
    });
    expect(instance.dpcp).toEqual('IDGEN/IDGEN');
  });
  it('Get dpcp as <undefinedMark>/<undefinedMark> if both fields are not provided', () => {
    const instance = new Core({ ...coreData });
    expect(instance.dpcp).toEqual(
      `${Core.undefinedMark}/${Core.undefinedMark}`
    );
  });
  it('Set distributed property when call setDistributed()', () => {
    const instance = new Core({ ...coreData, distributed: false });
    instance.setDistributed(true);
    expect(instance.distributed).toBeTruthy();
  });
  it('Get 88.10 GB where digits is 2 and size is 92378943', () => {
    const instance = new Core({ ...coreData, size: 92378943 });
    expect(instance.getSizeInGB(2)).toEqual('88.10 GB');
  });

  it('Get 1247 mins where runtime is 74832', () => {
    const instance = new Core({ ...coreData, runtime: 74832 });
    expect(instance.getRuntimeInMin()).toEqual('1247 mins');
  });

  it('Get 1 min where runtime is 119', () => {
    const instance = new Core({ ...coreData, runtime: 119 });
    expect(instance.getRuntimeInMin()).toEqual('1 min');
  });

  it('Get Apr. 05, 2021 where publish is 1617597531231', () => {
    const instance = new Core({ ...coreData, publish: 1617597531231 });
    expect(instance.fPublish).toEqual('Apr. 05, 2021');
  });

  it('Get correct diff time between instances', () => {
    const instance1 = new Core({ ...coreData, publish: 1617597531231 });
    const instance2 = new Core({ ...coreData, publish: 1617590531231 });
    expect(instance1.getDiffTime('publish', instance2)).toEqual(7000000);
  });

  it('Should work with on method', () => {
    const instance = new Core({ ...coreData });
    instance.on('active_change', (param) => console.log(param.active));
    expect(instance.eventMap.get('active_change')?.size === 1);
  });

  it('Should work with off method', () => {
    const instance = new Core({ ...coreData });
    const fn = (param: EventCallbackParam) => console.log(param.active);
    instance.on('active_change', fn);
    instance.off('active_change', fn);
    expect(instance.eventMap.get('active_change')?.size === 0);
  });
  it('Should work with notify method', () => {
    const instance = new Core({ ...coreData });
    const fn = jest.fn();
    instance.on('active_change', fn);
    instance.notify('active_change', { active: true });
    expect(fn).toHaveBeenCalledWith({ active: true });
  });
});
