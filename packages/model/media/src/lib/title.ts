import {
  ItemProps,
  KeyPair,
  ContentType,
  EventCallbackParam,
  VODType,
} from '../declarations';
import { Core, CoreProps } from './core';
import { Season } from './season';
export interface TitleProps extends ItemProps, CoreProps {
  displayID: string;
  rating: string;
  year: number;
  type: ContentType;
  status: boolean;
  genre: KeyPair;
  seasons: Season[];
  vod: VODType;
  region: KeyPair;
  subtitles: KeyPair[];
  dubs: KeyPair[];
  rank: KeyPair;
  onMDS: number;
  totalMDS: number;
  listPrice: number | null;
  discountPrice: number | null;
}

export class Title extends Core implements TitleProps {
  constructor(props: TitleProps) {
    const {
      id,
      active,
      displayID,
      genre,
      rating,
      year,
      type,
      status,
      seasons,
      vod,
      region,
      subtitles,
      dubs,
      rank,
      onMDS,
      totalMDS,
      listPrice,
      discountPrice,
      ...coreProps
    } = props;
    super(coreProps);
    Object.assign(this, {
      id,
      active,
      displayID,
      genre,
      rating,
      year,
      type,
      status,
      seasons,
      vod,
      region,
      subtitles,
      dubs,
      rank,
      onMDS,
      totalMDS,
      listPrice,
      discountPrice,
    });

    this.seasons.forEach((season) => {
      season.on?.('active_change', this.handleSeasonActiveChange.bind(this));
    });

    this.seasons.forEach((season) => {
      season.on?.(
        'distributed_change',
        this.handleSeasonDistributedChange.bind(this)
      );
    });
  }

  public id = 0;
  public active = true;
  public displayID = '';
  public rating = 'SU';
  public year = 0;
  public genre: KeyPair = { name: '', code: '' };
  public type: ContentType = null;
  public status = true;
  public seasons: Season[] = [];
  public vod: VODType = null;
  public region: KeyPair = { name: '', code: '' };
  public subtitles: KeyPair[] = [];
  public dubs: KeyPair[] = [];
  public rank: KeyPair = { name: '', code: '' };
  public onMDS = 0;
  public totalMDS = 0;
  public listPrice = null;
  public discountPrice = null;

  get seasonCount() {
    return this.seasons.length;
  }

  get episodeCount() {
    let count = 0;
    this.seasons.forEach((season) => {
      season.episodes.forEach(() => {
        count += 1;
      });
    });

    return count;
  }

  get activeSeasonCount() {
    const activeCount = this.seasons.reduce((accu, season) => {
      if (season.active) {
        return accu + 1;
      }
      return accu;
    }, 0);

    return activeCount;
  }

  static copy(instance: Title) {
    const copiedSeasons = instance.seasons.map((s) => Season.copy(s));

    return new Title({
      id: instance.id,
      active: instance.active,
      displayID: instance.displayID,
      genre: instance.genre,
      rating: instance.rating,
      year: instance.year,
      type: instance.type,
      status: instance.status,
      seasons: copiedSeasons,
      deliverRate: instance.deliverRate,
      publish: instance.publish,
      cpCode: instance.cpCode,
      licensor: instance.licensor,
      licenseStart: instance.licenseStart,
      licenseEnd: instance.licenseEnd,
      distributed: instance.distributed,
      size: instance.size,
      runtime: instance.runtime,
      name: instance.name,
      vod: instance.vod,
      region: instance.region,
      subtitles: instance.subtitles,
      dubs: instance.dubs,
      rank: instance.rank,
      onMDS: instance.onMDS,
      totalMDS: instance.totalMDS,
      listPrice: instance.listPrice,
      discountPrice: instance.discountPrice,
    });
  }

  override setDistributed(active: boolean) {
    this.distributed = active;
    if (this.type === 'Movie') {
      return;
    }

    this.seasons.forEach((season) => {
      season.setDistributed(active);
    });
  }

  setActive(active: boolean) {
    this.active = active;

    this.seasons.forEach((s) => {
      if (s.distributed || (!s.distributed && !active)) {
        s.setActive(active);
      }
    });
  }

  handleSeasonDistributedChange({ active }: EventCallbackParam) {
    if (active) {
      this.distributed = active;
    } else {
      const allSeasonsUndistributed = !this.seasons.some(
        (season) => season.distributed
      );

      if (allSeasonsUndistributed) {
        this.distributed = false;
      }
    }
  }

  handleSeasonActiveChange({ active }: EventCallbackParam) {
    if (active) {
      this.active = active;
    } else {
      // if all seasons are inactive, set the title to inactive
      const allSeasonsInactive = !this.seasons.some((season) => season.active);

      if (allSeasonsInactive) {
        this.active = false;
      }
    }
  }
}
