import { FC } from 'react';
import { Pressable } from 'react-native';

import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { Icon, TIcons } from '@/ui/icon';

interface INavProps {
  path: string;
  icon: TIcons;
}

export const Nav: FC<INavProps> = ({ path, icon }) => {
  const navigation = useAppNavigation();
  const isActive = path === navigation.currentRoute;

  return (
    <Pressable onPress={() => navigation.navigate(path)}>
      <Icon size={26} className={isActive ? 'text-green-500' : 'text-gray-400'} name={icon} />
    </Pressable>
  );
};
