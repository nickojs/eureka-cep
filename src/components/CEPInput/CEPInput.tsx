/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Input } from '@mui/material';
import { IMaskInput } from 'react-imask';

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
}

const ParsedCEP = React.forwardRef<HTMLElement, InputProps>(
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

export default ({ onChange, value }: InputProps) => (
  <Input
    value={value}
    onChange={onChange}
    inputComponent={ParsedCEP as any}
    style={{ maxWidth: 100 }}
  />
);
