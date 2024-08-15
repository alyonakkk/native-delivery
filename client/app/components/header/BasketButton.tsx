import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { useBasket } from '@/hooks/api/useBasket';
import { Icon } from '@/ui/icon';

export const BasketButton: FC = () => {
  const navigation = useAppNavigation();
  const { data } = useBasket();

  return (
    <Pressable className={'ml-[8px] w-[24px] h-[24px]'} onPress={() => navigation.navigate(ROUTES.basket)}>
      <View className={'relative'}>
        <Icon
          className={navigation.currentRoute === ROUTES.basket ? 'text-green-500' : 'text-gray-500'}
          size={24}
          name={'shoppingcart'}
        />
        <View
          className={
            'absolute top-[-7px] right-[-7px] justify-center items-center w-[18px] h-[18px] bg-green-500 rounded-lg'
          }
        >
          <Text className={'text-xs text-white font-bold'}>{data?.products?.length || 0}</Text>
        </View>
      </View>
    </Pressable>
  );
};
