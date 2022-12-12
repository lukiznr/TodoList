import React, {useState} from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const handleToggleTodo = (todo) => {
    const updatedTodos = todos.map(item => {
      if ( item.id === todo.id ) {
        item.done = !item.done;
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleEditTodo = (todo) => {
    const updatedTodos = todos.map(item => {
      if ( item.id === todo.id ) {
        item.text = prompt('Enter new todo', todo.text);
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (todo) => {
    const updatedTodos = todos.filter(item => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: e.target.text.value,
      done: false
    }

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text"/>
        <button type="submit">Add Todo</button>
      </form>
      {
        todos.map((todo, index) => (
          <div key={index}>
            <input 
              type="checkbox" 
              checked={todo.done}
              onChange={() => handleToggleTodo(todo)}
            />
            <span className={todo.done ? 'done' : null}>{todo.text}</span>
            <button onClick={() => handleEditTodo(todo)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
          </div>
        ))
      }
    </>
  );
};

export default TodoList;
