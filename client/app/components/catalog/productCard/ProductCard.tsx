import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { FavoriteButton } from '@/components/favoriteButton';
import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { getMediaSrc } from '@/helpers/getMediaSrc';
import { useBasketProduct } from '@/hooks/useBasketProduct';
import { IProduct } from '@/types/product';
import { Image } from '@/ui/image';

import { Quantity } from './Quantity';
import { QuantityButton } from './QuantityButton';

interface IProductCardProps {
  data: IProduct;
}

export const ProductCard: FC<IProductCardProps> = ({ data }) => {
  const { id, category, name, slug, photo, price } = data;
  const { navigate } = useAppNavigation();
  const { basketProduct } = useBasketProduct(id);

  return (
    <Pressable className={'relative overflow-hidden'} onPress={() => navigate(ROUTES.product, { slug })}>
      <View className={'absolute top-[7px] right-[7px] z-10'}>
        <FavoriteButton productId={id} size={20} />
      </View>
      <View className={'relative w-[150px] h-[150px] bg-gray-100 rounded-xl overflow-hidden'}>
        <Quantity quantity={basketProduct?.quantity} />
        <Image source={{ uri: getMediaSrc(photo) }} width={150} height={150} />
      </View>
      <View className={'my-[10px]'}>
        <Text className={'font-semibold text-base'}>{name}</Text>
        <Text className={'mt-[3px]'}>{category.name}</Text>
        <QuantityButton id={id} price={price} />
      </View>
    </Pressable>
  );
};
