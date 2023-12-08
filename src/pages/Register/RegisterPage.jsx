import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registrThunk } from 'redux/auth/operations';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlerRegInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const formRegSubmit = event => {
    event.preventDefault();
    const usreData = { name, email, password };
    dispatch(registrThunk(usreData));

    formReset();
  };

  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign in form</h1>
      <form onSubmit={formRegSubmit}>
        <label>User name</label>
        <input
          type="text"
          name="name"
          value={name}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Enter name"
          required
          onChange={handlerRegInputChange}
        />
        <label>User email</label>
        <input
          type="email"
          name="email"
          value={email}
          title="Email address"
          placeholder="example@domain.com"
          required
          onChange={handlerRegInputChange}
        />
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={password}
          // pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{6,}/"
          title="Choose a strong password"
          placeholder="Enter password"
          required
          onChange={handlerRegInputChange}
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
};

export default RegisterPage;
