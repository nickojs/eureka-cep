import React, { useCallback, useEffect, useState } from 'react';
import { Card, CardContent } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import useAddress from '../../context/AddressContext';
import CEPInput from '../../components/CEPInput/CEPInput';
import { getCepAPi } from '../../services/api';
import { ViaCepResponse } from '../../interfaces';

const isCEPValid = (value: string) => value.replace(/-/g, '').length === 8;

export default () => {
  const [value, setValue] = useState('');
  const {
    setData, setLoading, setError, resetApp, error, loading
  } = useAddress();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  const fetchApi = useCallback(async (val: string) => {
    try {
      resetApp();
      setLoading(true);
      const request = await getCepAPi(val);
      const { data: requestData } = request;
      if (requestData.erro) {
        return setError('Não foi possível acessar esse CEP');
      }
      setData(requestData as ViaCepResponse);
      return request;
    } catch (err) {
      return setError('Não foi possível acessar esse CEP');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (error.length > 0) setValue('');
  }, [error]);

  return (
    <Card style={{ width: 420, justifyContent: 'space-around' }}>
      <CardContent style={{ padding: '1rem 2rem' }}>
        <CEPInput
          value={value}
          onChange={inputHandler}
        />
        <LoadingButton
          onClick={() => fetchApi(value)}
          disabled={loading || !value || !isCEPValid(value) || !!error}
          loading={loading}
          loadingIndicator="..."
          variant="contained"
          style={{ marginLeft: '1rem', maxWidth: 140 }}
        >
          Pesquisar
        </LoadingButton>
      </CardContent>
    </Card>
  );
};
