import { resetBasket } from '@/config/api';
import { queryClient, useAppMutation } from '@/config/query';
import { BASKET_API_KEY, IBasket } from '@/types/basket';

export const useResetBasket = () => {
  return useAppMutation<null, number>({
    mutationFn: resetBasket,
    onSuccess: (data, id) => {
      const queryKey = [BASKET_API_KEY.list];
      const cachedData = queryClient.getQueryData<IBasket>(queryKey);
      const currentCachedData = {
        ...cachedData,
        products: []
      };

      queryClient.setQueryData(queryKey, currentCachedData);
    }
  });
};
