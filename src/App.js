import React from 'react';
import Counter from '../src/components/counter/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from '../src/feature/reducer';

const REDUX_DEV_TOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(
  counterReducer,
  REDUX_DEV_TOOLS
)

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
