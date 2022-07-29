import React, { useCallback, useContext, useState } from 'react';
import { ViaCepResponse } from '../interfaces';

export interface AddressProps {
  data: ViaCepResponse | null;
  loading: boolean;
  error: string;
  setError: (error: string) => void;
  setLoading: (state: boolean) => void;
  setData: (data: ViaCepResponse) => void;
  resetApp: () => void;
}

const AddressContext = React.createContext<AddressProps>(
  {} as AddressProps
);

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ViaCepResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const setDataHandler = useCallback((receivingData: ViaCepResponse) => {
    setData(receivingData);
  }, []);

  const setLoadingHandler = useCallback((state: boolean) => {
    setLoading(state);
  }, []);

  const setErrorHandler = useCallback((state: string) => {
    setError(state);
  }, []);

  const resetHandler = useCallback(() => {
    setData(null);
    setLoading(false);
    setError('');
  }, []);

  return (
    <AddressContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        loading,
        error,
        setLoading: setLoadingHandler,
        setError: setErrorHandler,
        setData: setDataHandler,
        resetApp: resetHandler
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
