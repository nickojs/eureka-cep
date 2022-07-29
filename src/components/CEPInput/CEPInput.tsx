/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Input } from '@mui/material';
import { IMaskInput } from 'react-imask';

interface ParsedInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string
}

const ParsedCEP = React.forwardRef<HTMLElement, ParsedInputProps>(
  (props, ref) => {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="00000-000"
        onChange={onChange}
        ref={ref}
      />
    );
  }
);
export default () => {
  const [value, setValue] = useState('');

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const input = e.target.value;
    setValue(input);
  };

  return (
    <div>
      <Input
        value={value}
        onChange={inputHandler}
        inputComponent={ParsedCEP as any}
      />
    </div>
  );
};
