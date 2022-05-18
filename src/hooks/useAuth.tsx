import React, { ReactNode, useState, useContext } from 'react';
import fire from '../firebase/config';
import { ILogin } from '../type/ILogin';

const AuthContext = React.createContext<ILogin>({
  user: '',
  userId: '',
  setEmail: () => {},
  setPassword: () => {},
  emailError: '',
  passwordError: '',
  handleLogin: () => {},
  handleSignUp: () => {},
  handleLogout: () => {},
  authListener: () => {},
  clearErrors: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState('');
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err: { code: string; message: string }) => {
        switch (err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err: { code: string; message: string }) => {
        switch (err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user: any) => {
      if (user) {
        clearInputs();
        setUser(user);
        setUserId(user.uid);
      } else {
        setUser('');
      }
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        userId,
        setEmail,
        setPassword,
        handleLogout,
        handleSignUp,
        handleLogin,
        authListener,
        emailError,
        passwordError,
        clearErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw Error('useAuth needs to be used inside AuthContext');
  }
  return auth;
};
