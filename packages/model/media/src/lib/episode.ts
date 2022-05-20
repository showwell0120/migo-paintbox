import { Core, CoreProps } from './core';

export interface EpisodeProps extends CoreProps {
  id: number;
  number: number;
  active: boolean;
}

export class Episode extends Core implements EpisodeProps {
  constructor(props: EpisodeProps) {
    const { id, number, active, ...coreProps } = props;
    super(coreProps);
    Object.assign(this, { id, number, active });
  }

  public id = 0;
  public number = 0;
  public active = true;

  get displayNumber() {
    return this.number && this.number >= 0
      ? `EP${this.number}`
      : Core.undefinedMark;
  }

  static copy(instance: Episode) {
    return new Episode({
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
    });
  }

  setActive(active: boolean) {
    this.active = active;

    this.notify('active_change', { active: this.active, episodeID: this.id });
  }
}
