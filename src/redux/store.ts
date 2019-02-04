import { AuthState, authState } from './authState/authState';
import { createStore, reducer } from 'easy-peasy';
// @ts-ignore
import {  reachify } from 'redux-first-history';
import { routerReducer, routerMiddleware } from './router';


export interface AppState {
  authState: AuthState;
  router: any;
}

export const store = createStore<AppState>(
  { authState, router: reducer(routerReducer) },
  { middlewares: [routerMiddleware] }
);

export const reachHistory = reachify(history);
