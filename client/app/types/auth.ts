import { IUser } from '@/types/user';

export enum AUTH_API_KEY {
  session = 'session'
}

export enum TOKENS_KEY {
  access = 'accessToken',
  refresh = 'refreshToken'
}

export enum STORAGE_KEY {
  user = 'user'
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ILoggedInData {
  user: IUser;
  tokens: ITokens;
}

export interface IRefreshBody {
  refreshToken: string;
}

export interface IAuthBody {
  email: string;
  password: string;
}
