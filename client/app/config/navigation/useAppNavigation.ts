import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useContext } from 'react';

import { NavigationContext } from './NavigationContext';
import { TRoutes } from './types';

export const useAppNavigation = () => {
  const { currentRoute } = useContext(NavigationContext);
  const navigation = useNavigation<NavigationProp<TRoutes>>();

  return { ...navigation, currentRoute };
};
