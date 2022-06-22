import {
  ItemProps,
  GenreProps,
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
  genre: GenreProps;
  seasons: Season[];
  vod: VODType;
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
  public genre: GenreProps = { name: '', code: '' };
  public type: ContentType = null;
  public status = true;
  public seasons: Season[] = [];
  public vod: VODType = null;

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
