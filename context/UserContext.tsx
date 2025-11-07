export interface UserContextType {
  name: string;
  isLoggedIn: boolean;
  login: (username: string) => void;
  logout: () => void;
}

import { createContext, useState } from 'react';

export const UserContext = createContext<UserContextType>({
  name: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});
