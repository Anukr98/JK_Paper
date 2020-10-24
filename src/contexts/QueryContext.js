import {createContext} from 'react';

export const initialQueryState = {
  name: '',
  area: '',
};

export const QueryContext = createContext({
  query: initialQueryState,
  setQuery: () => {},
});

