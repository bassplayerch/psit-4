import { AuthState, authState } from './authState/authState';
import { createStore, reducer, Reducer } from 'easy-peasy';
// @ts-ignore
import { reachify } from 'redux-first-history';
import { routerReducer, routerMiddleware } from './router/router';

export interface AppState {
  authState: AuthState;
  router: Reducer<any>;
}

export const store = createStore<AppState>({ authState, router: reducer(routerReducer) }, { middlewares: [routerMiddleware] });

export const reachHistory = reachify(history);
