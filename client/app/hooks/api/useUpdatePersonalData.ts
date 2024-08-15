import Toast from 'react-native-toast-message';

import { updatePersonalData } from '@/config/api';
import { queryHandler, useAppMutation } from '@/config/query';
import { useAuth } from '@/hooks/useAuth';
import { IUserBody } from '@/types/user';

export const useUpdatePersonalData = () => {
  const { user, setUser } = useAuth();

  return useAppMutation<null, IUserBody>({
    mutationFn: updatePersonalData,
    onSuccess: async (data, body) => {
      setUser({ ...user, name: body.name, email: body.email });

      Toast.show({ type: 'success', text1: 'Success', text2: 'Personal data was changed!' });
    },
    onError: queryHandler.onError
  });
};
