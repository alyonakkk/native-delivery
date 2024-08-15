import { getFavoriteProducts } from '@/config/api';
import { useAppQuery } from '@/config/query';
import { FAVORITE_API_KEY, IFavoriteProduct } from '@/types/favorite';

export const useFavoriteProducts = () => {
  return useAppQuery<null, IFavoriteProduct[]>({
    queryKey: [FAVORITE_API_KEY.list],
    queryFn: getFavoriteProducts
  });
};
