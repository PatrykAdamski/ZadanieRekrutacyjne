import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Homepage } from './homepage/Homepage';
import { SignIn } from './signInUp/SignIn';
import { SignUp } from './signInUp/SignUp';
import { Favorites } from './favorites/Favorites';

export const AppRoutes = () => {
  const auth = useAuth();
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/signIn" element={auth.user ? <Homepage /> : <SignIn />} />
      <Route path="/signUp" element={auth.user ? <Homepage /> : <SignUp />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
