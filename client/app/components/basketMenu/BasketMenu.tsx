import { FC } from 'react';
import { View } from 'react-native';

import { getConvertedPrice } from '@/helpers/getConvertedPrice';
import { Button } from '@/ui/button';
import { Title } from '@/ui/title';

import { useCheckout } from './useCheckout';

interface IBasketMenuProps {
  total: number;
}

export const BasketMenu: FC<IBasketMenuProps> = ({ total }) => {
  const handleCheckout = useCheckout();

  return (
    <View className={'fixed bottom-0 px-[20px] py-[10px]'}>
      <Title as={'h2'}>Total: {getConvertedPrice(total)}</Title>
      <Button className={'mt-[10px]'} label={'Checkout'} onPress={handleCheckout} />
    </View>
  );
};
