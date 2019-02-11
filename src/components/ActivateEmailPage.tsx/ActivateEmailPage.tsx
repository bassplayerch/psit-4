import React, { FunctionComponent } from 'react';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../../redux/store';

type ActivateEmailPageProps = {
  path: string;
};

const ActivateEmailPage: FunctionComponent<ActivateEmailPageProps> = () => {
  const logout = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.logout);

  return (
    <>
      <h1>An activation email was sent to your account...</h1>
      <button onClick={logout}>Back to login</button>
    </>
  );
};

export default ActivateEmailPage;
