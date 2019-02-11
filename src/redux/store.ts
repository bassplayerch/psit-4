import { AuthState, authState } from './authState/authState';
import { createStore, reducer, Reducer } from 'easy-peasy';
import { routerReducer, routerMiddleware } from './router/router';

export interface AppState {
  authState: AuthState;
  router: Reducer<any>;
}

export const store = createStore<AppState>({ authState, router: reducer(routerReducer) }, { middleware: [routerMiddleware] });
