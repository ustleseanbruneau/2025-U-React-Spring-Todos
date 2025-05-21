import React, {useState} from 'react';  
import './App.css';
import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User One'}
  ]
  );

  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    //console.log('Our addTodo btn has been clicked');  
    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned
    };
    //todos.push(newTodo);
    setTodos(todos => [...todos, newTodo]);
    //console.log(todos);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button onClick={() => setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} /> }
        </div>
      </div>
    </div>
  );
}

// Note about button onClick
// onClick={addTodo} => without () means we are passing the function reference  (function will be called when the button is clicked)
// onClick={addTodo()} => with () means we are calling the function immediately (function will be called when the component is rendered, not when the button is clicked)

export default App;
