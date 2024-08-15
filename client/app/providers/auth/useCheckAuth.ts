import { useEffect } from 'react';

import { refresh } from '@/config/api';
import { useLogout } from '@/hooks/useLogout';
import { getAccessToken, getRefreshToken } from '@/services/auth';

export const useCheckAuth = (currentRoute?: string) => {
  const handleLogout = useLogout();

  useEffect(() => {
    const checkAccessToken = async () => {
      const accessToken = await getAccessToken();

      if (!accessToken) return;

      try {
        const refreshToken = await getRefreshToken();

        await refresh({ refreshToken });
      } catch (e) {
        if (e.response?.status === 401) await handleLogout();
      }
    };

    checkAccessToken();
  }, []);

  useEffect(() => {
    const checkRefreshToken = async () => {
      const refreshToken = await getRefreshToken();

      if (!refreshToken) await handleLogout();
    };

    checkRefreshToken();
  }, [currentRoute]);
};
