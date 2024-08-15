import { FC } from 'react';
import { View } from 'react-native';

import { useAuth } from '@/hooks/useAuth';
import { useLogout } from '@/hooks/useLogout';
import { Button } from '@/ui/button';
import { Image } from '@/ui/image';
import { Title } from '@/ui/title';

import { NavList } from './NavList';

export const ProfileInfo: FC = () => {
  const { user } = useAuth();
  const handleLogout = useLogout();

  return (
    <View className={'flex justify-center items-center'}>
      <Image className={'mb-[10px] w-[100px] h-[100px] rounded-full'} source={{ uri: user?.photo }} />
      <View className={'mb-[20px]'}>
        <Title as={'h3'} className={'text-center'}>
          {user?.name}
        </Title>
      </View>
      <NavList />
      <Button className={'mt-[20px]'} label={'Logout'} onPress={handleLogout} />
    </View>
  );
};
