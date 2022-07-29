import React, { useCallback, useContext, useState } from 'react';
import { ViaCepResponse } from '../interfaces';

export interface AddressProps {
  data: ViaCepResponse | null;
  setData: (data: ViaCepResponse) => void;
}

const AddressContext = React.createContext<AddressProps>(
  {} as AddressProps
);

export const AddressProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ViaCepResponse | null>(null);

  const setDataHandler = useCallback((receivingData: ViaCepResponse) => {
    setData(receivingData);
  }, []);

  return (
    <AddressContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
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
