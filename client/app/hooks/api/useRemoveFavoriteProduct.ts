import { removeFavoriteProduct } from '@/config/api';
import { queryClient, queryHandler, useAppMutation } from '@/config/query';
import { FAVORITE_API_KEY, IFavoriteProduct } from '@/types/favorite';

export const useRemoveFavoriteProduct = () => {
  return useAppMutation<null, number>({
    mutationFn: (productId) => removeFavoriteProduct(productId),
    onSuccess: async (data, id) => {
      const queryKey = [FAVORITE_API_KEY.list];
      const cachedData = queryClient.getQueryData<IFavoriteProduct[]>(queryKey);
      const currentFavorites = cachedData?.filter((favoriteCache) => favoriteCache.id !== id);

      queryClient.setQueryData(queryKey, currentFavorites ?? []);
    },
    onError: queryHandler.onError
  });
};
