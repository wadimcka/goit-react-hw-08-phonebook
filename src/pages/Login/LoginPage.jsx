import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logInThunk } from 'redux/auth/operations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlerlogInInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const formLogInSubmit = event => {
    event.preventDefault();
    const usreData = { email, password };
    dispatch(logInThunk(usreData));
    formReset();
  };

  const formReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Log in form</h1>
      <form onSubmit={formLogInSubmit}>
        <label>User email</label>
        <input
          type="email"
          name="email"
          value={email}
          // pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
          title="Enter your email address"
          placeholder="example@domain.com"
          required
          onChange={handlerlogInInputChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
          title="Enter your password"
          placeholder="Enter password"
          required
          onChange={handlerlogInInputChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default LoginPage;
