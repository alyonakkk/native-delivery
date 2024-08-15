import { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AuthProvider } from '@/providers/auth';
import { NavigationProvider } from '@/providers/navigation';
import { NotificationProvider } from '@/providers/notification';
import { QueryProvider } from '@/providers/query';
import { StoreProvider } from '@/providers/store';
import { StripeProvider } from '@/providers/stripe';

import { Content } from './Content';

export const Layout: FC = () => {
  return (
    <NavigationProvider>
      <StoreProvider>
        <AuthProvider>
          <QueryProvider>
            <SafeAreaProvider style={{ flexGrow: 1 }}>
              <StripeProvider>
                <Content />
              </StripeProvider>
            </SafeAreaProvider>
            <NotificationProvider />
          </QueryProvider>
        </AuthProvider>
      </StoreProvider>
    </NavigationProvider>
  );
};
