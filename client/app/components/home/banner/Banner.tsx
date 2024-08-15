import { FC } from 'react';
import { Text, View } from 'react-native';

import BannerImage from '@/assets/images/banner.png';
import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { Button } from '@/ui/button';
import { Image } from '@/ui/image';

export const Banner: FC = () => {
  const navigation = useAppNavigation();

  return (
    <View className={'p-5 items-start bg-green-500 rounded-2xl'}>
      <Text className={'mb-[30px] text-white text-lg font-bold'}>Fast delivery - delicious choice every time! </Text>
      <Button
        label={'Order now'}
        theme={'black'}
        size={'s'}
        width={'max'}
        onPress={() => navigation.navigate(ROUTES.explorer)}
      />
      <View className={'absolute bottom-0 right-4 w-28 h-28'}>
        <Image source={BannerImage} className={'w-full h-full'} />
      </View>
    </View>
  );
};
