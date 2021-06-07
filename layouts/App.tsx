import React from 'react';
import loadable from '@loadable/component';
import { Switch, Redirect, Route } from 'react-router-dom';

const Login = loadable(() => import('@pages/login'));
const signUp = loadable(() => import('@pages/signUp'));

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
