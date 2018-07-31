import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="" render={
          (props) => {
            return <Login />
          }
        }/>
      </Switch>
    );
  }
}

export default App;