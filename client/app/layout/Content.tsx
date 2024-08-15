import { FC } from 'react';

import { Menu } from '@/components/menu';
import { useAppNavigation } from '@/config/navigation/useAppNavigation';
import { useAuth } from '@/hooks/useAuth';
import { Router } from '@/providers/navigation';

export const Content: FC = () => {
  const { currentRoute } = useAppNavigation();
  const { user } = useAuth();

  return (
    <>
      <Router />
      {!!(user && currentRoute) && <Menu />}
    </>
  );
};
