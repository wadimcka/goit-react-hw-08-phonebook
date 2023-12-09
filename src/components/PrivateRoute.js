import React from 'react';
import { Navigate } from 'react-router-dom';

import { HOME_ROUTE } from 'constants/routes';
import { useAuth } from './hooks/uaeAuth';

export const PrivateRoute = ({ children, navigateTo = HOME_ROUTE }) => {
  const { authenticated, isRefreshing } = useAuth();

  const shouldRedirect = !authenticated && !isRefreshing;

  return shouldRedirect ? <Navigate to={navigateTo} replace /> : children;
};
