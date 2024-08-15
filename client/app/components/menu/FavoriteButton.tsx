import { FC, ReactNode } from 'react';
import { Text, View } from 'react-native';

import { useFavoriteProducts } from '@/hooks/api/useFavoriteProducts';

interface IFavoriteNavProps {
  children: ReactNode;
}

export const FavoriteButton: FC<IFavoriteNavProps> = ({ children }) => {
  const { data } = useFavoriteProducts();

  return (
    <View className={'relative'}>
      {!!data?.length && (
        <View
          className={
            'absolute top-[-7px] right-[-7px] z-[10] justify-center items-center w-[18px] h-[18px] bg-green-500 rounded-lg'
          }
        >
          <Text className={'text-xs text-white font-bold'}>{data.length}</Text>
        </View>
      )}
      {children}
    </View>
  );
};
