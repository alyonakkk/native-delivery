import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { makeStore } from '@/config/store';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={makeStore()}>{children}</Provider>;
};
