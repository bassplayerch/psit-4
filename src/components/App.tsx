import React, { useEffect, FunctionComponent } from 'react';
import { fbAuth } from '../firebase/firebase';
import { useAuthState } from '../hooks/useAuthState';
import SignupPage from './SignupPage/SignupPage';

type AppProps = {
}

const App: FunctionComponent<AppProps> = props => {
  const { user, loading } = useAuthState();
  return (
    <div>
      <SignupPage/>
    </div>
  );
};

export default App;
