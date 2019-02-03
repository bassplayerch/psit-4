import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, effect, StoreProvider, Action } from 'easy-peasy';
import { store } from './redux/store';



ReactDOM.render(
	<StoreProvider store={store}>
		<App/>
	</StoreProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
