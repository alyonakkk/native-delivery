import { FC } from 'react';
import { View } from 'react-native';

import { OrderItem } from '@/components/ordersList/OrderItem';
import { useOrders } from '@/hooks/api/useOrders';
import { Interceptor } from '@/ui/interceptor';

export const OrdersList: FC = () => {
  const { data, isLoading, isError } = useOrders();
  const ordersList = data?.map((order) => <OrderItem key={order.id} data={order} />);

  return (
    <Interceptor isError={isError} isLoading={isLoading} isEmpty={!data?.length}>
      <View>{ordersList}</View>
    </Interceptor>
  );
};
