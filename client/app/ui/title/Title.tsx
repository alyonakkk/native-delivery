import classNames from 'classnames';
import { memo, PropsWithChildren } from 'react';
import { Text } from 'react-native';

export interface ITitleProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  className?: string;
}

export const Title = memo(({ as = 'h1', className, children }: ITitleProps) => {
  return (
    <Text
      className={classNames(
        'w-max font-bold',
        { h1: 'text-3xl', h2: 'text-2xl', h3: 'text-xl', h4: 'text-lg', h5: 'text-md' }[as],
        className
      )}
    >
      {children}
    </Text>
  );
});
