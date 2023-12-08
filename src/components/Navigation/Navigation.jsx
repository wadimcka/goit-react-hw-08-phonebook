import React from 'react';

import { useAuth } from 'components/hooks/uaeAuth';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const { authenticated } = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        {authenticated && (
          <li>
            <NavLink to="/contacts">CONTACTS</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
