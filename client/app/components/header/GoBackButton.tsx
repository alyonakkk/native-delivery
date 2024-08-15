import { FC } from 'react';
import { Pressable } from 'react-native';

import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { Icon } from '@/ui/icon';

export const GoBackButton: FC = () => {
  const navigation = useAppNavigation();

  if (!navigation.canGoBack()) return null;

  return (
    <Pressable className={'mr-[10px]'} onPress={() => navigation.goBack()}>
      <Icon name={'back'} size={24} className={'text-gray-500'} />
    </Pressable>
  );
};
