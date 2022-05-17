import React from 'react';
import { IInputForm } from '../../type/IInputForm';

export const InputForm: React.FC<IInputForm> = ({
  name,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <input
      name={name}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    ></input>
  );
};
