import { FC } from 'react';
import { View } from 'react-native';

import { Catalog } from '@/components/catalog';
import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { useProducts } from '@/hooks/api/useProducts';
import { Button } from '@/ui/button';
import { Title } from '@/ui/title';

export const Products: FC = () => {
  const { navigate } = useAppNavigation();
  const { data, isLoading, isError } = useProducts({ limit: 4 });

  return (
    <View className={'mt-[20px]'}>
      <View className={'mb-[10px] flex-row justify-between items-center'}>
        <Title as={'h4'}>Products</Title>
        <Button
          label={'More'}
          size={'xs'}
          theme={'green'}
          variant={'clear'}
          width={'max'}
          onPress={() => navigate(ROUTES.explorer)}
        />
      </View>
      <Catalog items={data || []} isLoading={isLoading} isError={isError} />
    </View>
  );
};
