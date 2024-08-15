import { FC } from 'react';
import { Text, View } from 'react-native';

import { PageContainer } from '@/components/pageContainer';
import { Icon } from '@/ui/icon';
import { Title } from '@/ui/title';

export const Success: FC = () => {
  return (
    <PageContainer>
      <View className={'flex-col justify-center items-center h-full gap-y-[20px]'}>
        <Icon size={80} className={'mb-[10px] text-green-500'} name={'checkcircle'} />
        <Title as={'h1'}>Thank you!</Title>
        <Text className={'text-gray-700 text-sm'}>Your order was paid successfully!</Text>
      </View>
    </PageContainer>
  );
};
