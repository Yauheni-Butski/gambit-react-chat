import React, { Component } from 'react';
import './App.css';

/* import { Sidebar } from "./containers/Sidebar";
import { MessageList } from "./containers/MessageList";
import { AddMessage } from "./containers/AddMessage"; */

class App extends Component {
  render() {
    return (
      <div id="container">
        <aside id="sidebar">Users</aside>
        {/* <Sidebar /> */}
        <section id="main">
          <section id="message-list">Message List</section>
          {/* <MessageList /> */}
          <section id="new-message">New Message</section>
          {/* <AddMessage /> */}
        </section>
      </div>
    );
  }
}

export default App;
