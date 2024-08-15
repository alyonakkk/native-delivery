import { QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

import { queryClient } from '@/config/query';

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
