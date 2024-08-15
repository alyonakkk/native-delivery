import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { getConvertedPrice } from '@/helpers/getConvertedPrice';
import { useBasketProduct } from '@/hooks/useBasketProduct';
import { Icon } from '@/ui/icon';

interface IProductDetailMenuProps {
  id?: number;
  price?: number;
}

export const ProductDetailMenu: FC<IProductDetailMenuProps> = ({ id, price }) => {
  const { basketProduct, addProduct, incProduct, decProduct } = useBasketProduct(id);

  return (
    <View
      className={'p-[10px] fixed bottom-0 flex-row justify-center items-center h-[60px] bg-green-500 rounded-t-2xl'}
    >
      {basketProduct ? (
        <>
          <Pressable onPress={decProduct}>
            <Icon size={30} className={'text-white font-bold'} name={'minus'} />
          </Pressable>
          <Text className={'mx-[16px] text-lg text-white font-bold'}>
            {basketProduct.quantity} x {getConvertedPrice(basketProduct.product.price)}
          </Text>
          <Pressable onPress={incProduct}>
            <Icon size={30} className={'text-white font-bold'} name={'plus'} />
          </Pressable>
        </>
      ) : (
        <>
          <Text className={'mx-[12px] text-lg text-white font-bold'}>{getConvertedPrice(price ?? 0)}</Text>
          <Pressable onPress={addProduct}>
            <Icon size={30} className={'text-white font-bold'} name={'plus'} />
          </Pressable>
        </>
      )}
    </View>
  );
};
