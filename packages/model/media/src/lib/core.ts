import * as dayjs from 'dayjs';
import { EventCallbackParam, EventType, EventCallback } from '../declarations';

export interface CoreProps {
  distributed: boolean;
  size: number;
  name: string;
  licensor: string;
  cpCode: string;
  runtime: number;
  licenseStart: number;
  licenseEnd: number;
  publish: number;
  deliverRate: number;
}

const GB = 1024 * 1024;

export class Core implements CoreProps {
  constructor(props: CoreProps) {
    Object.assign(this, props);
  }

  public static undefinedMark = '<?>';

  // from data
  public distributed = true;
  public size = 0; // unit is KB
  public name = '';
  public licensor = '';
  public cpCode = '';
  public runtime = 0; // unit is second
  public licenseStart = 0;
  public licenseEnd = 0;
  public publish = 0;
  public deliverRate = 0;

  public eventMap: Map<EventType, Set<EventCallback>> = new Map();

  static getFormatTime(prop: number | string | Date) {
    return dayjs(prop).format('MMM. DD, YYYY');
  }

  static getDisplayNumber(number: number, prefix: string) {
    return number && number >= 0 ? `${prefix}${number}` : Core.undefinedMark;
  }

  get fPublish() {
    return Core.getFormatTime(this.publish);
  }

  get fLicenseStart() {
    return Core.getFormatTime(this.licenseStart);
  }

  get fLicenseEnd() {
    return Core.getFormatTime(this.licenseEnd);
  }

  get displayName() {
    return this.name ? this.name : Core.undefinedMark;
  }

  get dpcp() {
    return `${this.licensor ? this.licensor : Core.undefinedMark}/${
      this.cpCode ? this.cpCode : Core.undefinedMark
    }`;
  }

  get isExpired() {
    const now = new Date();
    return this.licenseEnd < now.getTime();
  }

  setDistributed(active: boolean) {
    this.distributed = active;
  }

  getSizeInGB(digits?: number, unit = 'GB') {
    const inGB = this.size / GB;
    if (!digits) {
      return `${inGB} ${unit}`;
    }
    return `${inGB.toFixed(digits)} ${unit}`;
  }

  // TODO: preciseness ?
  getRuntimeInMin(unit = 'min') {
    const value = Math.floor(this.runtime / 60);
    return `${value} ${value > 1 ? unit + 's' : unit}`;
  }

  getDiffTime(field: 'publish' | 'licenseStart' | 'licenseEnd', data: Core) {
    if (this[field] && data && data[field]) {
      return this[field] - data[field];
    }
    return 0;
  }

  on(event: EventType, callback: EventCallback) {
    if (!this.eventMap.has(event)) {
      this.eventMap.set(event, new Set());
    }
    this.eventMap.get(event)?.add(callback);
  }

  off(event: EventType, callback: EventCallback) {
    if (!this.eventMap.has(event)) {
      return;
    }

    const fnSet = this.eventMap.get(event);
    fnSet?.has(callback) && fnSet.delete(callback);
  }

  notify(event: EventType, prop: EventCallbackParam) {
    if (!this.eventMap.has(event)) {
      return;
    }

    const fns = this.eventMap.get(event);
    fns?.size && fns.forEach((fn) => fn && fn(prop));
  }
}
