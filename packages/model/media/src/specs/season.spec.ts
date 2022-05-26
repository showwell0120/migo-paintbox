import { Season, SeasonProps } from '../lib/season';
import { Episode } from '../lib/episode';

import { coreData } from './core.spec';
import { episodeData } from './episode.spec';

const ep = new Episode(episodeData);

const seasonData: SeasonProps = {
  ...coreData,
  id: 0,
  number: 1,
  active: true,
  episodes: [ep],
  licenseStart: 0,
  licenseEnd: 0,
};

describe('Season', () => {
  it('Get displayNumber as S<number>', () => {
    const instance = new Season(seasonData);
    expect(instance.displayNumber).toEqual('S1');
  });
  it('Get episodeCount as total episodes', () => {
    const instance = new Season(seasonData);
    expect(instance.episodeCount).toEqual(1);
  });
  it('Get activeEpisodeCount as total active episodes', () => {
    const instance = new Season({
      ...seasonData,
      episodes: [
        new Episode(episodeData),
        new Episode(episodeData),
        new Episode({ ...episodeData, active: false }),
      ],
    });
    expect(instance.activeEpisodeCount).toEqual(2);
  });
  it('Copied instance should be match the subset of original instance', () => {
    const instance1 = new Season({ ...seasonData, id: 1234, name: 'test' });
    const instance2 = Season.copy(instance1);
    expect(instance2).toMatchObject({
      number: 1,
      active: true,
      id: 1234,
      name: 'test',
      distributed: true,
      size: 0,
      licensor: '',
      cpCode: '',
      runtime: 0,
      licenseStart: 0,
      licenseEnd: 0,
      publish: 0,
      deliverRate: 0,
    });
  });
  it('Should trigger notify method when call setDistributed', () => {
    const instance = new Season({ ...seasonData, id: 1234 });
    const fn = jest.fn();
    instance.on('distributed_change', fn);
    instance.setDistributed(false);
    expect(instance.episodes[0].distributed).toBeFalsy();
    expect(fn).toHaveBeenCalledWith({ active: false, seasonID: 1234 });
  });
  it('Trigger handleEpisodeActiveChange if episode changed active state as true', () => {
    const ep1 = new Episode(episodeData);
    const ep2 = new Episode({ ...episodeData, active: false });
    const instance = new Season({
      ...seasonData,
      id: 1234,
      episodes: [ep1, ep2],
    });
    const fn = jest.fn();
    instance.on('active_change', fn);
    ep2.setActive(true);
    expect(fn).toHaveBeenCalledWith({ active: true, seasonID: 1234 });
  });

  it('Trigger handleEpisodeActiveChange if episode changed active state as fasle', () => {
    const ep1 = new Episode(episodeData);
    const ep2 = new Episode({ ...episodeData, active: false });
    const instance = new Season({
      ...seasonData,
      id: 1234,
      episodes: [ep1, ep2],
    });
    const fn = jest.fn();
    instance.on('active_change', fn);
    ep1.setActive(false);
    expect(instance.active).toBeFalsy();
    expect(fn).toHaveBeenCalledWith({ active: false, seasonID: 1234 });
  });
});
