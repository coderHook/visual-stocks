import React from 'react';
import './App.css';
import Stocks from './components/Stocks'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Stocks />
      </div>
    </Provider>
  );
}

export default App;
