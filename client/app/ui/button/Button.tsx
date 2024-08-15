import classNames from 'classnames';
import { memo } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

import { Icon, TIcons } from '@/ui/icon';
import { Loader } from '@/ui/loader';

export interface IButtonProps extends Omit<PressableProps, 'disabled'> {
  label?: string;
  theme?: 'green' | 'black';
  variant?: 'fill' | 'clear' | 'outline';
  shape?: 'square' | 'rounded';
  size?: 'xs' | 's' | 'm';
  width?: 'full' | 'max';
  icon?: TIcons;
  className?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const themeVar = {
  green: {
    fill: 'bg-green-500 active:bg-green-600',
    clear: 'bg-transparent',
    outline: 'border border-green-500 active:border-green-600'
  },
  black: {
    fill: 'bg-gray-950 active:bg-gray-800',
    clear: 'bg-transparent',
    outline: 'border border-gray-950 active:border-gray-800'
  }
};
const textVar = {
  green: {
    fill: 'text-white',
    clear: 'text-green-500 group-active/button:text-green-600',
    outline: 'text-green-500 group-active/button:text-green-600'
  },
  black: {
    fill: 'text-white',
    clear: 'text-gray-950 group-active/button:text-gray-800',
    outline: 'text-gray-950 group-active/button:text-gray-800'
  }
};

export const Button = memo(
  ({
    label,
    theme = 'green',
    variant = 'fill',
    shape = 'square',
    size = 'm',
    width = 'full',
    icon,
    className,
    isDisabled,
    isLoading,
    ...props
  }: IButtonProps) => {
    return (
      <Pressable
        disabled={isDisabled}
        pointerEvents={isDisabled ? 'none' : 'auto'}
        className={classNames(
          'group/button flex justify-center rounded-lg',
          {
            ...themeVar[theme]
          }[variant],
          { rounded: 'rounded-full' }[shape],
          { xs: 'p-[5px]', s: 'p-[10px]', m: 'p-[15px]' }[size],
          { full: 'w-full', max: 'w-max' }[width],
          { 'opacity-70': isDisabled || isLoading },
          className
        )}
        {...props}
      >
        <View className={'flex-row justify-center items-center gap-x-[6px]'}>
          {isLoading && <Loader theme={'white'} />}
          {icon && !isLoading && (
            <Icon
              className={classNames(
                'text-center font-bold',
                {
                  ...textVar[theme]
                }[variant],
                { s: 'text-md', m: 'text-lg' }[size]
              )}
              size={16}
              name={icon}
            />
          )}
          <Text
            className={classNames(
              'text-center font-bold',
              {
                ...textVar[theme]
              }[variant],
              { s: 'text-md', m: 'text-lg' }[size]
            )}
          >
            {label}
          </Text>
        </View>
      </Pressable>
    );
  }
);
