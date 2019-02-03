import { useEffect, useState } from 'react';

import { fbAuth } from '../firebase/firebase';
import { Maybe } from '../utils/types';

export function useAuthState() {
  const [user, setUser] = useState<Maybe<firebase.User>>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log('inside effect')
    const unsubscribe = fbAuth.onAuthStateChanged(currentUser => {
      setLoading(false);
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [user, loading]);
  return { user, loading };
}
