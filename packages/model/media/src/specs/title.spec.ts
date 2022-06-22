import { Title } from '../lib/title';
import { Season } from '../lib/season';
import { Episode } from '../lib/episode';
import { episodeObj, seasonObj, titleObj } from './data';

const episode = new Episode(episodeObj);

const season = new Season({ ...seasonObj, episodes: [episode] });

const title = new Title({ ...titleObj, seasons: [season] });


describe('Title', () => {
  it('Get seasonCount as total seasons', () => {
    const seasonNum = title.seasonCount;
    expect(seasonNum).toEqual(1);
  });
  it('Get episodeCount as total episodes', () => {
    const episodeNum = title.episodeCount;
    expect(episodeNum).toEqual(1);
  });

  it('Copied instance should be match the subset of original instance', () => {
    const instance1 = title;
    const instance2 = Title.copy(instance1);
    
    expect(instance2).toMatchObject({
      id: 176966,
      name: 'Boys Over Flowers',
      active: true,
      distributed: true,
      size: 16973049551,
      publish: 1602895958290,
      runtime: 0,
      licensor: 'KRKBS',
      cpCode: 'KRKBS',
      licenseStart: 1583020800000,
      licenseEnd: 1646092800000,
      deliverRate: 0,
      displayID: '176966',
      rating: 'R13+',
      year: 2009,
      type: 'Series',
      status: true,
      genre: { code: 'romance', name: 'Romance' },
      vod: 'SVOD',
      region: { code: 'US', name: 'U.S.A.' },
      subtitles: [
        {
          code: 'EN',
          name: 'English',
        },
        {
          code: 'ID',
          name: 'Bahasa',
        },
      ],
      dubs: [
        {
          code: 'EN',
          name: 'English',
        },
        {
          code: 'ID',
          name: 'Bahasa',
        },
      ],
      rank: { code: 'high', name: 'High' },
      onMDS: 35,
      totalMDS: 40,
    });
  });

  it('Sync distributed state of all seasons when call setDistributed', () => {
    title.setDistributed(false);
    expect(title.distributed).toBeFalsy();
    title.seasons.forEach((season) => expect(season.distributed).toBeFalsy());
  });

  it('Sync sctive state of all seasons when call setActive', () => {
    title.setActive(false);
    expect(title.active).toBeFalsy();
    title.seasons.forEach((season) => expect(season.active).toBeFalsy());
  });
  // toggle on the distribution of the last season should also toggle on the title
  it('Trigger handleSeasonDistributedChange if season changed distributed state as true', () => {
    const s1 = new Season({ ...seasonObj, distributed: false, active: false });
    const s2 = new Season({ ...seasonObj, id: 123456, distributed: false, active: false });
    const t1 = new Title({ ...titleObj, distributed: false, active: false, seasons: [s1, s2] });
    const fn = jest.fn();
    s1.on('distributed_change', fn);
    s1.setDistributed(true);
    expect(t1.distributed).toBeTruthy();
    expect(fn).toHaveBeenCalledWith({ active: true, seasonID: s1.id });
  });

  it('Trigger handleSeasonDistributedChange if season changed distributed state as false', () => {
    const s1 = new Season({ ...seasonObj });
    const s2 = new Season({ ...seasonObj, id: 223344, distributed: false, active: false });
    const t1 = new Title({ ...titleObj, seasons: [s1, s2] });
    const fn = jest.fn();
    s1.on('distributed_change', fn);
    s1.setDistributed(false);
    expect(t1.distributed).toBeFalsy();
    expect(fn).toHaveBeenCalledWith({ active: false, seasonID: s1.id });
  });
  // activate the last season should also activate the title
  it('Trigger handleSeasonActiveChange if season changed active state as true', () => {
    const s1 = new Season({ ...seasonObj, active: false });
    const s2 = new Season({ ...seasonObj, id: 989900, active: false });
    const t1 = new Title({ ...titleObj, active: false, seasons: [s1, s2] });
    const fn = jest.fn();
    s1.on('active_change', fn);
    s1.setActive(true);
    expect(s1.active).toBeTruthy();
    expect(s2.active).toBeFalsy();
    expect(t1.active).toBeTruthy();
    expect(fn).toHaveBeenCalledWith({ active: true, seasonID: s1.id });
  });

  it('Trigger handleSeasonActiveChange if season changed active state as false', () => {
    const s1 = new Season({ ...seasonObj });
    const s2 = new Season({ ...seasonObj, id: 123124, active: false });
    const t1 = new Title({ ...titleObj, seasons: [s1, s2] });
    const fn = jest.fn();
    s1.on('active_change', fn);
    s1.setActive(false);
    expect(t1.active).toBeFalsy();
    t1.seasons.forEach((season) => expect(season.active).toBeFalsy());
    expect(fn).toHaveBeenCalledWith({ active: false, seasonID: s1.id });
  });
});
