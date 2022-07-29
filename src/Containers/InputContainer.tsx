import React, { useCallback, useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import CEPInput from '../components/CEPInput/CEPInput';
import api from '../services/api';

export default () => {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  const fetchApi = useCallback(async (data: string) => {
    try {
      setLoading(true);
      const request = await api(data);
      return request;
    } catch (error) {
      console.log(error);
      return error;
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
