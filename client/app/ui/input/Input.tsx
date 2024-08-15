import classNames from 'classnames';
import { memo } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

export interface IInputProps extends TextInputProps {
  error?: string;
  rootClassName?: string;
  className?: string;
  isDisabled?: boolean;
}

export const Input = memo(({ error, className, rootClassName, isDisabled, ...props }: IInputProps) => {
  return (
    <View className={rootClassName}>
      <TextInput
        pointerEvents={isDisabled ? 'none' : 'auto'}
        className={classNames(
          'p-[15px] text-lg border border-gray-300 focus:border-gray-400 rounded-lg',
          { 'opacity-70': isDisabled, 'border-red-300': !!error },
          className
        )}
        onChange={(e) => {}}
        {...props}
      />
      {!!error && <Text className={'text-sm text-red-600'}>{error}</Text>}
    </View>
  );
});
