import React, { useEffect } from 'react';
import { fbAuth } from '../firebase/firebase';
import { useAuthState } from '../hooks/useAuthState';
import SignupPage from './SignupPage/SignupPage';
import { Routes } from '../constants/routes';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../redux/store';
import ActivateEmailPage from './ActivateEmailPage.tsx/ActivateEmailPage';
import { Route, withRouter } from 'react-router';

const App = withRouter(() => {
  const { user, loading } = useAuthState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return (
      <>
        <Route exact path={Routes.LOGIN} component={LoginPage} />
        <Route path={Routes.SIGNUP} component={SignupPage} />
      </>
    );
  }

  if (!user.emailVerified) {
    return <Route exact path={Routes.HOME} component={ActivateEmailPage} />;
  }

  return <Route exact path={Routes.HOME} component={HomePage} />;
});

export default App;
