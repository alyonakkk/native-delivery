import { StripeProvider as StripeNativeProvider } from '@stripe/stripe-react-native';
import { FC, PropsWithChildren } from 'react';

export const StripeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <StripeNativeProvider publishableKey={process.env.STRIPE_PUBLIC_KEY}>{children}</StripeNativeProvider>;
};
