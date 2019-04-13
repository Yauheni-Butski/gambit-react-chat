import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './store/store'
import Chat from './containers/Chat'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Chat />
      </Provider>
    );
  }
}

export default App;
