import createHistory from 'history/createBrowserHistory';
// @ts-ignore;
import { createReduxHistoryContext } from 'redux-first-history';

export const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createHistory(),
  reduxTravelling: true,
});
