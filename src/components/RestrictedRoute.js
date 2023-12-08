import React from 'react';
import { Navigate } from 'react-router-dom';

import { CONTACTS_ROUTE } from 'constants/routes';
import { useAuth } from './hooks/uaeAuth';

export const RestrictedRoute = ({ children, navigateTo = CONTACTS_ROUTE }) => {
  const { authenticated } = useAuth();

  return authenticated ? <Navigate to={navigateTo} replace /> : children;
};
