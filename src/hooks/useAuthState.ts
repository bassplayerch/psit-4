import { useEffect, useState } from 'react';

import { fbAuth } from '../firebase/firebase';
import { Maybe } from '../utils/types';
import { useAction, Dispatch } from 'easy-peasy';
import { AppState } from '../redux/store';

export function useAuthState() {
  const [user, setUser] = useState<Maybe<firebase.User>>(null);
  const [loading, setLoading] = useState(true);
  const setCurrentUser = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.setCurrentUser);
  const removeCurrentUser = useAction((dispatch: Dispatch<AppState>) => dispatch.authState.removeCurrentUser);

  useEffect(() => {
    const unsubscribe = fbAuth.onAuthStateChanged(currentUser => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
        setCurrentUser({ email: currentUser.email!, id: currentUser.uid });
      } else {
        setUser(null);
        removeCurrentUser();
      }
    });
    return () => unsubscribe();
  }, []);
  return { user, loading };
}
