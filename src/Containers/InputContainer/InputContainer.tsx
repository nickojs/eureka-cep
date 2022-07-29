import React, { useCallback, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import useAddress from '../../context/AddressContext';
import CEPInput from '../../components/CEPInput/CEPInput';
import api from '../../services/api';
import { ViaCepResponse } from '../../interfaces';

export default () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const { setData } = useAddress();

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
    <Card style={{ maxWidth: 320 }}>
      <CardContent style={{ padding: '2rem' }}>
        <CEPInput
          value={value}
          onChange={inputHandler}
        />
        <Button
          onClick={() => fetchApi(value)}
          disabled={loading || !value}
          variant="contained"
          style={{ marginLeft: '1rem' }}
        >
          Pesquisar
        </Button>
      </CardContent>
    </Card>
  );
};
