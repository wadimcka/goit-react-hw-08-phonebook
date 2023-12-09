import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';

import { FaUserTimes } from 'react-icons/fa';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'components/hooks/uaeAuth';
import { grey } from '@mui/material/colors';

export const Header = () => {
  const { authenticated } = useAuth();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'rgba(236, 236, 236, 0.8)' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Navigation />
        {authenticated ? <UserMenu /> : <AuthNav />}
        {!authenticated && <FaUserTimes />}
      </Toolbar>
    </AppBar>
  );
};
