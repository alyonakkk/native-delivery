import { FC, useState } from 'react';

import { Catalog } from '@/components/catalog';
import { PageContainer } from '@/components/pageContainer';
import { useProducts } from '@/hooks/api/useProducts';
import { useDebounce } from '@/hooks/useDebounce';
import { Input } from '@/ui/input';

export const Search: FC = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 700);
  const { data, isLoading, isError } = useProducts({ value: debouncedValue });

  return (
    <PageContainer title={'Search'}>
      <Input className={'mb-[20px]'} value={value} onChangeText={setValue} placeholder={'Search'} />
      <Catalog items={data || []} isError={isError} isLoading={isLoading} />
    </PageContainer>
  );
};
