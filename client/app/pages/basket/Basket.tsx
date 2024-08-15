import { FC, useMemo } from 'react';

import { BasketMenu } from '@/components/basketMenu';
import { Catalog } from '@/components/catalog';
import { PageContainer } from '@/components/pageContainer';
import { useBasket } from '@/hooks/api/useBasket';

export const Basket: FC = () => {
  const { data, isLoading, isError } = useBasket();
  const formattedProducts = useMemo(() => {
    if (!data?.products) return [];

    return data?.products.map(({ product }) => product);
  }, [data?.products]);
  const totalPrice = useMemo(() => {
    return (
      data?.products?.reduce((acc, { product, quantity }) => {
        return acc + product.price * quantity;
      }, 0) ?? 0
    );
  }, [data?.products]);

  return (
    <>
      <PageContainer title={'Basket'}>
        <Catalog items={formattedProducts} isLoading={isLoading} isError={isError} />
      </PageContainer>
      {data && <BasketMenu total={totalPrice} />}
    </>
  );
};
