import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Text, View } from 'react-native';

import { PATTERNS } from '@/const/patterns';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

import { useAuthForm } from './useAuthForm';

export const AuthForm: FC = () => {
  const { methods, info, onChangeType, onSubmit } = useAuthForm();
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = methods;

  return (
    <View className={'flex align-center justify-center gap-y-[16px] h-full w-max'}>
      <Text className={'text-3xl text-center'}>{info.title}</Text>
      <View>
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Email is required' },
            pattern: {
              value: PATTERNS.email,
              message: 'Enter email as example@mail.ru'
            }
          }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <Input
              rootClassName={'mb-[12px]'}
              autoCapitalize={'none'}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={error?.message}
              placeholder={'Email*'}
            />
          )}
          name={'email'}
        />
        <Controller
          control={control}
          rules={{
            required: { value: true, message: 'Password is required' },
            minLength: { value: 8, message: `Password mustn't be less than 8 symbols` }
          }}
          render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
            <Input
              autoCapitalize={'none'}
              secureTextEntry={true}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={error?.message}
              placeholder={'Password*'}
            />
          )}
          name={'password'}
        />
      </View>
      <View className={'flex gap-y-[12px]'}>
        <Button isDisabled={!isValid} label={info.submit} onPress={handleSubmit(onSubmit)} />
        <Button variant={'clear'} label={info.link} onPress={onChangeType} />
      </View>
    </View>
  );
};
