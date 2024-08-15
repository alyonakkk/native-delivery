import * as SplashScreen from 'expo-splash-screen';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { useAuth } from '@/hooks/useAuth';
import { getAccessToken, getUserStorage } from '@/services/auth';

import { useCheckAuth } from './useCheckAuth';

const ignore = SplashScreen.preventAutoHideAsync();

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigation = useAppNavigation();
  const { setUser } = useAuth();

  useCheckAuth(navigation.currentRoute);

  useEffect(() => {
    let mounted = true;

    const checkAccessToken = async () => {
      try {
        const accessToken = await getAccessToken();
        if (!accessToken) return;

        const user = await getUserStorage();
        if (mounted) await setUser(user);
      } catch (e) {
        console.log(e);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    const ignore = checkAccessToken();

    return () => {
      mounted = false;
    };
  }, []);

  return <>{children}</>;
};
