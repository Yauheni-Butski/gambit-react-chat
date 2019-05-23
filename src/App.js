import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux';
import configureStore, {history} from './store/store';
import Chat from './containers/Chat';
import LoginForm from './containers/LoginForm';

const store = configureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
       <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={LoginForm}/>
            <Route path="/chat" component={Chat}/>
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
