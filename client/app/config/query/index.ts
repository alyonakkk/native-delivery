import {
  QueryClient,
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions
} from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import Toast from 'react-native-toast-message';

import { IDefaultData, IErrorValidateData, TAxiosError } from '@/types';

const onError = (error: TAxiosError) => {
  console.log(error);
  if (!error?.response) return;

  const data: IErrorValidateData | IDefaultData = (error.response as AxiosResponse).data;

  if ('message' in data) {
    Toast.show({ type: 'error', text1: 'Error', text2: data.message });
  }
};

export const queryHandler = {
  onError
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false, retry: 0, staleTime: 60 * 60 * 1000 }
  }
});

export const useAppQuery = <
  TQueryFnData = unknown,
  TData = TQueryFnData,
  TError = TAxiosError,
  TQueryKey extends QueryKey = QueryKey
>(
  options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  queryClient?: QueryClient
) => useQuery(options, queryClient);

export const useAppMutation = <TData = unknown, TVariables = void, TError = TAxiosError, TContext = unknown>(
  options: UseMutationOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient
) => useMutation(options, queryClient);
