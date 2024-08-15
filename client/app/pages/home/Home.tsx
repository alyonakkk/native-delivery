import { FC } from 'react';

import { Banner } from '@/components/home/banner';
import { Categories } from '@/components/home/categories';
import { Products } from '@/components/home/products';
import { PageContainer } from '@/components/pageContainer';
import { useAuth } from '@/hooks/useAuth';

export const Home: FC = () => {
  const { user } = useAuth();

  return (
    <PageContainer title={`Hello, ${user?.name}!`}>
      <Banner />
      <Categories />
      <Products />
    </PageContainer>
  );
};
