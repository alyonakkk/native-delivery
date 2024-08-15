import { FC } from 'react';

import { OrdersList } from '@/components/ordersList';
import { PageContainer } from '@/components/pageContainer';

export const Orders: FC = () => {
  return (
    <PageContainer title={'Orders'}>
      <OrdersList />
    </PageContainer>
  );
};
