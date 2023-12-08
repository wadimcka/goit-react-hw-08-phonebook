import React from 'react';
import { useDispatch } from 'react-redux';
import { FaUserCheck } from 'react-icons/fa';

import { logOutThunk } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/uaeAuth';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { userData } = useAuth();
  return (
    <div>
      <p>Welcome, {userData.name} !</p>
      <FaUserCheck />
      <button type="button" onClick={() => dispatch(logOutThunk())}>
        Logout
      </button>
    </div>
  );
};
