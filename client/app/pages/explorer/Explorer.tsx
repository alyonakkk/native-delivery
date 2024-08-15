import { FC } from 'react';

import { Catalog } from '@/components/catalog';
import { PageContainer } from '@/components/pageContainer';
import { useProducts } from '@/hooks/api/useProducts';

export const Explorer: FC = () => {
  const { data, isLoading, isError } = useProducts();

  return (
    <PageContainer title={'Catalog'}>
      <Catalog items={data || []} isLoading={isLoading} isError={isError} />
    </PageContainer>
  );
};
