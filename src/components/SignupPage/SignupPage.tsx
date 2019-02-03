import React, { SyntheticEvent } from 'react';
import { useInput } from '../../hooks/useInput';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../../redux/store';

const SignupPage = () => {
  const email = useInput();
  const password = useInput();
  const signup = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.signup);

  function handleSignup(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    signup({ email: email.value, password: password.value });
  }

  return (
    <>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup}>
        <input type="email" {...email} />
        <input type="password" {...password} />
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignupPage;
