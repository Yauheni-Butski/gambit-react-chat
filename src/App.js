import React, { Component } from 'react';
import './App.css';

/* import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage"; */

import { RoomList } from "./containers/RoomList";
import { MessagesList } from "./containers/MessagesList";

class App extends Component {
  render() {
/*     return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    ); */
  return (
    <div className="app">
      <RoomList />
      <MessagesList />
    </div>
  );
  }
}

export default App;
