import { AxiosError } from 'axios';

export interface IDefaultData {
  status: number;
  message: string;
}

export interface IErrorValidateData {
  status: number;
  errors: IErrorValidateItem;
}

export interface IErrorValidateItem {
  [key: string]: string;
}

export type TAxiosError = AxiosError<IErrorValidateData> | null | undefined;
