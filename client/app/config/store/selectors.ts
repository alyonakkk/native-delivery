import { TAppState } from './index';

export const userSelector = (state: TAppState) => state.user.data;
