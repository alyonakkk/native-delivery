import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useLogin } from '@/hooks/api/useLogin';
import { useSignUp } from '@/hooks/api/useSignUp';
import { IAuthBody } from '@/types/auth';

type TAuthForm = 'login' | 'signup';

const authInfo: {
  [type: TAuthForm]: {
    title: string;
    link: string;
    submit: string;
  };
} = {
  login: {
    title: 'Please, log in!',
    link: `Don't have an account?`,
    submit: 'Login'
  },
  signup: {
    title: 'Please, sign up!',
    link: 'Have an account?',
    submit: 'Sign up'
  }
};

export const useAuthForm = () => {
  const [type, setType] = useState<TAuthForm>('login');
  const methods = useForm<IAuthBody>({
    mode: 'onChange'
  });
  const loginQuery = useLogin();
  const signupQuery = useSignUp();

  useEffect(() => {
    methods.reset();
  }, [type]);

  useEffect(() => {
    if (signupQuery.isSuccess) {
      setType('login');
    }
  }, [signupQuery.isSuccess]);

  const handleChangeType = () => {
    if (type === 'login') setType('signup');
    else setType('login');
  };
  const handleSubmit = (data: IAuthBody) => {
    if (type === 'login') loginQuery.mutate(data);
    else signupQuery.mutate(data);
  };

  return {
    info: authInfo[type],
    methods,
    onChangeType: handleChangeType,
    onSubmit: handleSubmit
  };
};
