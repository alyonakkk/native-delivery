import { FC } from 'react';

import { PageContainer } from '@/components/pageContainer';
import { PersonalDataForm } from '@/components/personalDataForm';

export const PersonalData: FC = () => {
  return (
    <PageContainer title={'Personal data'}>
      <PersonalDataForm />
    </PageContainer>
  );
};
