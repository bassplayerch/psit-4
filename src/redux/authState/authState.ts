import { Action, Effect, effect } from 'easy-peasy';
import { Maybe } from '../../utils/types';
import { FirebaseError } from 'firebase';
import { AppState } from '../store';
import { fbAuth, db } from '../../firebase/firebase';
import { Collections } from '../../constants/collections';

export type SignupPayload = {
  email: string;
  password: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type UserPayload = {
  email: string;
  id: string;
};

export type User = {
  email: string;
  id: string;
};

export type AuthState = {
  loading: boolean;
  error: Maybe<FirebaseError>;
  user: Maybe<User>;
  signup: Effect<AppState, SignupPayload>;
  signupRequest: Action<AuthState, void>;
  signupSuccess: Action<AuthState, UserPayload>;
  signupFailure: Action<AuthState, FirebaseError>;
  sendActivationMail: Effect<AppState, firebase.User>;
  sendActivationMailRequest: Action<AuthState, void>;
  sendActivationMailSuccess: Action<AuthState, void>;
  sendActivationMailFailure: Action<AuthState, FirebaseError>;
  addUserToDb: Effect<AppState, UserPayload>;
  addUserToDbRequest: Action<AuthState, void>;
  addUserToDbSuccess: Action<AuthState, void>;
  addUserToDbFailure: Action<AuthState, FirebaseError>;
  login: Effect<AppState, LoginPayload>;
  loginRequest: Action<AuthState, void>;
  loginSuccess: Action<AuthState, void>;
  loginFailure: Action<AuthState, FirebaseError>;
  logout: Effect<AppState, void>;
  logoutRequest: Action<AuthState, void>;
  logoutSuccess: Action<AuthState, void>;
  logoutFailure: Action<AuthState, FirebaseError>;
  setCurrentUser: Action<AuthState, User>;
  removeCurrentUser: Action<AuthState, void>;
  test: Effect<AppState, void>;
  testRequest: Action<AuthState, void>;
  testSuccess: Action<AuthState, void>;
  testFailure: Action<AuthState, void>;
};

function createAsyncRequest<S, E, P, Q>(name: Q, payloadName: string) {
  const actions = {
    [`${name}Request`]: (state: S) => ({ ...state, loading: true }),
    [`${name}Success`]: (state: S, payload?: P) => ({ ...state, loading: false, error: null, payloadName: payload }),
    [`${name}Failure`]: (state: S, error: E) => ({ ...state, loading: false, error }),
  };
  return actions;
}

function createActionNames(name: string) {
  return [];
}

const testRequest = createAsyncRequest<AuthState, FirebaseError, User, 'test'>('test', 'test');

export const authState: AuthState = {
  loading: false,
  error: null,
  user: null,
  ...testRequest,
  test: effect(async dispatch => {
    try {
      dispatch.authState.testRequest();
      dispatch.authState.testSuccess();
    } catch (e) {
      dispatch.authState.testFailure();
    }
  }),
  signupRequest: state => ({ ...state, loading: true }),
  signupSuccess: (state, user) => ({ ...state, loading: false, user }),
  signupFailure: (state, error) => ({ ...state, loading: false, error }),
  signup: effect(async (dispatch, { email, password }) => {
    try {
      dispatch.authState.signupRequest();
      const fbUser = await fbAuth.createUserWithEmailAndPassword(email, password);
      const newUser = { email: fbUser.user!.email!, id: fbUser.user!.uid };
      dispatch.authState.signupSuccess(newUser);
      dispatch.authState.sendActivationMail(fbUser.user!);
      dispatch.authState.addUserToDb(newUser);
    } catch (e) {
      dispatch.authState.signupFailure(e);
    }
  }),
  sendActivationMailRequest: state => ({ ...state, loading: true }),
  sendActivationMailSuccess: state => ({ ...state, loading: false }),
  sendActivationMailFailure: (state, error) => ({
    ...state,
    loading: false,
    error,
  }),
  sendActivationMail: effect(async (dispatch, fbUser) => {
    try {
      dispatch.authState.sendActivationMailRequest();
      await fbUser.sendEmailVerification();
      dispatch.authState.sendActivationMailSuccess();
    } catch (e) {
      dispatch.authState.sendActivationMailFailure(e);
    }
  }),
  addUserToDbRequest: state => ({ ...state, loading: true }),
  addUserToDbSuccess: state => ({ ...state, loading: false }),
  addUserToDbFailure: (state, error) => ({ ...state, loading: false, error }),
  addUserToDb: effect(async (dispatch, { email, id }) => {
    try {
      dispatch.authState.addUserToDbRequest();
      await db
        .collection(Collections.USER)
        .doc(id)
        .set({ email, id });
      dispatch.authState.addUserToDbSuccess();
    } catch (e) {
      dispatch.authState.addUserToDbFailure(e);
    }
  }),
  loginRequest: state => ({ ...state, loading: true }),
  loginSuccess: state => ({ ...state, loading: false }),
  loginFailure: (state, error) => ({ ...state, loading: false, error }),
  login: effect(async (dispatch, { email, password }) => {
    try {
      dispatch.authState.loginRequest();
      await fbAuth.signInWithEmailAndPassword(email, password);
      if (fbAuth.currentUser && !fbAuth.currentUser.emailVerified) {
        dispatch.authState.sendActivationMail(fbAuth.currentUser);
      }
      dispatch.authState.loginSuccess();
    } catch (e) {
      dispatch.authState.loginFailure(e);
    }
  }),
  logoutRequest: state => ({ ...state, loading: true }),
  logoutSuccess: state => ({ ...state, loading: false }),
  logoutFailure: (state, error) => ({ ...state, loading: false, error }),
  logout: effect(async dispatch => {
    dispatch.authState.logoutRequest();
    try {
      await fbAuth.signOut();
      dispatch.authState.logoutSuccess();
    } catch (e) {
      dispatch.authState.logoutFailure(e);
    }
  }),
  setCurrentUser: (state, user) => ({ ...state, user }),
  removeCurrentUser: state => ({ ...state, user: {} }),
};

// signupRequest: state => ({ ...state, loading: true }),
// signupSuccess: (state, user) => ({ ...state, loading: false, user }),
// signupFailure: (state, error) => ({ ...state, loading: false, error }),
// signup: effect(async (dispatch, { email, password }) => {
//   try {
//     dispatch.authState.signupRequest();
//     const fbUser = await fbAuth.createUserWithEmailAndPassword(email, password);
//     const newUser = { email: fbUser.user!.email!, id: fbUser.user!.uid };
//     dispatch.authState.signupSuccess(newUser);
//     dispatch.authState.sendActivationMail(fbUser.user!);
//     dispatch.authState.addUserToDb(newUser);
//   } catch (e) {
//     dispatch.authState.signupFailure(e);
//   }
// }),

// signup: Effect<AppState, SignupPayload>;
// signupRequest: Action<AuthState, void>;
// signupSuccess: Action<AuthState, UserPayload>;
// signupFailure: Action<AuthState, FirebaseError>;
