import { FC } from 'react';
import { View } from 'react-native';

import { FavoriteButton } from '@/components/favoriteButton';
import { BasketTrashButton } from '@/components/header/BasketTrashButton';
import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { Title } from '@/ui/title';

import { BasketButton } from './BasketButton';
import { GoBackButton } from './GoBackButton';

interface IHeaderProps {
  title?: string;
  productId?: number;
}

export const Header: FC<IHeaderProps> = ({ title, productId }) => {
  const navigation = useAppNavigation();

  return (
    <View className={'px-[20px] py-[10px] sticky top-[30px] z-10 flex-row justify-between items-center bg-white'}>
      <View className={'flex-row items-center'}>
        <GoBackButton />
        <Title>{title}</Title>
      </View>
      <View className={'flex-row items-center gap-x-[12px]'}>
        {navigation.currentRoute === ROUTES.product && <FavoriteButton productId={productId} />}
        <View className={'flex-row'}>
          {navigation.currentRoute === ROUTES.basket && <BasketTrashButton />}
          <BasketButton />
        </View>
      </View>
    </View>
  );
};
