export interface ItemProps {
  id: number;
  number: number;
  active: boolean;
}

export interface GenreProps {
  code: string;
  name: string;
}

export type ContentTypeProps = 'Movie' | 'Series';

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
