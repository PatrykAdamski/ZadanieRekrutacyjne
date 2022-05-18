import React from 'react';
import { Navigation } from '../components/navigation/Navigation';
import { BooksProvider } from '../providers/BooksProvider';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import { AppRoutes } from '../views/Routes';

export const Root = () => {
  return (
    <Router>
      <BooksProvider>
        <AuthProvider>
          <Navigation />
          <AppRoutes></AppRoutes>
        </AuthProvider>
      </BooksProvider>
    </Router>
  );
};
