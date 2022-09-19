import { Episode, EpisodeProps } from '../lib/episode';
import { Core } from '../lib/core';
import { coreData } from './core.spec';

export const episodeData: EpisodeProps = {
  ...coreData,
  id: 0,
  number: 0,
  active: true,
};

describe('Episode', () => {
  it('Get displayNumber as EP<number>', () => {
    const instance = new Episode({ ...episodeData, number: 1 });
    expect(instance.displayNumber).toEqual('EP1');
  });
  it('Get displayName as S<number>', () => {
    const instance = new Episode({ ...episodeData, number: 1 });
    expect(instance.displayName).toEqual('EP1');
  });
  it('Get displayNumber as undefinedMark if number is not provided', () => {
    const instance = new Episode({ ...episodeData });
    expect(instance.displayNumber).toEqual(Core.undefinedMark);
  });
  it('Copied instance should be match the subset of original instance', () => {
    const instance1 = new Episode({ ...episodeData, id: 1234, name: 'test' });
    const instance2 = Episode.copy(instance1);
    expect(instance2).toMatchObject(instance1);
  });

  it('Should trigger notify method when call setActive method', () => {
    const instance = new Episode({ ...episodeData, id: 1234 });
    const fn = jest.fn();
    instance.on('active_change', fn);
    instance.setActive(false);
    expect(fn).toHaveBeenCalledWith({ active: false, episodeID: 1234 });
  });
});
