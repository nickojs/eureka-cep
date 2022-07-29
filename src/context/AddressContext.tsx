import React, { useCallback, useContext, useState } from 'react';
import { ViaCepResponse } from '../interfaces';

export interface AddressProps {
  data: ViaCepResponse | null;
  loading: boolean;
  error: string;
  staticMap: string; // I think it's a base64
  setMap: (state: string) => void;
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
  const [staticMap, setStaticMap] = useState('');
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

  const setStaticMapHandler = useCallback((state: string) => {
    setStaticMap(state);
  }, []);

  const resetHandler = useCallback(() => {
    setData(null);
    setLoading(false);
    setError('');
    setStaticMap('');
  }, []);

  return (
    <AddressContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        loading,
        error,
        staticMap,
        setLoading: setLoadingHandler,
        setError: setErrorHandler,
        setData: setDataHandler,
        resetApp: resetHandler,
        setMap: setStaticMapHandler
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
