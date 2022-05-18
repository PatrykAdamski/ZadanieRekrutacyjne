import React, { useEffect } from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { Homepage } from './homepage/Homepage';
import { SignIn } from './signInUp/SignIn';
import { BooksProvider } from '../providers/BooksProvider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { SignUp } from './signInUp/SignUp';
import { useAuth } from '../hooks/useAuth';

export const Root = () => {
  const {
    user,
    authListener,
    handleLogin,
    handleSignUp,
    setPassword,
    setEmail,
    emailError,
    passwordError,
    handleLogout,
    clearErrors,
  } = useAuth();

  useEffect(() => {
    authListener();
  }, []);
  return (
    <Router>
      <BooksProvider>
        <Navigation user={user} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/signIn"
            element={
              user ? (
                <Navigate replace to="/" />
              ) : (
                <SignIn
                  clearErrors={clearErrors}
                  setPassword={setPassword}
                  setEmail={setEmail}
                  handleLogin={handleLogin}
                  emailError={emailError}
                  passwordError={passwordError}
                />
              )
            }
          />
          <Route
            path="/signUp"
            element={
              user ? (
                <Navigate replace to="/" />
              ) : (
                <SignUp
                  clearErrors={clearErrors}
                  setPassword={setPassword}
                  setEmail={setEmail}
                  handleSignUp={handleSignUp}
                  emailError={emailError}
                  passwordError={passwordError}
                />
              )
            }
          />
        </Routes>
      </BooksProvider>
    </Router>
  );
};
