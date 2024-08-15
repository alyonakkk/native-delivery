import { FC } from 'react';

import { Catalog } from '@/components/catalog';
import { PageContainer } from '@/components/pageContainer';
import { useCategoryBySlug } from '@/hooks/api/useCategoryBySlug';

export const Category: FC = () => {
  const { data, isLoading, isError } = useCategoryBySlug();

  return (
    <PageContainer title={data?.name}>
      <Catalog items={data?.products || []} isError={isError} isLoading={isLoading} />
    </PageContainer>
  );
};
