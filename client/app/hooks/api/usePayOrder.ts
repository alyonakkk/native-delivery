import { payOrder } from '@/config/api';
import { queryHandler, useAppMutation } from '@/config/query';

export const usePayOrder = () => {
  return useAppMutation<null, number>({
    mutationFn: payOrder,
    onError: queryHandler.onError
  });
};
