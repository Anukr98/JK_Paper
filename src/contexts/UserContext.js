import {createContext} from 'react';

export const initialState = {
  isAuthenticated: false,
  token: undefined,
  user: {
    id: undefined,
    name: '',
  },
};

export const UserContext = createContext({
  authPayload: initialState,
  setAuthPayload: () => {},
  logout: () => {},
});
