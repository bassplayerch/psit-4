import React, { useEffect } from 'react';
import { fbAuth } from '../firebase/firebase';
import { useAuthState } from '../hooks/useAuthState';
import SignupPage from './SignupPage/SignupPage';
import { Router } from '@reach/router';
import { Routes } from '../constants/routes';
import LoginPage from './LoginPage/LoginPage';
import HomePage from './HomePage/HomePage';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../redux/store';
import ActivateEmailPage from './ActivateEmailPage.tsx/ActivateEmailPage';

const App = () => {
  const { user, loading } = useAuthState();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return (
      <Router>
        <LoginPage path={Routes.LOGIN} />
        <SignupPage path={Routes.SIGNUP} />
      </Router>
    );
  }

  if (!user.emailVerified) {
    return <ActivateEmailPage path={Routes.HOME} />;
  }

  return <HomePage path={Routes.HOME} />;
};

export default App;
