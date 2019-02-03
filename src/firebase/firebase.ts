import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDG2BH5zo2HH3-ylQNfe22bf8RUX_iySZ8',
  authDomain: 'psit4-716aa.firebaseapp.com',
  databaseURL: 'https://psit4-716aa.firebaseio.com',
  projectId: 'psit4-716aa',
  storageBucket: 'psit4-716aa.appspot.com',
  messagingSenderId: '744442120191',
};

const app = firebase.initializeApp(config);
const fbAuth = app.auth();
const db = app.firestore();

export { app, fbAuth, db };
