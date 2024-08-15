import { createOrder } from '@/config/api';
import { queryHandler, useAppMutation } from '@/config/query';
import { IOrderBody, IOrderPayment } from '@/types/order';

export const useCreateOrder = () => {
  return useAppMutation<IOrderPayment, IOrderBody>({
    mutationFn: createOrder,
    onError: queryHandler.onError
  });
};
