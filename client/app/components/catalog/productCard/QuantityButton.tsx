import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { getConvertedPrice } from '@/helpers/getConvertedPrice';
import { useBasketProduct } from '@/hooks/useBasketProduct';
import { Icon } from '@/ui/icon';

interface IButtonProps {
  id: number;
  price: number;
}

export const QuantityButton: FC<IButtonProps> = ({ id, price }) => {
  const { basketProduct, addProduct, incProduct, decProduct } = useBasketProduct(id);
  const currentPrice = basketProduct ? basketProduct.product.price * basketProduct.quantity : price;

  return (
    <View className={'mt-[8px] p-[5px] flex-row justify-center items-center bg-green-500 rounded-full'}>
      {basketProduct ? (
        <>
          <Pressable onPress={decProduct}>
            <Icon size={16} className={'text-white font-bold'} name={'minus'} />
          </Pressable>
          <Text className={'mx-[8px] text-white font-bold'}>{getConvertedPrice(currentPrice)}</Text>
          <Pressable onPress={incProduct}>
            <Icon size={16} className={'text-white font-bold'} name={'plus'} />
          </Pressable>
        </>
      ) : (
        <Pressable onPress={addProduct}>
          <Text className={'mx-[8px] text-white font-bold'}>{getConvertedPrice(currentPrice)}</Text>
        </Pressable>
      )}
    </View>
  );
};
