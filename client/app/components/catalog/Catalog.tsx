import { memo } from 'react';
import { View } from 'react-native';

import { IProduct } from '@/types/product';
import { Interceptor } from '@/ui/interceptor';

import { ProductCard } from './productCard/ProductCard';

interface IProductListProps {
  items: IProduct[];
  isLoading?: boolean;
  isError?: boolean;
}

export const Catalog = memo(({ items, isLoading, isError }: IProductListProps) => {
  const productList = items.map((item) => {
    return <ProductCard data={item} key={item.id} />;
  });

  return (
    <Interceptor isEmpty={!productList?.length} isLoading={isLoading} isError={isError}>
      <View className={'flex flex-row justify-between flex-wrap h-full'}>{productList}</View>
    </Interceptor>
  );
});
