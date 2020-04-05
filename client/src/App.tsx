import React from 'react';
import './App.css';
import { MessageComponent } from './components/message-component';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import { LoginComponent } from './components/login-component';
import { Unauthorized } from './components/unauthorized';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path = "/" component = { MessageComponent }/>
          <Route path = "/login" component = { LoginComponent }/>
          <Route path = '/error' component = { Unauthorized }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
