import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import { ROUTER } from '@/config/navigation/routes';
import { ROUTES } from '@/config/navigation/types';
import { useAuth } from '@/hooks/useAuth';

const Stack = createNativeStackNavigator<ROUTES>();

export const Router: FC = () => {
  const { user } = useAuth();
  const routesList = ROUTER.filter((route) => route.isPrivate === !!user).map((route) => {
    return (
      <Stack.Screen options={{ contentStyle: { flexGrow: 1, backgroundColor: '#fff' } }} key={route.name} {...route} />
    );
  });

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#fff' } }}>
      {routesList}
    </Stack.Navigator>
  );
};
