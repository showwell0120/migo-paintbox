export interface ItemProps {
  id: number;
  active: boolean;
  number?: number; // Title haven't this now
}

export interface GenreProps {
  code: string;
  name: string;
}

export type ContentType = 'Movie' | 'Series' | null;

export type VODType = 'SVOD' | 'TVOD' | null;
export interface RegionProps {
  code: string;
  name: string;
}

export interface EventCallbackParam {
  active: boolean;
  seasonID?: number;
  episodeID?: number;
}

export type EventType = 'active_change' | 'distributed_change';

export type EventCallback = (param: EventCallbackParam) => void;
