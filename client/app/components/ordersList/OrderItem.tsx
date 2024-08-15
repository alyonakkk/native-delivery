import classNames from 'classnames';
import { FC } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { ROUTES } from '@/config/navigation/types';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { getConvertedPrice } from '@/helpers/getConvertedPrice';
import { getMediaSrc } from '@/helpers/getMediaSrc';
import { IOrder, ORDER_STATUSES } from '@/types/order';
import { Image } from '@/ui/image';
import { Title } from '@/ui/title';

interface IOrderItemProps {
  data: IOrder;
}

export const OrderItem: FC<IOrderItemProps> = ({ data }) => {
  const { id, status, total, createdAt, products } = data;
  const { navigate } = useAppNavigation();
  const productsList = products?.map(({ id, quantity, price, product: { photo, slug } }) => {
    return (
      <Pressable
        className={'relative p-[5px] w-[75px] h-[75px] justify-center items-center bg-white rounded-lg'}
        key={id}
        onPress={() => navigate(ROUTES.product, { slug })}
      >
        <Image width={75} height={75} source={{ uri: getMediaSrc(photo) }} />
        <View
          className={
            'absolute right-0 top-0 min-w-[20px] h-[20px] justify-center items-center bg-green-500 rounded-full'
          }
        >
          <Text className={'text-white text-xs font-bold'}>x{quantity}</Text>
        </View>
      </Pressable>
    );
  });

  return (
    <View className={'mb-[10px] p-[10px] bg-gray-100 rounded-xl'}>
      <View className={'flex-row justify-between items-center'}>
        <View className={'flex-row items-center'}>
          <Title as={'h3'}>Order #{id}</Title>
          <View
            className={classNames(
              'ml-[8px] py-[2px] px-[5px] rounded-xl',
              {
                [ORDER_STATUSES.created]: 'bg-blue-500',
                [ORDER_STATUSES.paid]: 'bg-lime-500',
                [ORDER_STATUSES.done]: 'bg-green-500',
                [ORDER_STATUSES.canceled]: 'bg-red-500',
                [ORDER_STATUSES.unpaid]: 'bg-gray-500'
              }[ORDER_STATUSES[status]]
            )}
          >
            <Text className={'text-white text-xs font-bold'}>{status}</Text>
          </View>
        </View>
        <Text className={'font-bold'}>{getConvertedPrice(total)}</Text>
      </View>
      <Text className={'mb-[20px] text-gray-500 text-xs'}>{new Date(createdAt).toLocaleString()}</Text>
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
        {productsList}
      </ScrollView>
    </View>
  );
};
