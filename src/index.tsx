import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, effect, StoreProvider, Action } from 'easy-peasy';

const url = 'https://jsonplaceholder.typicode.com/todos';
// const saved = await (await fetch(url)).json();

export type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export interface TodosModel {
	items: Todo[];
	addTodo: Action<TodosModel, Todo>;
}

export interface Model {
	todos: TodosModel;
}

const store = createStore<Model>({
	todos: {
		items: [],
		addTodo: (state, payload) => {
			state.items.push(payload);
		}
	}
});

ReactDOM.render(
	<StoreProvider store={store}>
		<App />
	</StoreProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
