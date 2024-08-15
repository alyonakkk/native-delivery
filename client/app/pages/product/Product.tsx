import { FC } from 'react';
import { Text, View } from 'react-native';

import { PageContainer } from '@/components/pageContainer';
import { ProductDetailMenu } from '@/components/productDetailMenu';
import { getMediaSrc } from '@/helpers/getMediaSrc';
import { useProductBySlug } from '@/hooks/api/useProductBySlug';
import { Image } from '@/ui/image';
import { Interceptor } from '@/ui/interceptor';
import { Title } from '@/ui/title';

export const Product: FC = () => {
  const { data, isLoading, isError } = useProductBySlug();

  return (
    <>
      <PageContainer title={data?.name} productId={data?.id}>
        <Interceptor isLoading={isLoading} isError={isError}>
          <View className={'relative mb-[10px] items-center bg-gray-100 rounded-lg'}>
            <Image width={200} height={200} source={data?.photo ? { uri: getMediaSrc(data.photo) } : undefined} />
          </View>
          <Title as={'h2'}>{data?.name}</Title>
          <Text className={'mt-[4px] text-gray-600'}>{data?.description}</Text>
        </Interceptor>
      </PageContainer>
      {data && <ProductDetailMenu id={data.id} price={data.price} />}
    </>
  );
};
