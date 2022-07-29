import React, { useCallback, useState } from 'react';
import { Card, CardContent } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import useAddress from '../../context/AddressContext';
import CEPInput from '../../components/CEPInput/CEPInput';
import api from '../../services/api';
import { ViaCepResponse } from '../../interfaces';

export default () => {
  const [value, setValue] = useState('');
  const { setData, setLoading, loading } = useAddress();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  const fetchApi = useCallback(async (val: string) => {
    try {
      setLoading(true);
      const request = await api(val);
      const { data: requestData } = request;
      setData(requestData as ViaCepResponse);
      return request;
    } catch (error) {
      throw new Error('fetchApi error');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <Card style={{ maxWidth: 420, justifyContent: 'space-around' }}>
      <CardContent style={{ padding: '1rem 2rem' }}>
        <CEPInput
          value={value}
          onChange={inputHandler}
        />
        <LoadingButton
          onClick={() => fetchApi(value)}
          disabled={loading || !value}
          loading={loading}
          loadingIndicator="Pesquisando…"
          variant="contained"
          style={{ marginLeft: '1rem', width: 140 }}
        >
          Pesquisar
        </LoadingButton>
      </CardContent>
    </Card>
  );
};
