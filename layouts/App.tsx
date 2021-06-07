import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import Login from '@pages/login';
import signUp from '@pages/signUp';

const App = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/login" />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={signUp} />
    </Switch>
  );
};

export default App;
