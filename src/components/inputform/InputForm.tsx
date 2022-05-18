import React from 'react';
import { IInputForm } from '../../type/IInputForm';

export const InputForm: React.FC<IInputForm> = ({
  name,
  type,
  onAction,
  placeholder,
}) => {
  return (
    <input
      name={name}
      type={type}
      onChange={onAction}
      placeholder={placeholder}
      className="input"
    ></input>
  );
};
