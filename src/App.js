import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';
import Chat from './containers/Chat';
import LoginForm from './containers/LoginForm';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={LoginForm}/>
            <Route path="/chat" component={Chat}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
