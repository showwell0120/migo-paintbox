import { ItemProps, EventCallbackParam } from '../declarations';
import { Core, CoreProps } from './core';
import { Episode } from './episode';

export interface SeasonProps extends CoreProps, ItemProps {
  episodes: Episode[];
  onMDS: number;
}

export class Season extends Core implements SeasonProps {
  constructor(props: SeasonProps) {
    const { id, number, active, episodes, onMDS, ...coreProps } = props;
    super(coreProps);
    Object.assign(this, { id, number, active, episodes, onMDS });

    // listen episode active chagned event
    this.episodes.forEach((episode) => {
      episode.on('active_change', this.handleEpisodeActiveChange.bind(this));
    });
  }

  public id = 0;
  public number = 0;
  public active = true;
  public episodes: Episode[] = [];
  public onMDS = 0;

  get displayNumber() {
    return Core.getDisplayNumber(this.number, 'S');
  }

  get episodeCount() {
    return this.episodes.length;
  }

  get activeEpisodeCount() {
    const activeCount = this.episodes.reduce((accu, episode) => {
      if (episode.active) {
        return accu + 1;
      }
      return accu;
    }, 0);

    return activeCount;
  }

  static copy(instance: Season) {
    const copiedEpisodes = instance.episodes.map((e) => Episode.copy(e));

    return new Season({
      id: instance.id,
      number: instance.number,
      active: instance.active,
      deliverRate: instance.deliverRate,
      distributed: instance.distributed,
      size: instance.size,
      name: instance.name,
      licensor: instance.licensor,
      cpCode: instance.cpCode,
      runtime: instance.runtime,
      licenseStart: instance.licenseStart,
      licenseEnd: instance.licenseEnd,
      publish: instance.publish,
      episodes: copiedEpisodes,
      onMDS: instance.onMDS,
    });
  }

  override setDistributed(active: boolean) {
    if (this.distributed !== active) {
      this.distributed = active;

      this.episodes.forEach((episode) => episode.setDistributed(active));

      this.notify('distributed_change', {
        seasonID: this.id,
        active: this.distributed,
      });
    }
  }

  setActive(active: boolean) {
    this.active = active;

    this.episodes.forEach((e) => {
      e.setActive(active);
    });

    this.notify('active_change', { seasonID: this.id, active: this.active });
  }

  handleEpisodeActiveChange({ active }: EventCallbackParam) {
    if (active) {
      // if episode is activated, set active to toCarousel
      this.active = active;
      this.notify('active_change', {
        seasonID: this.id,
        active: this.active,
      });
    } else {
      // episode is deactiviated, check if all episodes are inactive
      const allEpisodeInactive = !this.episodes.some(
        (episode) => episode.active
      );

      if (allEpisodeInactive) {
        this.active = false;
        this.notify('active_change', { seasonID: this.id, active: false });
      }
    }
  }
}
