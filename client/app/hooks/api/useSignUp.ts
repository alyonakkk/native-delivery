import Toast from 'react-native-toast-message';

import { signup } from '@/config/api';
import { queryHandler, useAppMutation } from '@/config/query';
import { IAuthBody } from '@/types/auth';

export const useSignUp = () => {
  return useAppMutation<null, IAuthBody>({
    mutationFn: signup,
    onSuccess: () => {
      Toast.show({ type: 'success', text1: 'Registration was successful', text2: 'Please, log in now!' });
    },
    onError: queryHandler.onError
  });
};
