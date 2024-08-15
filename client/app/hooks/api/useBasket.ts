import { getBasket } from '@/config/api';
import { useAppQuery } from '@/config/query';
import { BASKET_API_KEY, IBasket } from '@/types/basket';

export const useBasket = () => {
  return useAppQuery<null, IBasket>({
    queryKey: [BASKET_API_KEY.list],
    queryFn: getBasket
  });
};
