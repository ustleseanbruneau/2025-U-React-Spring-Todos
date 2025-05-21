import './App.css';
import TodoTable from './components/TodoTable';

function App() {

  const todos = [
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
    {rowNumber: 4, rowDescription: 'Charge Phone Battery', rowAssigned: 'User One'}
  ];

  const addTodo = () => {
    //console.log('Our addTodo btn has been clicked');  
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: 'New Todo',
        rowAssigned: 'User Three'
      };
      todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className='btn btn-primary' onClick={addTodo}>
            Add New Todo
          </button>
        </div>
      </div>
    </div>
  );
}

// Note about button onClick
// onClick={addTodo} => without () means we are passing the function reference  (function will be called when the button is clicked)
// onClick={addTodo()} => with () means we are calling the function immediately (function will be called when the component is rendered, not when the button is clicked)

export default App;
