import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, setUserAction } from './actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux simple project</h1>

      <h1>Counter {counter}</h1>

      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>

      {!user && (
        <button
          onClick={() =>
          dispatch(setUserAction({ id: 1, name: 'Alexandra Egorova' }))
        }
        >
          Set User
        </button>
      )}

      {user && (
        <h3>{user.name}</h3>
      )}
    </div>
  );
}

export default App;
