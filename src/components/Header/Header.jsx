import React from 'react';
import { FaUserTimes } from 'react-icons/fa';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/uaeAuth';

export const Header = () => {
  const { authenticated } = useAuth();
  return (
    <header>
      <Navigation />
      {authenticated ? <UserMenu /> : <AuthNav />}
      {!authenticated && <FaUserTimes />}
    </header>
  );
};
