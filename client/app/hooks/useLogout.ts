import { useCallback } from 'react';

import { logout } from '@/services/auth';

import { useAuth } from './useAuth';

export const useLogout = () => {
  const { setUser } = useAuth();

  return useCallback(async () => {
    await logout();
    await setUser(null);
  }, []);
};
