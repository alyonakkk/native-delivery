import { addFavoriteProduct } from '@/config/api';
import { queryClient, queryHandler, useAppMutation } from '@/config/query';
import { FAVORITE_API_KEY, IFavoriteProduct } from '@/types/favorite';

export const useAddFavoriteProduct = () => {
  return useAppMutation<IFavoriteProduct, number>({
    mutationFn: (productId) => addFavoriteProduct(productId),
    onSuccess: async (data) => {
      const queryKey = [FAVORITE_API_KEY.list];
      const cachedData = queryClient.getQueryData<IFavoriteProduct[]>(queryKey);

      queryClient.setQueryData(queryKey, [...(cachedData ?? []), data]);
    },
    onError: queryHandler.onError
  });
};
