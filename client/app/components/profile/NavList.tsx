import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';

import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { Icon } from '@/ui/icon';

const navigations: { path: ROUTES; title: string }[] = [
  { path: ROUTES.orders, title: 'Orders' },
  { path: ROUTES.personalData, title: 'Personal data' }
];

export const NavList: FC = () => {
  const { navigate } = useAppNavigation();
  const navList = navigations.map(({ path, title }) => {
    return (
      <Pressable
        className={'p-[15px] flex-row justify-between items-center w-full bg-gray-100 rounded-lg'}
        key={path}
        onPress={() => navigate(path)}
      >
        <Text className={'text-lg font-medium'}>{title}</Text>
        <Icon name={'right'} />
      </Pressable>
    );
  });

  return <View className={'flex-col gap-y-[10px]'}>{navList}</View>;
};
