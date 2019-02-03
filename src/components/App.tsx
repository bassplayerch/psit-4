import React, { useEffect } from 'react';
import { fbAuth } from '../firebase/firebase';
import { useAuthState } from '../hooks/useAuthState';
import SignupPage from './SignupPage/SignupPage';

const App = () => {
  const { user, loading } = useAuthState();
  return (
    <div>
      <SignupPage/>
    </div>
  );
};

export default App;
