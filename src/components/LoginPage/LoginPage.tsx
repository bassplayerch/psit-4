import React, { SyntheticEvent } from 'react';
import { useInput } from '../../hooks/useInput';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../../redux/store';
import { Routes } from '../../constants/routes';
import { NavLink } from 'react-router-dom';

const LoginPage = (props: any) => {
  const email = useInput();
  const password = useInput();
  const login = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.login);

  function handleLogin(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email: email.value, password: password.value });
  }

  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <input type="email" {...email} />
        <input type="password" {...password} />
        <button type="submit">Log In</button>
      </form>
      <NavLink exact to={Routes.SIGNUP}>
        Create an Account
      </NavLink>
    </>
  );
};

export default LoginPage;
