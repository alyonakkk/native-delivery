import { initPaymentSheet, presentPaymentSheet } from '@stripe/stripe-react-native';
import { useCallback } from 'react';
import Toast from 'react-native-toast-message';

import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { useBasket } from '@/hooks/api/useBasket';
import { useCreateOrder } from '@/hooks/api/useCreateOrder';
import { usePayOrder } from '@/hooks/api/usePayOrder';
import { useResetBasket } from '@/hooks/api/useResetBasket';
import { IOrderProductBody } from '@/types/order';

export const useCheckout = () => {
  const { navigate } = useAppNavigation();
  const create = useCreateOrder();
  const pay = usePayOrder();
  const { data: basket } = useBasket();
  const resetBasket = useResetBasket();

  return useCallback(async () => {
    if (!basket?.products?.length) return;

    const formattedProducts = basket.products.map<IOrderProductBody>(({ quantity, product }) => ({
      id: product.id,
      quantity,
      price: product.price
    }));

    await create.mutateAsync(
      { products: formattedProducts },
      {
        onSuccess: async (data) => {
          const { error } = await initPaymentSheet({
            merchantDisplayName: 'Merchant Name',
            paymentIntentClientSecret: data.paymentIntent
          });

          if (error) {
            Toast.show({ type: 'error', text1: 'Checkout error', text2: 'Please, try again' });
            return;
          }

          const { error: paymentError } = await presentPaymentSheet({});
          if (paymentError) {
            Toast.show({ type: 'error', text1: 'Payment error', text2: 'Please, try again' });
            return;
          }

          await pay.mutateAsync(data.id);
          await resetBasket.mutateAsync(basket.id);
          navigate(ROUTES.success);
        }
      }
    );
  }, [basket, create, navigate, pay, resetBasket]);
};
