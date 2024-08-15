import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { NavigationContext } from '@/config/navigation/NavigationContext';
import { INavigationContext } from '@/config/navigation/types';

export const NavigationProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState<string>('');
  const navigationRef = useNavigationContainerRef();
  const defaultValue: INavigationContext = useMemo(() => {
    return { currentRoute };
  }, [currentRoute]);

  useEffect(() => {
    const handleNavigationState = () => {
      setCurrentRoute(navigationRef.current?.getCurrentRoute()?.name ?? '');
    };

    navigationRef?.current?.addListener('state', handleNavigationState);

    return () => {
      navigationRef?.current?.removeListener('state', handleNavigationState);
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <NavigationContext.Provider value={defaultValue}>{children}</NavigationContext.Provider>
    </NavigationContainer>
  );
};
