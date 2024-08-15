import { getOrders } from '@/config/api';
import { useAppQuery } from '@/config/query';
import { IOrder, ORDER_API_KEY } from '@/types/order';

export const useOrders = () => {
  return useAppQuery<null, IOrder[]>({
    queryKey: [ORDER_API_KEY.list],
    queryFn: getOrders
  });
};
