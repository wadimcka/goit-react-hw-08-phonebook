import React from 'react';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/register">REGISTRATION</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOG IN</NavLink>
        </li>
      </ul>
    </div>
  );
};
