import { updateBasketProduct } from '@/config/api';
import { queryClient, queryHandler, useAppMutation } from '@/config/query';
import { BASKET_API_KEY, IBasket, IBasketProduct, IUpdateBasketBody } from '@/types/basket';

export const useUpdateBasketProduct = () => {
  return useAppMutation<IBasketProduct, IUpdateBasketBody>({
    mutationFn: (body) => updateBasketProduct(body),
    onSuccess: async (data, body) => {
      const queryKey = [BASKET_API_KEY.list];
      const cachedData = queryClient.getQueryData<IBasket>(queryKey);
      const currentCachedData = {
        ...cachedData,
        products: cachedData?.products?.map((basketProduct) => {
          if (basketProduct.id !== body.basketProductId) return basketProduct;

          return {
            ...basketProduct,
            quantity: body.quantity
          };
        })
      };

      queryClient.setQueryData(queryKey, currentCachedData);
    },
    onError: queryHandler.onError
  });
};
