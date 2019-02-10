import { StoreProvider } from 'easy-peasy';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import { store } from './redux/store';
import * as serviceWorker from './serviceWorker';
import { theme } from './theme/theme';
import { LocationProvider } from '@reach/router';
import history from './redux/router/history';
import { Router } from 'react-router';

ReactDOM.render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
