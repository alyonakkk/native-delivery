import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { View } from 'react-native';

import { PATTERNS } from '@/const/patterns';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

import { usePersonalDataForm } from './usePersonalDataForm';

export const PersonalDataForm: FC = () => {
  const { methods, values, isLoading, onSubmit } = usePersonalDataForm();
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = methods;

  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Name is required'
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
            placeholder={'Name*'}
          />
        )}
        name={'name'}
      />
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
          minLength: { value: 8, message: `Old password mustn't be less than 8 symbols` }
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <Input
            rootClassName={'mb-[12px]'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={error?.message}
            placeholder={'Old password'}
          />
        )}
        name={'oldPassword'}
      />
      <Controller
        control={control}
        rules={{
          deps: 'oldPassword',
          required: { value: !!values.oldPassword, message: 'New password confirmation is required' },
          minLength: { value: 8, message: `New password mustn't be less than 8 symbols` }
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <Input
            rootClassName={'mb-[12px]'}
            autoCapitalize={'none'}
            secureTextEntry={true}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={error?.message}
            placeholder={'New password'}
          />
        )}
        name={'newPassword'}
      />
      <Controller
        control={control}
        rules={{
          deps: 'newPassword',
          validate: (value) =>
            value !== values.newPassword ? 'New password confirmation must be equal to new password' : true,
          required: { value: !!values.newPassword, message: 'New password confirmation is required' },
          minLength: { value: 8, message: `New password confirmation mustn't be less than 8 symbols` }
        }}
        render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
          <Input
            autoCapitalize={'none'}
            secureTextEntry={true}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            error={error?.message}
            placeholder={'New password confirmation'}
          />
        )}
        name={'newPasswordConfirm'}
      />
      <Button
        isDisabled={!isValid}
        isLoading={isLoading}
        className={'mt-[20px]'}
        label={'Save'}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
