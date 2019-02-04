import React, { FunctionComponent, SyntheticEvent } from 'react';
import { useInput } from '../../hooks/useInput';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../../redux/store';
import { fbAuth } from '../../firebase/firebase';
import { Routes } from '../../constants/routes';
import { Link } from '@reach/router';

type ActivateEmailPageProps = {
  path: string;
};

const ActivateEmailPage: FunctionComponent<ActivateEmailPageProps> = props => {
  const logout = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.logout);

  return (
    <>
      <h1>An activation email was sent to your account...</h1>
      <button onClick={logout}>Back to login</button>
    </>
  );
};

export default ActivateEmailPage;
