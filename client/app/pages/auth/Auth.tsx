import { FC } from 'react';

import { AuthForm } from '@/components/authForm';
import { PageContainer } from '@/components/pageContainer';

export const Auth: FC = () => {
  return (
    <PageContainer>
      <AuthForm />
    </PageContainer>
  );
};
