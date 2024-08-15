import { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { getMediaSrc } from '@/helpers/getMediaSrc';
import { useCategories } from '@/hooks/api/useCategories';
import { Image } from '@/ui/image';
import { Interceptor } from '@/ui/interceptor';
import { Title } from '@/ui/title';

export const Categories: FC = () => {
  const navigation = useAppNavigation();
  const { data, isLoading, isError } = useCategories();
  const categoryList = data?.map(({ id, slug, photo, name }) => {
    return (
      <Pressable
        className={'px-[15px] py-[20px] bg-gray-100 rounded-xl'}
        key={id}
        onPress={() => navigation.navigate(ROUTES.category, { slug })}
      >
        <Image className={'w-[60px] h-[30px]'} source={photo ? { uri: getMediaSrc(photo) } : undefined} />
        <Text className={'mt-[10px] text-xs text-center'}>{name}</Text>
      </Pressable>
    );
  });

  return (
    <View className={'mt-[10px]'}>
      <View className={'mb-[10px]'}>
        <Title as={'h4'}>Categories</Title>
      </View>
      <Interceptor isError={isError} isEmpty={!categoryList?.length} isLoading={isLoading}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          {categoryList}
        </ScrollView>
      </Interceptor>
    </View>
  );
};
