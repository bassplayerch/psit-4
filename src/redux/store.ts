import { AuthState, authState } from './authState/authState';
import { createStore, reducer, Reducer } from 'easy-peasy';
import { routerReducer, routerMiddleware } from './router/router';

export interface AppState {
  authState: AuthState;
  router: Reducer<any>;
}

// todo remove ts ignore once bug is fixed in the library
// @ts-ignore
export const store = createStore<AppState>({ authState, router: reducer(routerReducer) }, { middleware: [routerMiddleware] });
