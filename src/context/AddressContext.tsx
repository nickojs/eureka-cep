import React, { useCallback, useContext, useState } from 'react';
import { ViaCepResponse } from '../interfaces';

export interface AddressProps {
  data: ViaCepResponse | null;
  loading: boolean;
  setLoading: (state: boolean) => void;
  setData: (data: ViaCepResponse) => void;
}

const AddressContext = React.createContext<AddressProps>(
  {} as AddressProps
);

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ViaCepResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const setDataHandler = useCallback((receivingData: ViaCepResponse) => {
    setData(receivingData);
  }, []);

  const setLoadingHandler = useCallback((state: boolean) => {
    setLoading(state);
  }, []);

  return (
    <AddressContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        loading,
        setLoading: setLoadingHandler,
        setData: setDataHandler
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export default (): AddressProps => {
  const context = useContext(AddressContext);
  return context;
};
