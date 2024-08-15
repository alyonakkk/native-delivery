import { addProductToBasket } from '@/config/api';
import { queryClient, queryHandler, useAppMutation } from '@/config/query';
import { BASKET_API_KEY, IAddToBasketBody, IBasket, IBasketProduct } from '@/types/basket';

export const useAddToBasket = () => {
  return useAppMutation<IBasketProduct, IAddToBasketBody>({
    mutationFn: (body) => addProductToBasket(body),
    onSuccess: async (data) => {
      const queryKey = [BASKET_API_KEY.list];
      const cachedData = queryClient.getQueryData<IBasket>(queryKey);
      const currentCachedData = {
        ...cachedData,
        products: [...(cachedData.products ?? []), data]
      };

      queryClient.setQueryData(queryKey, currentCachedData);
    },
    onError: queryHandler.onError
  });
};
