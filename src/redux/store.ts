import { AuthState, authState } from './authState/authState';
import { createStore, reducer } from 'easy-peasy';
import createHistory from 'history/createBrowserHistory';
// @ts-ignore
import { createReduxHistoryContext } from 'redux-first-history';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createHistory(),
});

export interface AppState {
  authState: AuthState;
  router: any;
}

export const store = createStore<AppState>(
  { authState, router: reducer(routerReducer) },
  { middlewares: [routerMiddleware] }
);

export const browserHistory = createReduxHistory(store);


