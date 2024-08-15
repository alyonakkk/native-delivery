import { removeProductFromBasket } from '@/config/api';
import { queryClient, queryHandler, useAppMutation } from '@/config/query';
import { BASKET_API_KEY, IBasket } from '@/types/basket';

export const useRemoveBasketProduct = () => {
  return useAppMutation<null, number>({
    mutationFn: (basketProductId) => removeProductFromBasket(basketProductId),
    onSuccess: async (data, id) => {
      const queryKey = [BASKET_API_KEY.list];
      const cachedData = queryClient.getQueryData<IBasket>(queryKey);
      const currentProducts = cachedData?.products?.filter((basketProduct) => basketProduct.id !== id);

      queryClient.setQueryData(queryKey, { ...cachedData, products: currentProducts });
    },
    onError: queryHandler.onError
  });
};
