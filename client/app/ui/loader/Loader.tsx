import { memo } from 'react';
import { ActivityIndicator } from 'react-native';

interface ILoaderProps {
  theme?: 'green' | 'white';
}

const colors = {
  green: '#47AA52',
  white: '#FFFFFF'
};

export const Loader = memo(({ theme = 'green' }: ILoaderProps) => {
  return <ActivityIndicator size={'large'} color={colors[theme]} />;
});
