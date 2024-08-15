import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteItemAsync, getItemAsync, setItemAsync } from 'expo-secure-store';

import { ITokens, STORAGE_KEY, TOKENS_KEY } from '@/types/auth';
import { IUser } from '@/types/user';

export const getAccessToken = async () => {
  return (await getItemAsync(TOKENS_KEY.access)) ?? '';
};

export const getRefreshToken = async () => {
  return (await getItemAsync(TOKENS_KEY.refresh)) ?? '';
};

export const setTokens = async ({ accessToken, refreshToken }: ITokens) => {
  await setItemAsync(TOKENS_KEY.access, accessToken);
  await setItemAsync(TOKENS_KEY.refresh, refreshToken);
};

export const removeTokens = async () => {
  await deleteItemAsync(TOKENS_KEY.access);
  await deleteItemAsync(TOKENS_KEY.refresh);
};

export const getUserStorage = async () => {
  try {
    return await JSON.parse((await AsyncStorage.getItem(STORAGE_KEY.user)) || '{}');
  } catch (e) {
    return e;
  }
};

export const saveUserStorage = async (data: IUser) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY.user, JSON.stringify(data));
  } catch (e) {
    return e;
  }
};

export const removeUserStorage = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY.user);
  } catch (e) {
    return e;
  }
};

export const logout = async () => {
  await removeTokens();
  await removeUserStorage();
};
