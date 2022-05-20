export interface ItemProps {
  id: number;
  number: number;
  active: boolean;
}

export interface EventCallbackParam {
  active: boolean;
  seasonID?: number;
  episodeID?: number;
}

export type EventType = 'active_change' | 'distributed_change';

export type EventCallback = (param: EventCallbackParam) => void;
