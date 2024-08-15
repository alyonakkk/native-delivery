import { FC } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Nav } from '@/components/menu/Nav';
import { ROUTES } from '@/config/navigation/types';
import { TIcons } from '@/ui/icon';

import { FavoriteButton } from './FavoriteButton';

interface IMenuItem {
  icon: TIcons;
  path: ROUTES;
}

const menuItems: IMenuItem[] = [
  { icon: 'home', path: ROUTES.home },
  { icon: 'hearto', path: ROUTES.favorites },
  { icon: 'search1', path: ROUTES.search },
  { icon: 'book', path: ROUTES.explorer },
  { icon: 'user', path: ROUTES.profile }
];

export const Menu: FC = () => {
  const { bottom } = useSafeAreaInsets();
  const menuList = menuItems.map(({ icon, path }) => {
    const ContainerTag = ROUTES.favorites === path ? FavoriteButton : View;

    return (
      <ContainerTag key={path}>
        <Nav path={path} icon={icon} />
      </ContainerTag>
    );
  });

  return (
    <View
      className={
        'pt-[15px] px-[10px] fixed bottom-0 right-0 left-0 flex flex-row justify-between item-center w-full bg-white border-t border-t-gray-400'
      }
      style={{ paddingBottom: bottom + 15 }}
    >
      {menuList}
    </View>
  );
};
