import { FC, useMemo } from 'react';

import { Catalog } from '@/components/catalog';
import { PageContainer } from '@/components/pageContainer';
import { useFavoriteProducts } from '@/hooks/api/useFavoriteProducts';

export const Favorites: FC = () => {
  const { data, isLoading, isError } = useFavoriteProducts();
  const formattedProducts = useMemo(() => {
    if (!data) return [];

    return data.map(({ product }) => product);
  }, [data]);

  return (
    <PageContainer title={'Favorites'}>
      <Catalog items={formattedProducts || []} isError={isError} isLoading={isLoading} />
    </PageContainer>
  );
};
