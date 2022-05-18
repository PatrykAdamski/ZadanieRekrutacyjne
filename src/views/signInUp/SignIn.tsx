import React, { useEffect } from 'react';
import { InputForm } from '../../components/inputform/InputForm';
import { ILogin } from '../../type/ILogin';
import { useAuth } from '../../hooks/useAuth';

export const SignIn = ({}) => {
  const auth: ILogin = useAuth();
  useEffect(() => {
    auth.clearErrors();
  }, []);

  return (
    <form onSubmit={auth.handleLogin} className="user-form">
      <h2 className="user-form__title">Login</h2>
      <div className="user-form__single-field">
        <label htmlFor="email">E-mail:</label>
        <InputForm
          onAction={(e) => auth.setEmail(e.target.value)}
          name="email"
          placeholder="Email"
          type="email"
        />
        <span className="user-form__data--invalid">{auth.emailError}</span>
      </div>
      <div className="user-form__single-field">
        <label htmlFor="password">Password:</label>
        <InputForm
          onAction={(e) => auth.setPassword(e.target.value)}
          name="password"
          placeholder="Password"
          type="password"
        />
        <span className="user-form__data--invalid">{auth.passwordError}</span>
      </div>
      <button type="submit" className="user-form__btn">
        Login
      </button>
    </form>
  );
};
