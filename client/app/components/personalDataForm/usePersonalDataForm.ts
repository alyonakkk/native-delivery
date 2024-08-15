import { useForm, useWatch } from 'react-hook-form';

import { useUpdatePersonalData } from '@/hooks/api/useUpdatePersonalData';
import { useAuth } from '@/hooks/useAuth';
import { IUserBody } from '@/types/user';

export const usePersonalDataForm = () => {
  const { user } = useAuth();
  const methods = useForm<IUserBody>({
    mode: 'onChange',
    defaultValues: {
      name: user?.name,
      email: user?.email
    }
  });
  const { control, reset } = methods;
  const { mutate, isPending } = useUpdatePersonalData();
  const oldPassword = useWatch({ control, name: 'oldPassword' });
  const newPassword = useWatch({ control, name: 'newPassword' });

  const handleSubmit = async (data: IUserBody) => {
    mutate(data);
    reset({ name: data.name, email: data.email });
  };

  return {
    methods,
    values: {
      oldPassword,
      newPassword
    },
    onSubmit: handleSubmit,
    isLoading: isPending
  };
};
