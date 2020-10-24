import { createContext } from 'react';

export const initialPartyState = {
    data : {}
  }
  
  export const PartyContext = createContext({
    items : initialPartyState,
    setData : (data) => {}
  })