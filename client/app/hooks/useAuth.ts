import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/config/store';
import { userSelector } from '@/config/store/selectors';
import { setUser } from '@/config/store/userSlice';
import { removeUserStorage, saveUserStorage } from '@/services/auth';
import { IUser } from '@/types/user';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  const saveUser = useCallback(
    async (user?: IUser | null) => {
      dispatch(setUser(user || null));

      if (user) await saveUserStorage(user);
      else await removeUserStorage();
    },
    [dispatch]
  );

  return { isAuth: !!user, user, setUser: saveUser };
};
