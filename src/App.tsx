import { useStore, useAction, State, Dispatch } from 'easy-peasy';
import React, { useEffect } from 'react';
import { Todo, Model } from '.';

const App = () => {
  const todos = useStore((state: State<Model>) => state.todos.items);
  const addTodo = useAction((dispatch: Dispatch<Model>) => 
	dispatch.todos.addTodo,
  )

  return (
    <div>
      <h1>lol</h1>
      {todos.map(({id, title}: Todo) => <div key={id}>{title}</div>)}
      <button onClick={() => addTodo({title: "asd", userId: 4, id: 2, completed: false})}>add todo</button>
    </div>
  );
};

export default App;