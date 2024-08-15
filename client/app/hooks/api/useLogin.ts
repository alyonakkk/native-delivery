import { login } from '@/config/api';
import { queryHandler, useAppMutation } from '@/config/query';
import { useAuth } from '@/hooks/useAuth';
import { setTokens } from '@/services/auth';
import { IAuthBody, ILoggedInData } from '@/types/auth';

export const useLogin = () => {
  const { setUser } = useAuth();

  return useAppMutation<ILoggedInData, IAuthBody>({
    mutationFn: login,
    onSuccess: async (data) => {
      await setTokens(data.tokens);
      setUser(data.user);
    },
    onError: queryHandler.onError
  });
};
