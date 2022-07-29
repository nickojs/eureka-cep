import React, { useState } from 'react';
import { Button, Card, CardContent } from '@mui/material';
import CEPInput from '../components/CEPInput/CEPInput';

export default () => {
  const [value, setValue] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  return (
    <Card style={{ maxWidth: 320 }}>
      <CardContent style={{ padding: '2rem' }}>
        <CEPInput
          value={value}
          onChange={inputHandler}
        />
        <Button
          variant="contained"
          style={{ marginLeft: '1rem' }}
        >
          Pesquisar
        </Button>
      </CardContent>
    </Card>
  );
};
