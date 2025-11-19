export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface ItineraryItem {
  time: string;
  activity: string;
  description: string;
}

export interface TravelPlan {
  title: string;
  vibe: string;
  schedule: ItineraryItem[];
}
