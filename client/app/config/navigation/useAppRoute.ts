import { RouteProp, useRoute } from '@react-navigation/native';

import { TRoutes } from './types';

export const useAppRoute = <T extends keyof TRoutes>() => useRoute<RouteProp<TRoutes, T>>();
