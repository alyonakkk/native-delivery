export interface IUser {
  id: number;
  name: string;
  email: string;
  photo: string;
}

export interface IUserBody extends Omit<IUser, 'id' | 'photo'> {
  oldPassword?: string;
  newPassword?: string;
  newPasswordConfirm?: string;
}
