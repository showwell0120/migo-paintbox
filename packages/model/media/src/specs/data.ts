import { TitleProps } from '../lib/title';
import { SeasonProps } from '../lib/season';
import { EpisodeProps } from '../lib/episode';

export const episodeObj: EpisodeProps = {
  id: 176969,
  number: 1,
  active: true,
  publish: 1602895958290,
  runtime: 4065,
  name: "",
  licensor: "KRKBS",
  cpCode: "KRKBS",
  distributed: true,
  size: 718101498,
  deliverRate: 0,
  licenseStart: 0,
  licenseEnd: 0,
};

export const seasonObj: SeasonProps = {
  id: 176968,
  name: '',
  number: 1,
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
  episodes: [],
  onMDS: 35,
};

export const titleObj: TitleProps = {
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
  seasons: [],
  vod: 'SVOD',
  region: {
    code: 'US',
    name: 'U.S.A.',
  },
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
  listPrice: null,
  discountPrice: null,
};