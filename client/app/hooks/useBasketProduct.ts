import { useMemo } from 'react';

import { useAddToBasket } from '@/hooks/api/useAddToBasket';
import { useBasket } from '@/hooks/api/useBasket';
import { useRemoveBasketProduct } from '@/hooks/api/useRemoveBasketProduct';
import { useUpdateBasketProduct } from '@/hooks/api/useUpdateBasketProduct';

export const useBasketProduct = (productId?: number) => {
  const basket = useBasket();
  const addToBasket = useAddToBasket();
  const updateBasketProduct = useUpdateBasketProduct();
  const removeFromBasket = useRemoveBasketProduct();
  const currentBasketProduct = useMemo(() => {
    if (!basket.data) return null;

    return basket.data.products.find(({ product }) => product.id === productId);
  }, [productId, basket.data]);

  const addProduct = () => {
    if (!basket?.data?.id || !productId) return;

    addToBasket.mutate({ basketId: basket.data.id, productId });
  };
  const incProduct = () => {
    if (!currentBasketProduct) return;

    updateBasketProduct.mutate({
      basketProductId: currentBasketProduct.id,
      quantity: currentBasketProduct.quantity + 1
    });
  };
  const decProduct = () => {
    if (!currentBasketProduct) return;

    const currentQuantity = currentBasketProduct.quantity - 1;

    if (currentQuantity <= 0) {
      removeFromBasket.mutate(currentBasketProduct.id);
    } else {
      updateBasketProduct.mutate({ basketProductId: currentBasketProduct.id, quantity: currentQuantity });
    }
  };

  return { basketProduct: currentBasketProduct, addProduct, incProduct, decProduct };
};
