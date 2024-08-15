import * as yup from 'yup';

import { PATTERNS } from './patterns';

const PASSWORD_SCHEMA = yup
  .string()
  .min(8, 'Password must be at least 8 characters long')
  .max(24, 'Password length must be no more than 24 characters')
  .required('Password is required');

export const SCHEMAS = {
  email: yup
    .string()
    .required('Email is required')
    .matches(PATTERNS.email, 'Email must be in format example@gmail.com'),
  name: yup
    .string()
    .min(2, 'Name must be at least 8 characters long')
    .max(200, 'Name length must be no more than 24 characters')
    .matches(PATTERNS.name, 'Name must contain only latin letters')
    .required('Name is required'),
  password: PASSWORD_SCHEMA,
  newPassword: PASSWORD_SCHEMA,
  newPasswordConfirm: PASSWORD_SCHEMA.oneOf(
    [yup.ref('newPassword')],
    'Confirmation new password must be equal to new password'
  )
};
