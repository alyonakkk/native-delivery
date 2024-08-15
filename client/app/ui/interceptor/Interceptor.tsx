import { memo, ReactNode } from 'react';
import { Text } from 'react-native';

import { Loader } from '@/ui/loader';

interface IInterceptorProps {
  isLoading?: boolean;
  isError?: boolean;
  isEmpty?: boolean;
  children: ReactNode;
}

export const Interceptor = memo(({ children, isLoading, isError, isEmpty }: IInterceptorProps) => {
  if (isLoading) return <Loader />;

  if (isError) return <Text className={'text-gray-600 text-center'}>Oops! Some error was happened!</Text>;

  if (isEmpty) return <Text className={'text-gray-600 text-center'}>Oops! There are no items!</Text>;

  return <>{children}</>;
});
