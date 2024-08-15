import { FC } from 'react';

import { PageContainer } from '@/components/pageContainer';
import { ProfileInfo } from '@/components/profile';

export const Profile: FC = () => {
  return (
    <PageContainer title={'Profile'}>
      <ProfileInfo />
    </PageContainer>
  );
};
