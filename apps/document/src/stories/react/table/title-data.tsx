import { ColumnDef } from '@tanstack/react-table';
import { expanderCol, selectCol, dndCol } from '@paintbox/react-table';

export interface Genre {
  code: string;
  name: string;
}

export interface EpisodeResponse {
  episode_id: number;
  episode_uuid: string;
  episode_name: string;
  episode_number: number;
  publish_timestamp: number;
  activate: boolean;
  deliver_rate: number;
  content_length: number;
  cp_code: string;
  licensor: string;
  file_size: number;
}

export interface SeasonResponse {
  activate: boolean;
  cp_code: string;
  deliver_rate: number;
  distribution: boolean;
  episode_count: number;
  episodes: EpisodeResponse[];
  file_size: number;
  license_end: number;
  license_start: number;
  licensor: string;
  publish_timestamp: number;
  season_id: number;
  season_name: string;
  season_number: number;
  season_uuid: string;
}

export interface TitleResponse {
  title_id: number;
  title_iid: string;
  title_name: string;
  genre: Genre;
  rating: string;
  release_year: number;
  region: string | null;
  content_type: string;
  episode_count: number;
  content_length: number;
  publish_timestamp: number;
  deliver_success_count: number | null;
  deliver_total_count: number | null;
  deliver_rate: number;
  approve_status: boolean;
  activate: boolean;
  cp_code: string;
  license_start: number;
  license_end: number;
  licensor: string;
  distribution: boolean;
  file_size: number;
  seasons: SeasonResponse[];
  vod: string;
  list_price: number | null;
  discount_price: number | null;
}

const basicColumns: ColumnDef<TitleResponse>[] = [
  {
    accessorKey: 'title_name',
    header: 'Title Name',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'genre',
    header: 'Genre',
    cell: (info) => info.getValue<Genre>().name,
  },
  {
    accessorKey: 'vod',
    header: 'VOD',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'content_type',
    header: 'Type',
    cell: (info) => info.getValue(),
  },
];

const svodColumns: ColumnDef<TitleResponse>[] = [
  {
    id: 'season',
    header: 'Seasons',
    cell: ({ row }) => <span>{row.original.seasons.length}</span>,
  },
  {
    accessorKey: 'episode_count',
    header: 'Episodes',
    cell: (info) => info.getValue(),
  },
];

const tvodColumns: ColumnDef<TitleResponse>[] = [
  {
    accessorKey: 'list_price',
    header: 'List Price',
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: 'discount_price',
    header: 'Discount Price',
    cell: (info) => info.getValue(),
  },
];

const licenseColumns: ColumnDef<TitleResponse>[] = [
  {
    accessorKey: 'license_end',
    header: 'Expiration',
    cell: (info) => info.getValue(),
  },
  {
    id: 'dpcp',
    header: 'DP / CP',
    cell: ({ row }) => (
      <span>{`${row.original.licensor}/${row.original.cp_code}`}</span>
    ),
  },
];

export const expandColumns: ColumnDef<TitleResponse>[] = [
  expanderCol as ColumnDef<TitleResponse>,
  ...basicColumns,
  {
    accessorKey: 'release_year',
    header: 'Year',
    cell: (info) => info.getValue(),
  },
  ...licenseColumns,
  ...svodColumns,
  ...tvodColumns,
];

export const allFeatColumns: ColumnDef<TitleResponse>[] = [
  selectCol as ColumnDef<TitleResponse>,
  expanderCol as ColumnDef<TitleResponse>,
  {
    accessorKey: 'title_id',
    header: 'Title ID',
    cell: (info) => info.getValue(),
  },
  ...basicColumns,
  ...svodColumns,
  {
    accessorKey: 'publish_timestamp',
    header: 'Publish',
    cell: (info) => info.getValue(),
  },
  ...licenseColumns,
  {
    id: 'mds',
    header: 'MDS',
    cell: ({ row }) => (
      <span>{`${row.original?.deliver_rate?.toFixed(2) ?? '0'} %`}</span>
    ),
  },
  {
    accessorKey: 'file_size',
    header: 'Size',
    cell: (info) => info.getValue(),
  },
  ...tvodColumns,
  {
    id: 'distribution',
    header: () => <div>Distribution</div>,
    cell: () => 'switch', // TODO
  },
  {
    id: 'programming',
    header: 'For Programming',
    cell: () => 'switch', // TODO
  },
  dndCol as ColumnDef<TitleResponse>,
];

export const titleData: TitleResponse[] = [
  {
    title_id: 601478,
    title_iid: '601478',
    title_name: 'Mars h264 movie test (profile 32/33)',
    genre: {
      code: 'documentary',
      name: 'Documentary',
    },
    rating: 'R13+',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 888,
    publish_timestamp: 1663322824012,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1653782400000,
    license_end: 1657324800000,
    licensor: 'PROD',
    distribution: true,
    file_size: 101812340,
    seasons: [],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 587653,
    title_iid: '587653',
    title_name: 'Mars Movie Test 0520',
    genre: {
      code: 'crime',
      name: 'Crime',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 31,
    publish_timestamp: 1663319283958,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1651363200000,
    license_end: 1654905600000,
    licensor: 'PROD',
    distribution: true,
    file_size: 2890176,
    seasons: [],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 620089,
    title_iid: '620089',
    title_name:
      'Codec renew queue test series 0815Codec renew queue test series 0815',
    genre: {
      code: 'action',
      name: 'Action',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Series',
    episode_count: 2,
    content_length: 0,
    publish_timestamp: 1660544618683,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1659225600000,
    license_end: 1672444800000,
    licensor: 'PROD',
    distribution: true,
    file_size: 104330099,
    seasons: [
      {
        season_id: 620091,
        season_uuid: '04339c06f72f2b50ee90d36115429e07',
        season_name:
          'Codec renew queue test series 0815 S01Codec renew queue test series 0815 S01',
        season_number: 1,
        episode_count: 2,
        publish_timestamp: 1660544618517,
        activate: true,
        license_start: 1659225600000,
        license_end: 1672444800000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 104330099,
        distribution: true,
        episodes: [
          {
            episode_id: 621877,
            episode_uuid: '0d1f424ee3170e554e7040a8fafff7a3',
            episode_name:
              'Codec renew queue test series 0815 S01E01Codec renew queue test series 0815 S01E01',
            episode_number: 1,
            publish_timestamp: 1660544618683,
            activate: true,
            deliver_rate: 0,
            content_length: 888,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 101538886,
          },
          {
            episode_id: 621878,
            episode_uuid: 'bd980790ebf0da622f4594516abf34b9',
            episode_name: 'Codec renew queue test series 0815 S01E02',
            episode_number: 2,
            publish_timestamp: 1660582667277,
            activate: true,
            deliver_rate: 0,
            content_length: 31,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 2791213,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 569166,
    title_iid: '569166',
    title_name: 'Marst Moive Test 0407',
    genre: {
      code: 'animation',
      name: 'Animation',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 31,
    publish_timestamp: 1659497553763,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'MIGOTV',
    license_start: 1649030400000,
    license_end: 2103408000000,
    licensor: 'MIGOTV',
    distribution: true,
    file_size: 2852643,
    seasons: [],
    vod: 'TVOD',
    list_price: 65000,
    discount_price: 9000,
  },
  {
    title_id: 574388,
    title_iid: '574388',
    title_name: 'Mars Test Movie 0415',
    genre: {
      code: 'music',
      name: 'Music',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 31,
    publish_timestamp: 1659497553754,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1648771200000,
    license_end: 1656547200000,
    licensor: 'PROD',
    distribution: true,
    file_size: 2914111,
    seasons: [],
    vod: 'TVOD',
    list_price: 9000,
    discount_price: null,
  },
  {
    title_id: 610497,
    title_iid: '610497',
    title_name: 'Herss - x',
    genre: {
      code: 'comedy',
      name: 'Comedy',
    },
    rating: 'SU',
    release_year: 2000,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 31,
    publish_timestamp: 1657596759602,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'IDLSG',
    license_start: 1661990400000,
    license_end: 1701302400000,
    licensor: 'IDLSG',
    distribution: true,
    file_size: 2239711,
    seasons: [],
    vod: 'SVOD',
    list_price: 25000,
    discount_price: 6000,
  },
  {
    title_id: 601511,
    title_iid: '601511',
    title_name: 'Belajar Bahasa Inggris Untuk (32/720)',
    genre: {
      code: 'educational',
      name: 'Educational',
    },
    rating: 'SU',
    release_year: 2017,
    region: null,
    content_type: 'Series',
    episode_count: 2,
    content_length: 0,
    publish_timestamp: 1654752288378,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1653782400000,
    license_end: 1670630400000,
    licensor: 'PROD',
    distribution: true,
    file_size: 20017666,
    seasons: [
      {
        season_id: 601819,
        season_uuid: 'b2284c6dc2613f3cf0c63305854712e1',
        season_name: 'S01',
        season_number: 1,
        episode_count: 2,
        publish_timestamp: 1654752288378,
        activate: true,
        license_start: 1653782400000,
        license_end: 1670630400000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 20017666,
        distribution: true,
        episodes: [
          {
            episode_id: 601513,
            episode_uuid: '8f6604a6301e6078f8d20bc7bfe517b3',
            episode_name: 'Belajar Bahasa Inggris Untuk (32/720) S1E1',
            episode_number: 1,
            publish_timestamp: 1654752288378,
            activate: true,
            deliver_rate: 0,
            content_length: 102,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 11142035,
          },
          {
            episode_id: 601514,
            episode_uuid: '638f8e85440757fcde34718fbb142e49',
            episode_name: 'Belajar Bahasa Inggris Untuk (32/720) S1E2',
            episode_number: 2,
            publish_timestamp: 1654752289038,
            activate: true,
            deliver_rate: 0,
            content_length: 85,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 8875631,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 601811,
    title_iid: '601811',
    title_name: 'Mars Codec Movie 0609 (profile 32/720)',
    genre: {
      code: 'crime',
      name: 'Crime',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 10,
    publish_timestamp: 1654740278141,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1653782400000,
    license_end: 1665187200000,
    licensor: 'PROD',
    distribution: true,
    file_size: 1091062,
    seasons: [],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 601798,
    title_iid: '601798',
    title_name: 'SeasonResponse publish format test 0608',
    genre: {
      code: 'horror',
      name: 'Horror',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Series',
    episode_count: 2,
    content_length: 0,
    publish_timestamp: 1654695299588,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1653782400000,
    license_end: 1657324800000,
    licensor: 'PROD',
    distribution: true,
    file_size: 7845168,
    seasons: [
      {
        season_id: 601800,
        season_uuid: '045af55bc55e4184928289044d81ac1c',
        season_name: '',
        season_number: 1,
        episode_count: 1,
        publish_timestamp: 1654695299588,
        activate: true,
        license_start: 1653782400000,
        license_end: 1657324800000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 2793640,
        distribution: true,
        episodes: [
          {
            episode_id: 601495,
            episode_uuid: '9bafc6aa05f90092c05b51fe9482c0aa',
            episode_name: 'EpisodeResponse 1',
            episode_number: 1,
            publish_timestamp: 1654695299588,
            activate: true,
            deliver_rate: 0,
            content_length: 31,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 2793640,
          },
        ],
      },
      {
        season_id: 601801,
        season_uuid: 'a91646b7cfd33d6548b3e51f543de5f9',
        season_name: '',
        season_number: 2,
        episode_count: 1,
        publish_timestamp: 1654695301450,
        activate: true,
        license_start: 1645920000000,
        license_end: 1665187200000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 5051528,
        distribution: true,
        episodes: [
          {
            episode_id: 601802,
            episode_uuid: 'd1ed9a6f94fcd0b6eb47d518bf0df696',
            episode_name: 'EpisodeResponse 1',
            episode_number: 1,
            publish_timestamp: 1654695301450,
            activate: true,
            deliver_rate: 0,
            content_length: 31,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 5051528,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 601791,
    title_iid: '601791',
    title_name: 'John Wick: Chapter 2',
    genre: {
      code: 'action',
      name: 'Action',
    },
    rating: 'D21+',
    release_year: 2017,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 7342,
    publish_timestamp: 1654695277597,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1643500800000,
    license_end: 1688774400000,
    licensor: 'PROD',
    distribution: true,
    file_size: 803958575,
    seasons: [],
    vod: 'TVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 601784,
    title_iid: '601784',
    title_name: 'Hybrid profile series test 0608',
    genre: {
      code: 'reality',
      name: 'Reality',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Series',
    episode_count: 1,
    content_length: 0,
    publish_timestamp: 1654652665076,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1654041600000,
    license_end: 1683331200000,
    licensor: 'PROD',
    distribution: true,
    file_size: 2096456,
    seasons: [
      {
        season_id: 601481,
        season_uuid: 'fd0b228765d04ade55d6dff6450242e0',
        season_name: 'S01',
        season_number: 1,
        episode_count: 2,
        publish_timestamp: 1654652665076,
        activate: true,
        license_start: 1654041600000,
        license_end: 1683331200000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 2096456,
        distribution: true,
        episodes: [
          {
            episode_id: 601482,
            episode_uuid: '7287ce1a79f53b903ad3449cabed5514',
            episode_name: 'S01E01 (Profile 32+33)',
            episode_number: 1,
            publish_timestamp: 1663319486920,
            activate: true,
            deliver_rate: 0,
            content_length: 10,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 1048228,
          },
          {
            episode_id: 601796,
            episode_uuid: 'ce8e78c684a1b4b0b74003dcccf38de3',
            episode_name: 'S01E02 (profile 32+720)',
            episode_number: 2,
            publish_timestamp: 1654655065922,
            activate: true,
            deliver_rate: 0,
            content_length: 10,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 1048228,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 598933,
    title_iid: '598933',
    title_name: 'Legenda Ular Kepala 7  (profile 32/720)',
    genre: {
      code: 'drama',
      name: 'Drama',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 608,
    publish_timestamp: 1653982356251,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'IDEDS',
    license_start: 1651363200000,
    license_end: 1990915200000,
    licensor: 'IDEDS',
    distribution: true,
    file_size: 70350828,
    seasons: [],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 587703,
    title_iid: '587703',
    title_name: 'Mars Codec Movie 0530 (profile 32/720)',
    genre: {
      code: 'animation',
      name: 'Animation',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Movie',
    episode_count: 1,
    content_length: 888,
    publish_timestamp: 1653894207851,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1651363200000,
    license_end: 1686355200000,
    licensor: 'PROD',
    distribution: true,
    file_size: 101786411,
    seasons: [],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 587914,
    title_iid: '587914',
    title_name: 'Mars Codec Series 0530 (profile 32/720)',
    genre: {
      code: 'documentary',
      name: 'Documentary',
    },
    rating: 'D17+',
    release_year: 2022,
    region: null,
    content_type: 'Series',
    episode_count: 2,
    content_length: 0,
    publish_timestamp: 1653892350919,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'PROD',
    license_start: 1651363200000,
    license_end: 1676073600000,
    licensor: 'PROD',
    distribution: true,
    file_size: 11861654,
    seasons: [
      {
        season_id: 587915,
        season_uuid: 'edf7231402f567454b3e492eb3ebd128',
        season_name: 'S01',
        season_number: 1,
        episode_count: 1,
        publish_timestamp: 1653892350919,
        activate: true,
        license_start: 1651363200000,
        license_end: 1676073600000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 9068014,
        distribution: true,
        episodes: [
          {
            episode_id: 587709,
            episode_uuid: 'b18920b85254accd69feb3f62c76c0b9',
            episode_name: 'E01',
            episode_number: 1,
            publish_timestamp: 1653892350919,
            activate: true,
            deliver_rate: 0,
            content_length: 83,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 9068014,
          },
        ],
      },
      {
        season_id: 587708,
        season_uuid: 'c583d332f5328c71c12d25794746df74',
        season_name: 'S02',
        season_number: 2,
        episode_count: 1,
        publish_timestamp: 1653892351987,
        activate: true,
        license_start: 1643500800000,
        license_end: 2015107200000,
        deliver_rate: 0,
        cp_code: 'PROD',
        licensor: 'PROD',
        file_size: 2793640,
        distribution: true,
        episodes: [
          {
            episode_id: 587916,
            episode_uuid: '314e74699b081c41e1178d887828315f',
            episode_name: 'E01',
            episode_number: 1,
            publish_timestamp: 1653892351987,
            activate: true,
            deliver_rate: 0,
            content_length: 31,
            cp_code: 'PROD',
            licensor: 'PROD',
            file_size: 2793640,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
  {
    title_id: 587866,
    title_iid: '587866',
    title_name: 'SEA Games: Sepak Bola (profile 32/720)',
    genre: {
      code: 'sci-fi',
      name: 'Sci-Fi',
    },
    rating: 'SU',
    release_year: 2022,
    region: null,
    content_type: 'Series',
    episode_count: 1,
    content_length: 0,
    publish_timestamp: 1653443103775,
    deliver_success_count: null,
    deliver_total_count: null,
    deliver_rate: 0,
    approve_status: true,
    activate: true,
    cp_code: 'IDMNC',
    license_start: 1651363200000,
    license_end: 1782777600000,
    licensor: 'IDMNV',
    distribution: true,
    file_size: 575258427,
    seasons: [
      {
        season_id: 587868,
        season_uuid: '54b04020c01dd16ffdc7af3855c6af98',
        season_name: 'S1',
        season_number: 1,
        episode_count: 1,
        publish_timestamp: 1653443103775,
        activate: true,
        license_start: 1651363200000,
        license_end: 1782777600000,
        deliver_rate: 0,
        cp_code: 'IDMNC',
        licensor: 'IDMNV',
        file_size: 575258427,
        distribution: true,
        episodes: [
          {
            episode_id: 587677,
            episode_uuid: '08fd3ae1680f31e4f081c0a25e28392b',
            episode_name: 'Penyisihan: Vietnam vs. Indonesia',
            episode_number: 1,
            publish_timestamp: 1653443103775,
            activate: true,
            deliver_rate: 0,
            content_length: 6400,
            cp_code: 'IDMNC',
            licensor: 'IDMNV',
            file_size: 575258427,
          },
        ],
      },
    ],
    vod: 'SVOD',
    list_price: null,
    discount_price: null,
  },
];
