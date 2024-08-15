import { createContext } from 'react';

import { INavigationContext } from './types';

export const NavigationContext = createContext<INavigationContext>({ currentRoute: '' });
