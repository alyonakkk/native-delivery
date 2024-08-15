import { useMemo } from 'react';

import { useAddFavoriteProduct } from '@/hooks/api/useAddFavoriteProduct';
import { useFavoriteProducts } from '@/hooks/api/useFavoriteProducts';
import { useRemoveFavoriteProduct } from '@/hooks/api/useRemoveFavoriteProduct';

interface IUseToggleFavoriteArgs {
  isActive: boolean;
  handleToggle: () => void;
}

export const useToggleFavorite = (productId: number): IUseToggleFavoriteArgs => {
  const addToFavorite = useAddFavoriteProduct();
  const removeFromFavorite = useRemoveFavoriteProduct();
  const { data } = useFavoriteProducts();
  const favoriteProduct = useMemo(() => {
    return data?.find(({ product }) => product.id === productId);
  }, [data, productId]);

  const handleToggle = () => {
    if (favoriteProduct) {
      removeFromFavorite.mutate(favoriteProduct.id);
    } else {
      addToFavorite.mutate(productId);
    }
  };

  return {
    isActive: !!favoriteProduct,
    handleToggle
  };
};
